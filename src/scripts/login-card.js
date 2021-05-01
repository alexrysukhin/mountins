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
