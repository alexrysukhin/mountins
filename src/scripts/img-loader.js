
let preloader = document.querySelector('.preloader');
let preloderPercents = document.querySelector('.preloader__percents');
let array = Array.from(document.getElementsByTagName('img'));
// let arrayAll = document.querySelectorAll('*');
// let array = [];


// for(i = 0; i < arrayAll.length; i++) {
//    if(arrayAll[i].hasAttribute('aria-hidden'))continue;   // <iframe>
//    if(arrayAll[i].hasAttribute('src')){
      
//       array.push(arrayAll[i]);
//       console.log(arrayAll[i])
//    }
// };
// console.log(array);





function percentsCount() {

   let percentsTotal = 0;
   let persents;
   console.log(array);
   function setPersents(current, total) {
       persents = Math.floor(current / total * 100);
   }
   function loadImages() {
      if(!array.length)  preloader.classList.add('preloader__not-visible');
      for(i = 0; i < array.length;i++) {
         array[i].addEventListener('load', function(){
            percentsTotal++;
            setPersents(percentsTotal, array.length);
            preloderPercents.innerHTML = persents  + '%';
            if( persents >= 100)preloader.classList.add('preloader__not-visible');
            setTimeout(() =>preloader.classList.add('preloader__not-visible'),6000 )//если что-то идет не так с загрузкой
         });
      } 
      
   }
   loadImages();
   
   
}
percentsCount();






