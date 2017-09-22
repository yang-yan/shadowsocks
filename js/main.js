jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.sse-main-nav').on('click', function(event){
		if($(event.target).is('.sse-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
});