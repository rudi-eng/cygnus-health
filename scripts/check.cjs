// Behavioral regression checks. Uses isolated memory, never visitor data.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const memory=new Map();
const context={console,URLSearchParams,Intl,Date,Math,Set,JSON,Number,String,Object,Array,RegExp,setTimeout,clearTimeout,
  localStorage:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,String(v))},
  location:{hash:'#/',pathname:'/',search:''},history:{replaceState(){}},
  document:{addEventListener(){},getElementById(){return null;}},
};
context.window=context;vm.createContext(context);
for(const file of ['config','store','content','recipes','recipe-book','pages','experience','ui']) {
  const code=fs.readFileSync(`js/${file}.js`,'utf8').replace(/\nstart\(\);\s*$/,'');
  vm.runInContext(code,context,{filename:`js/${file}.js`});
}
let count=0;const check=(name,fn)=>{fn();count++;console.log('PASS '+name);};
check('cart preserves existing storage keys, merges choices, clamps quantities',()=>{
  context.addToCart({booklet:'tr',size:7,qty:1});context.addToCart({booklet:'tr',size:7,qty:2});context.addToCart({booklet:'en',size:9,qty:2});
  assert.equal(context.getCart().length,2);assert.equal(context.cartCount(),5);assert.equal(context.cartTotal(),2000);assert.equal(context.getCart()[1].size,7);
  context.updateQty('tr|7',999);assert.equal(context.getCart()[0].qty,9);context.removeLine('en|7');assert.equal(context.getCart().length,1);
});
check('all nine pages and ritual details render in both languages',()=>{
  for(const lang of ['tr','en']){
    context.setLang(lang);
    for(const page of ['home','shop','booklet','recipes','care','order','passport','greenhouse','story']) {
      const html=context.renderPage({page,id:''});
      assert.ok(html.includes('<h1>'),lang+'/'+page);assert.ok(!html.includes('undefined'),lang+'/'+page);
      assert.ok(!/Aslana|seramik|ceramic|ready to cut|Kesebilirsiniz/.test(html),lang+'/'+page);
    }
    for(const r of context.RECIPES)assert.ok(context.renderPage({page:'recipes',id:r.id}).includes(context.tx(r.title)));
  }
});
check('practical recipes include ingredients, directions and precautions in both languages',()=>{
  assert.equal(context.BOOK_RECIPES.length,6);assert.equal(context.RECIPES.length,12);
  for(const lang of ['tr','en']){context.setLang(lang);for(const r of context.BOOK_RECIPES){
    assert.ok(r.ingredients[lang].length>=2);assert.ok(r.steps[lang].length>=4);assert.ok(r.caution[lang].length>30);
    const html=context.renderRecipeDetail(r);assert.ok(html.includes(context.ui().common.ingredients));assert.ok(html.includes('before-start'));
  }}
});
check('book separates medical evidence and excludes unvalidated storage promises',()=>{
  assert.equal(context.CHAPTERS.length,11);const chapter=context.CHAPTERS.find(c=>c.id==='benefits');assert.ok(chapter.paras.en.join(' ').includes('no medical-treatment recipe'));
  assert.ok(!/fridge for 7 days|fridge past 3 days|buzdolabında 7 gün|buzdolabında 3 gün/.test(JSON.stringify(context.CHAPTERS)));
  assert.ok(context.BOOK_RECIPES.every(r=>/discard/i.test(r.steps.en.join(' '))));
  context.setLang('en');assert.ok(context.renderRecipes({id:''}).includes('not medical-treatment recipes'));
});
check('recipe search and saved filtering work',()=>{
  context.setSearch('portrait');context.setRecipeFilter('all');assert.equal(context.visibleRecipes().length,1);
  context.setSearch('');context.toggleFav('first-portrait');context.setRecipeFilter('saved');assert.equal(context.visibleRecipes().length,1);
  context.setRecipeFilter('all');
});
check('order message uses Cygnus, existing price, and 7 cm pot',()=>{
  context.saveForm({name:'Test Grower',phone:'05551112233',city:'İzmir',address:'Test address only'});
  const msg=context.buildOrderMessage();assert.ok(msg.startsWith('CYGNUS'));assert.ok(msg.includes('CYG-'));assert.ok(msg.includes('7 cm'));assert.ok(!msg.includes('9 cm'));
  assert.equal(context.waNumber(),'');assert.equal(context.validateForm(context.getForm()).length,0);
  assert.equal(context.validateForm({name:'A',phone:'1',city:'',address:''}).length,4);
});
check('passport persists independently of cart and language',()=>{
  const p=context.emptyPassport();p.profile={name:'Luna',adopted:'2026-10-20',city:'İzmir'};p.entries.push({id:'one',date:'2026-10-21',note:'A new leaf',kind:'leaf',leaves:8,photo:''});
  assert.ok(context.savePassport(p));context.setLang('tr');assert.equal(context.getPassport().profile.name,'Luna');assert.equal(context.getPassport().entries.length,1);
  assert.equal(context.passportMilestones(context.getPassport()).filter(m=>m.done).length,2);
});
check('passport content is escaped in rendered HTML',()=>{
  const p=context.getPassport();p.profile.name='<img src=x onerror=alert(1)>';p.entries[0].note='<script>alert(1)</script>';context.savePassport(p);
  const html=context.renderPassport();assert.ok(html.includes('&lt;script&gt;'));assert.ok(!html.includes('<script>alert'));assert.ok(!html.includes('<img src=x'));
});
check('backup rejects malformed dates, remote images and excessive history',()=>{
  const p=context.getPassport();p.entries[0].photo='https://example.com/tracker.jpg';assert.throws(()=>context.normalizePassport(p));
  p.entries[0].photo='';p.entries[0].date='2026-02-31';assert.throws(()=>context.normalizePassport(p));
  p.entries[0].date='2026-10-21';p.profile.adopted='2999-01-01';assert.throws(()=>context.normalizePassport(p));
  p.profile.adopted='2026-10-20';p.entries=Array(121).fill(p.entries[0]);assert.throws(()=>context.normalizePassport(p));
});
check('storage failure is reported instead of claiming success',()=>{
  const original=context.localStorage.setItem;context.localStorage.setItem=()=>{throw new Error('quota');};let message='';context.toast=t=>{message=t;};
  assert.equal(context.savePassport(context.getPassport()),false);assert.ok(message.length>10);context.localStorage.setItem=original;
});
check('unknown routes fall back and passport/greenhouse routes resolve',()=>{
  for(const p of ['passport','greenhouse','story']){context.location.hash='#/'+p;assert.equal(context.parseRoute().page,p);}
  context.location.hash='#/unknown';assert.equal(context.parseRoute().page,'home');
});
check('public local assets and PDF downloads exist',()=>{
  for(const file of ['assets/living-aloe-concept.jpg','assets/passport-qr.svg','output/pdf/cygnus-aloe-recipe-book-tr-en.pdf','output/pdf/cygnus-adoption-card-tr-en.pdf'])assert.ok(fs.statSync(file).size>100);
});
console.log(`\n${count} behavior checks passed.`);
