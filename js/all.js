$(document).ready(function() {
	$('.button').click(function(event) {
    $('.text').fadeToggle(1000);
	});
//    lightbox.option({
//    	'alwaysShowNavOnTouchDevices':true,
//     	'resizeDuration': 200,
//     	'wrapAround': true
//    })

    $(window).on('load', function(){  
    $('#slider').nivoSlider({
   	effect: 'fade'
    	});
  });
});