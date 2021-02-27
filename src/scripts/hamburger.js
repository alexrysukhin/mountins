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
   