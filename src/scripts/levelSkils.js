function skillmecker() {
   let skillField = document.querySelectorAll('.circle__second');

   let longCircle = document.querySelector('.circle__first').getAttribute('r') * 2 * 3.14;

   console.log(longCircle);


   for(i = 0; i < skillField.length; i++) {
   
      let skilsProcents =+skillField[i].getAttribute('skill');

      let x = Math.round(longCircle / 100 * skilsProcents);
      console.log(x);
      console.log(skillField[i].getAttribute('skill'));
      console.log(skillField[i])
      
      skillField[i].style.strokeDasharray = `${x} ${longCircle}`;
   }



   // for(let circle of skillField) {
      
   //    let x = Math.round(longCircle / 100 * skilsProcents);
   //    console.log(x);
   //    circle.style.strokeDasharray =' longCircle';
      
   // }

};
skillmecker();