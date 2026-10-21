/* Seller settings.
   priceTL is 400 for one young aloe in one 7 cm planter.
   whatsappE164: digits only, country code, no plus sign.
   Turkey example: "905551112233"
   Leave it empty until the real order number is ready.
   Customers can still copy the order text.
*/
window.CYGNUS_CONFIG = {
  priceTL: 400,
  sizes: [7],
  whatsappE164: ""
};
// Compatibility for the existing cart and saved customer preferences.
window.ASLANA_CONFIG = window.CYGNUS_CONFIG;
