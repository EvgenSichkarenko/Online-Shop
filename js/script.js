$(document).ready(function(){
	$('#login').on('click', function(){
		$('#loginModal').modal();
	});
		$('.Singup').on('click', function(){
			$('#loginModal').modal('hide');
			$('#SingupModal').modal();
		});
			$('#shcart').on('click', function(){
			$('#shopping-cartModal').modal();
		});

		$('#Singup').on('click', function() {
		$('#loginOrRegisterModal').modal('hide');
		$('#signUpModal').modal();
	});

	$(".slider1").click(function(){ 
	$("#myCarousel2").carousel(0); 
	$(".slider1").addClass("Set_color"); 
	}); 

	$(".slider2").click(function(){ 
	$("#myCarousel2").carousel(1); 
	}); 

	$(".slider3").click(function(){ 
	$("#myCarousel2").carousel(2); 
	}); 
	$(".slider4").click(function(){ 
	$("#myCarousel2").carousel(3); 
	}); 
	$(".slider5").click(function(){ 
	$("#myCarousel2").carousel(4); 
	}); 
	

	$('.item-bottom').mouseover(function() {
		$('.item_title', this).hide();
		$('.add_item_car', this).css('display', 'block');
	});
	$('.item-bottom').mouseout(function() {
		$('.add_item_car', this).hide();
		$('.item_title', this).css('display', 'block');
	});
	
	 $( '#my-slider' ).sliderPro({
			width: 310,
			height: 370,
			fade: true,
			arrows: false,
			buttons: false,
			fullScreen: false,
			shuffle: true,
			smallSize: 500,
			mediumSize: 1000,
			largeSize: 3000,
			thumbnailArrows: true,
			autoplay: false
		});
	 	$( '#my-slider2' ).sliderPro({
		width: 180,
		height: 730,
	});

	 $('.tab').not(':first').hide();
	$('.str-tab').click(function() {
		$('.str-tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.tab').hide().eq($(this).index()).fadeIn();
	});

	

})

	