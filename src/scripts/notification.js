let notification = document.querySelector('.notification');
let cross = document.querySelector('.notification__cross');
let card = document.querySelector('.notification__card')


if (notification != null) {

	window.addEventListener('load', () => {
		card.classList.add('notification__card-active');
		window.scrollTo(0, 0);
		document.body.style.overflow = 'hidden';
	})


	cross.addEventListener('click', () => {
		notification.classList.remove('active-notification');
		document.body.style.overflow = '';
	})
}

