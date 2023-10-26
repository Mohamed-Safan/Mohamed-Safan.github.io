;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }

    // JavaScript for animated navigation
function toggleNavAnimation() {
    const navbar = document.querySelector('.navbar');
    const navToggler = document.querySelector('.navbar-toggler-icon');
    const navItems = document.querySelectorAll('.nav-item');
    
    navbar.classList.toggle('animated-navbar');
    navToggler.classList.toggle('animated-toggler');
    navItems.forEach(item => item.classList.toggle('animated-nav-item'));
}

const navButton = document.querySelector('.navbar-toggler');
navButton.addEventListener('click', toggleNavAnimation);


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// JavaScript for animated buttons
function animateButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.classList.toggle('animated-button'));
}

const loginButton = document.querySelector('.btn-outline-dark');
const signUpButton = document.querySelector('.btn-info');

loginButton.addEventListener('click', animateButtons);
signUpButton.addEventListener('click', animateButtons);


// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}
