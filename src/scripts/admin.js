
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



