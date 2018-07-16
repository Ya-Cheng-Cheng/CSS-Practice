$(document).ready(function() {
	$('.button').click(function(event) {
    $('.text').fadeToggle(1000);
	});

    $(window).on('load', function(){  
    $('#slider').nivoSlider({
   	effect: 'fade'
    	});
  	});

  	$(".gotop-close").click(function(event) {
  		event.preventDefault();
  		$('#gotop-buttom').toggle();
  	});
  	$('#gotop-buttom').click(function(event) {
  		event.preventDefault();
  		$('html, body').animate({scrollTop: 0}, 800);
  	});
  		
});