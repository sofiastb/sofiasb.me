/**
* Fade in #main section on page load.
*/
$(document).ready(function() {
  // loads Particles.js
  // Code for Particles.js found here: https://github.com/VincentGarreau/particles.js/
  particlesJS.load('particles-js', './assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $('#main').fadeIn(1500);
})
