//Put your JavaScript code in this file
//master

$(document).ready(function() {
  // Add <hr> after ecery section eleemnt in the resource group stack
  $('.resources-group section').after("<hr>");

  $('<a href="#resources">back to top</a>').insertBefore('.resources-group hr');






  $(".menu-icon").on("click", function() {

    if ($('.small-hide').hasClass('small-hide')) {
      $('.small-hide').removeClass('small-hide').addClass('menu-item');
    } else {
      $("#mainHeader a ~ a:not('.menu-icon')").addClass('small-hide').removeClass('menu-item');
    }



  });
  // end menu-icon function




});