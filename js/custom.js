$(document).ready(function(){
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 85});

	$(".navegacion").on('click', function(event) {
	  if (this.hash !== "") {
	    event.preventDefault();
	    var hash = this.hash;
	    $('html, body').animate({
	      scrollTop: ($(hash).offset().top - 85)
	    }, 800, function(){});
	  }
	}); 
	$(".products-description").on('click', function(event) {
		if (this.hash !== "") {
	    event.preventDefault();
	    $(".products-collapse").each(function(){
	    	$(this).collapse('hide');
	    });
			$(this.hash).collapse('show');
		}
	});
	$(".promos-description").on('click', function(event) {
    event.preventDefault();
    $(".promos-collapse").each(function(){
    	$(this).collapse('hide');
    });
		$($(this).attr("data-collapse")).collapse('show');
	});

	

});
