var myNav = document.getElementById('mynav');
var navItems = document.getElementsByClassName('nav-item');
window.onscroll = function () { 
    // console.log($(document).scrollTop());
    if ($(document).scrollTop() >= $(window).height() ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        navItems.classList.add("nav-item-colored");
        navItems.classList.remove("nav-item-transparent");
        console.log('changing to colored');
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        navItems.classList.remove("nav-item-colored");
        navItems.classList.add("nav-item-transparent");
        console.log('changing to transparent');
    }
};

var homeButton = document.getElementById('home-button');
var homeContainer = document.getElementById('home-container');
homeButton.onclick = function() {
	$('html,body').animate({
        scrollTop: 0},
        'slow');
};


var aboutButton = document.getElementById('about-button');
var aboutContainer = document.getElementById('about-container');
aboutButton.onclick = function() {
	$('html,body').animate({
        scrollTop: $(aboutContainer).offset().top},
        'slow');
};

var experiencesButton = document.getElementById('experiences-button');
var experiencesContainer = document.getElementById('experiences-container');
experiencesButton.onclick = function() {
    $('html,body').animate({
        scrollTop: $(experiencesContainer).offset().top},
        'slow');
};