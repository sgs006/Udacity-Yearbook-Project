//Put your JavaScript code in this file
//master

$(document).ready(function(){
// Add <hr> after ecery section eleemnt in the resource group stack
$('.resources-group section').after("<hr>");

$('<a href="#resources">back to top</a>').insertBefore('.resources-group hr');

//*************************************************************
//	Hamburger menu-icon
//*************************************************************
// Rename X var to something more useful
	$(".menu-icon").on("click", function(){
		$(this).css("font-size", "15px");
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    });
//*************************************************************
// End of Hamburger********************************************
//*************************************************************






});

//master
