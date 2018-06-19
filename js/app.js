(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // // Modal popup$(function () {
  // $('.portfolio-item').magnificPopup({
  //   type: 'inline',
  //   preloader: false,
  //   focus: '#username',
  //   modal: true
  // });
  // $(document).on('click', '.portfolio-modal-dismiss', function(e) {
  //   e.preventDefault();
  //   $.magnificPopup.close();
  // });

})(jQuery); // End of use strict

// $(".meter > span").each(function() {
//   setTimeout(() => {
//     console.log($(this));
//     console.log($(".meter > span")[0]);
//     $(this)
//       .data("origWidth", $(this).width())
//       .width(0)
//       .animate({
//         width: $(this).data("origWidth") // or + "%" if fluid
//       }, 1200);
//   }, 1000);
// });

(function(){
    const barsParent = $(".meter > span");
    for (let i = 0; i < barsParent.length; i++) {
      setTimeout(() => {
        $(barsParent[i])
          .data("origWidth", $(barsParent[i]).width())
          .width(0)
          .animate({
            width: $(barsParent[i]).data("origWidth") // or + "%" if fluid
          }, 1200);
      }, 1000);
    }
})()
