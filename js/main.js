(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
// Get the logo and nav bar elements
const logo = document.getElementById('logo');
const navBar = document.querySelector('nav.navbar');

// Store the original size and position of the logo and nav bar
const originalLogoWidth = '100px';
const originalLogoHeight = '115px';
const originalLogoPaddingTop = '20px';
const originalNavBarPaddingTop = '15px'; // adjust this value to your liking
const originalNavBarHeight = '125px'; // adjust this value to your liking
const originalNavBarpadding = '80px 0'; 
// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the logo's new size based on the scroll position
  const logoNewSize = 30 - (scrollPosition / 10); // adjust the values to your liking

  // Calculate the nav bar's new height and padding based on the scroll position
  const navBarNewHeight = 60 - (scrollPosition / 10); // adjust the values to your liking
  const navBarNewPaddingTop = 15 - (scrollPosition / 10); // adjust the values to your liking

  // Update the logo's size
  if (scrollPosition <= 0) {
    // If the user has scrolled back to the top, reset the logo's size and position
    logo.style.width = originalLogoWidth;
    logo.style.height = originalLogoHeight;
    logo.style.paddingTop = originalLogoPaddingTop;
  } else {
    // Otherwise, update the logo's size based on the scroll position
    logo.style.width = `64px`;
    logo.style.height = `68px`;
    logo.style.paddingTop = `6px`;
  }

  // Update the nav bar's height and padding
  if (scrollPosition <= 0) {
    // If the user has scrolled back to the top, reset the nav bar's height and padding
    navBar.style.height = originalNavBarHeight;
    navBar.style.paddingTop = originalNavBarPaddingTop;
    navBar.style.padding= originalNavBarpadding ;
  } else {
    // Otherwise, update the nav bar's height and padding based on the scroll position
    navBar.style.height = `80px`;
    navBar.style.paddingTop = `20px`;
    
  }
});


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

