var $ = require('jquery');
var navOpen;

// Open navigation
function openNav() {
  // Site Navigation
  $("#site-navigation").addClass("site-header__navigation--open");
  $(".site-header__nav-item").addClass("site-header__nav-item--open");
  // Hero Section
  $("#hero-section").addClass("nav--open");
  // About Section
  $("#about-section").addClass("nav--open");
  // Skills Section
  $("#skills-section").addClass("nav--open");
  // Portfolio Section
  $("#portfolio-section").addClass("nav--open");
  // Contact Section
  $("#contact-section").addClass("nav--open");
  // Footer
  $("#footer").addClass("nav--open");
  // Navigation is open
  navOpen = true;
}

// Close navigation
function closeNav() {
  // Site navigation
  $("#site-navigation").removeClass("site-header__navigation--open");
  $(".site-header__nav-item").removeClass("site-header__nav-item--open");
  // Hero Section
  $("#hero-section").removeClass("nav--open");
  // About Section
  $("#about-section").removeClass("nav--open");
  // Skills Section
  $("#skills-section").removeClass("nav--open");
  // Portfolio Section
  $("#portfolio-section").removeClass("nav--open");
  // Contact Section
  $("#contact-section").removeClass("nav--open");
  // Footer
  $("#footer").removeClass("nav--open");
  // Navigation is closed
  navOpen = false;
}

// Check window width and close navigation if width is below 800 (window width is slightly inaccurate hence the value of 783)
function screenClass() {
  if($(window).innerWidth() < 783) {
    if (navOpen == true) {
      closeNav();
    }
  }
}

// Run when window is resized
$(window).bind('resize',function() {
    screenClass();
});

// Run on page load
screenClass();

// If open button is clicked, run openNav()
$("#open-button").click(openNav);

// If close button is clicked, run closeNav()
$("#close-button").click(closeNav);
