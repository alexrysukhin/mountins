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
