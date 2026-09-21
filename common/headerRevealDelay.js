// Header 2.5s ruk kar slide-in hota hai taake loader ki animation ke saath
// sync rahe. Lekin loader session me sirf pehli baar chalta hai (dekho
// components/common/loader.jsx), aur jab wo skip ho to intezaar ki koi wajah
// nahi bachti — warna user ko khaali screen dikhti hai.
//
// `skip-loader` class loader.jsx ka inline script <html> pe lagata hai,
// markup parse hote hi — yaani hydration se pehle. Isliye yahan wo mil jati hai.
export default function headerRevealDelay() {
  if (typeof document === 'undefined') return '+=2.5';

  return document.documentElement.classList.contains('skip-loader')
    ? '+=0'
    : '+=2.5';
}
