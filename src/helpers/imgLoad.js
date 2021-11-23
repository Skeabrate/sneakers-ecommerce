export const imgLoad = (el) => {
   var bg = ''
   if(el.currentStye) bg = el.currentStye.backgroundImage
   else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
      bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
   } else { 
      bg = el.style.backgroundImage;
   }
   return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}