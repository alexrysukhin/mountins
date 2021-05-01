let button = document.querySelector('.hero__arrow');


if (button !== null) {
	let distance = window.innerHeight - document.documentElement.scrollTop;

	button.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('lox');
		let scroll = document.documentElement.scrollTop;
		let int = setInterval(() => {
			window.scrollTo(0, scroll);
			scroll += 10;
			if (scroll >= distance) clearInterval(int);
		}, 15)

	});
}