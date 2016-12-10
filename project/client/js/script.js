/*
 Theme: Flatfy Theme
 Author: Andrea Galanti
 Bootstrap Version
 Build: 1.0
 http://www.andreagalanti.it
 */

$(window).load(function() {
	//Preloader 
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {

	//animated logo
	$(".navbar-brand").hover(function () {
		$(this).toggleClass("animated shake");
        $("#foodbook-nav").toggleClass("animated swing");
	});

	//animated scroll_arrow
	$(".img_scroll").hover(function () {
		$(this).toggleClass("animated infinite bounce");
	});

	//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
	wow = new WOW(
		{
			mobile: false
		});
	wow.init();

	//MagnificPopup
	$('.image-link').magnificPopup({type:'image'});


	// OwlCarousel N1
	$("#owl-demo").owlCarousel({
		autoPlay: 3000,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});

	// OwlCarousel N2
	$("#owl-demo-1").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});

	//SmothScroll
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 600);
				return false;
			}
		}
	});

	$(window).on('hashchange', function() {
			$(".navbar-collapse").collapse('hide');
			/*$('.navbar-collapse').collapse({
				toggle: true
			});*/

		/*if (! ($('.navbar-collapse').hidden)) {
			$('.navbar-toggle').click();
		}*/
	});

		//$('.navbar-toggle:visible').click();
		//if ($("#restaurant-page").get(0)){
		/*if ($("#restaurant-page").get(0)){
			//$("#lblUpdateStatus").click(function () { ... });
			$('.back-button').css({'visibility': 'visible'});
		}
		else{
			$('.back-button').css({'visibility': 'hidden'});
		}*/
		/*if ($( "body" ).has( '#restaurant-page' )) {
			//back-button.css( "visible", "false" );
			$('.navbar-toggle:visible').click();
		}*/
		//.. work ..
	/*});*/

	$('.navbar-collapse ul .fold a').click(function() {
		$('.navbar-toggle:visible').click();
	});

    $('.dropdown-menu li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
});