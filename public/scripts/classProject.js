//Put your JavaScript code in this file
//master

$(document).ready(function() {
  // Add <hr> after ecery section eleemnt in the resource group stack
  $('.resources-group section').after("<hr>");

  $('<a href="#resources">back to top</a>').insertBefore('.resources-group hr');

  $(".menu-icon").on("click", function() {

    $(".dropdown .links").toggleClass("dropdown-content");

  });
  // end menu-icon function

});