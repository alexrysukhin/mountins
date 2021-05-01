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
