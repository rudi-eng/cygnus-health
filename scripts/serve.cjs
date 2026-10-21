// No dependencies; serves only public site assets, bound to loopback.
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.pdf':'application/pdf'};
http.createServer((req,res)=>{
  let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch(e){res.writeHead(400).end();return;}
  if(name==='/')name='/index.html';
  if(!/^\/(index\.html|(?:assets|css|js)\/[a-zA-Z0-9_.-]+|output\/pdf\/[a-zA-Z0-9_.-]+\.pdf)$/.test(name)){res.writeHead(404).end();return;}
  const file=path.join(root,name);
  fs.readFile(file,(error,body)=>{if(error){res.writeHead(404).end();return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(body);});
}).listen(4173,'127.0.0.1',()=>console.log('CYGNUS preview: http://127.0.0.1:4173'));
