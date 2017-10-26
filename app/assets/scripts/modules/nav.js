var $ = require('jquery');
var navOpen;

// Open navigation
function openNav() {
  // Site Navigation
  $("#site-navigation").addClass("site-header__navigation--open");
  $(".site-header__nav-item").addClass("site-header__nav-item--open");
  //document.getElementById("site-navigation").style.width = "12.5%";
  // Hero Section
  $("#hero-section").addClass("nav--open");
  //document.getElementById("hero-section").style.width = "87.5%";
  //document.getElementById("hero-section").style.marginLeft = "12.5%";
  // About Section
  $("#about-section").addClass("nav--open");
  //document.getElementById("about-section").style.width = "87.5%";
  //document.getElementById("about-section").style.marginLeft = "12.5%";
  // Skills Section
  $("#skills-section").addClass("nav--open");
  //document.getElementById("skills-section").style.width = "87.5%";
  //document.getElementById("skills-section").style.marginLeft = "12.5%";
  // Portfolio Section
  $("#portfolio-section").addClass("nav--open");
  //document.getElementById("portfolio-section").style.width = "87.5%";
  //document.getElementById("portfolio-section").style.marginLeft = "12.5%";
  // Contact Section
  $("#contact-section").addClass("nav--open");
  //document.getElementById("contact-section").style.width = "87.5%";
  //document.getElementById("contact-section").style.marginLeft = "12.5%";
  // Footer
  $("#footer").addClass("nav--open");
  //document.getElementById("footer").style.width = "87.5%";
  //document.getElementById("footer").style.marginLeft = "12.5%";
  navOpen = true;
}

// Close navigation
function closeNav() {
  // Site navigation
  $("#site-navigation").removeClass("site-header__navigation--open");
  $(".site-header__nav-item").removeClass("site-header__nav-item--open");
  //document.getElementById("site-navigation").style.width = "0";
  // Hero Section
  $("#hero-section").removeClass("nav--open");
  //document.getElementById("hero-section").style.width = "100%";
  //document.getElementById("hero-section").style.marginLeft = "0";
  // About Section
  $("#about-section").removeClass("nav--open");
  //document.getElementById("about-section").style.width = "100%";
  //document.getElementById("about-section").style.marginLeft = "0%";
  // Skills Section
  $("#skills-section").removeClass("nav--open");
  //document.getElementById("skills-section").style.width = "100%";
  //document.getElementById("skills-section").style.marginLeft = "0%";
  // Portfolio Section
  $("#portfolio-section").removeClass("nav--open");
  //document.getElementById("portfolio-section").style.width = "100%";
  //document.getElementById("portfolio-section").style.marginLeft = "0%";
  // Contact Section
  $("#contact-section").removeClass("nav--open");
  //document.getElementById("contact-section").style.width = "100%";
  //document.getElementById("contact-section").style.marginLeft = "0%";
  // Footer
  $("#footer").removeClass("nav--open");
  //document.getElementById("footer").style.width = "100%";
  //document.getElementById("footer").style.marginLeft = "0%";
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
