// WOW plugins.js se aata hai. Load order har route pe same nahi hota
// (khaaskar not-found route pe), isliye seedha `new WOW()` crash kar deta tha.
// Ab WOW ka intezaar karte hain, aur 3s baad chup-chaap chhod dete hain.
(function () {
  if (typeof window === 'undefined') return;

  var waited = 0;
  var timer = setInterval(function () {
    if (typeof WOW !== 'undefined') {
      clearInterval(timer);
      new WOW({
        animateClass: 'animated',
        offset: 100,
      }).init();
      return;
    }
    waited += 100;
    if (waited >= 3000) clearInterval(timer);
  }, 100);
})();
