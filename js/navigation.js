'use strict';

(function() {
  var navItems = document.querySelectorAll('nav li');
  var currentPath = window.location.pathname;
  for(var i = 0; i < navItems.length; i++) {
    var link = navItems[i].querySelectorAll('a');
    var linkPath = link[0].pathname;
    if(currentPath === linkPath) {
      navItems[i].classList.add('active');
    }
  }
})();
