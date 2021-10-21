let images = Array.from(document.images);
let imagesTotal = images.length;
let imagesCout = 0;
let preloader = document.querySelector('.preloader');
let preloaderDisplay = document.querySelector('.preloader__percents');


for(let i = 0; i < imagesTotal; i++) {
   image = new Image();
   image.src = images[i].src;
   image.addEventListener('load', loadImage);
   image.addEventListener('error', loadImage);
}


function loadImage() {
   imagesCout++;
   let percents = Math.floor(imagesCout / imagesTotal * 100);
   preloaderDisplay.innerHTML = percents + '%';

   if(percents >= 100) preloader.classList.add('preloader__not-visible');
};





