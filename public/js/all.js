
if (document.querySelector('.tabs-section__list ') != null) {
	document.querySelector('.tabs-section__list ').addEventListener('click', function (e) {

		e.preventDefault();

		let tabList = Array.from(document.getElementsByClassName('tabs-section__link'));
		let settingsList = Array.from(document.getElementsByClassName('admin-menu__item'));
		let indexOfTab = tabList.indexOf(event.target);

		if (event.target.classList.contains('activ-tab')) return;

		tabList.forEach(function (item) {
			item.classList.remove('activ-tab');
		});

		settingsList.forEach(function (obj) {
			obj.classList.remove('admin-menu__item-active')
		});


		console.log(settingsList[indexOfTab])
		settingsList[indexOfTab].classList.add('admin-menu__item-active');
		event.target.classList.add('activ-tab');

	});

}




let button = document.querySelector('.hero__arrow');


if (button !== null) {
	let distance = window.innerHeight - document.documentElement.scrollTop;

	button.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('lox');
		let scroll = document.documentElement.scrollTop;
		console.log(scroll);
		let int = setInterval(() => {
			window.scrollTo(0, scroll);
			scroll += 10;
			if (scroll >= distance) clearInterval(int);
		}, 15)

	});
}
let humburgerBatton = document.getElementById('hero__hamburger');
let navMenu = document.querySelector('.hero__nav-menu');
let wrapper = document.querySelector('.wrapper');


if(humburgerBatton !== null) {
   humburgerBatton.addEventListener('click', function() {
      if(humburgerBatton.classList.contains('active')) {
         document.body.style.overflow = '';
      }
      else{
         document.body.style.overflow = 'hidden';
      }

      


      humburgerBatton.classList.toggle('active');
      wrapper.classList.toggle('curtain-active');
      navMenu.classList.toggle('hero__nav-menu-active');
   });
}
   
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
let skillField = document.querySelectorAll('.circle__second');
if (skillField !== null && skillField.length > 0) {
	function skillmecker() {

		let longCircle = document.querySelector('.circle__first').getAttribute('r') * 2 * 3.14;

		for (i = 0; i < skillField.length; i++) {

			let skilsProcents = +skillField[i].getAttribute('skill');

			let x = Math.round(longCircle / 100 * skilsProcents);

			skillField[i].style.strokeDasharray = `${x} ${longCircle}`;
		}


	};
	skillmecker();
}

let authorizationButton = document.querySelector('.authorization-link');

if (authorizationButton !== null) {
	authorizationButton.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector('.cover-welcome').classList.add('turnover-welcome');
		document.querySelector('.cover-initialization').classList.add('turnover-initialization');


		// let welcomSide = document.querySelector('.cover-welcome');
		// let loginSide = document.querySelector('.cover-initialization');



		authorizationButton.style.display = 'none';
	});
}

// var name = "911";

// function culculate(a, b) {
//    return a + b;
// }

// console.log(culculate(2, 4))

// function initMap(){
//    var opt = {
//       center: {lat: 50.006771,lng: 36.238360},
//       zoom: 4
//    }
//    var map = new google.maps.Map(document.getElementById('map'),opt);

// }
var parallaxContainer = document.querySelector('#parallax');


if (parallaxContainer !== null) {
	console.log(parallaxContainer);
	var layers = parallaxContainer.children;

	var moveLayers = function (e) {
		var initialX = (window.innerWidth / 2) - e.pageX,
			initialY = (window.innerHeight / 2) - e.pageY;



		[].slice.call(layers).forEach(function (layer, i) {
			var divider = i / 100,
				positionX = initialX * divider,
				positionY = initialY * divider,
				bottomPosition = (window.innerHeight / 2) * divider,
				layerStyle = layer.style,
				transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)';

			layerStyle.transform = transformString;
			layerStyle.bottom = '-' + bottomPosition + "px";
		});



	}
	window.addEventListener('mousemove', moveLayers);
}





let buttonDown = document.getElementById('slider__arrow-down');
if (buttonDown !== null) {
	let buttonUp = document.getElementById('slider__arrow-up');
	let mainSliderItems = Array.from(document.querySelectorAll('.main-slider__item'));
	let description = Array.from(document.querySelectorAll('.slider__description-item'));

	let counter = 0;

	buttonDown.addEventListener('click', mainSlaiderRemove);
	buttonDown.addEventListener('click', descriptionRemove);
	buttonDown.addEventListener('click', moveUp);
	buttonDown.addEventListener('click', moveDown);
	buttonDown.addEventListener('click', mainSlaiderAdd);
	buttonDown.addEventListener('click', descriptionAdd);



	buttonUp.addEventListener('click', mainSlaiderRemove);
	buttonUp.addEventListener('click', descriptionRemove);
	buttonUp.addEventListener('click', moveUp);
	buttonUp.addEventListener('click', moveDown);
	buttonUp.addEventListener('click', mainSlaiderAdd);
	buttonUp.addEventListener('click', descriptionAdd);



	function moveDown(e) {
		e.preventDefault();
		let itemsDown = Array.from(document.querySelectorAll('.slider__item-down'))
		let item = itemsDown.find(item => item.classList.contains('active-down'));
		item.classList.remove('active-down');
		item.classList.add('toStart-up');

		itemsDown[counter].classList.remove('toStart-up');
		itemsDown[counter].classList.add('active-down');
	};

	function mainSlaiderRemove() {
		let mainSliderItems = Array.from(document.querySelectorAll('.main-slider__item'));
		let item = mainSliderItems.find(item => item.classList.contains('main-slider__item-active'));
		item.classList.remove('main-slider__item-active');
	}
	function mainSlaiderAdd() {
		mainSliderItems[counter].classList.add('main-slider__item-active')
	}


	function moveUp(e) {
		e.preventDefault();
		let itemsUp = Array.from(document.querySelectorAll('.slider__item-up'))
		let item = itemsUp.find(item => item.classList.contains('active-up'))
		item.classList.remove('active-up');
		item.classList.add('toStart-down');

		if (counter == itemsUp.length - 1) {
			counter = 0
		}
		else { counter++ }
		itemsUp[counter].classList.remove('toStart-down');
		itemsUp[counter].classList.add('active-up');
	};



	function descriptionRemove() {
		let description = Array.from(document.querySelectorAll('.slider__description-item'));
		let descriptionItem = description.find(item => item.classList.contains('description-item-active'));
		descriptionItem.classList.remove('description-item-active');
	}
	function descriptionAdd() {
		description[counter].classList.add('description-item-active');
	}

}
