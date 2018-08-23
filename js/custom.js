$(document).ready(function(){
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 40});

	// Add smooth scrolling on all links inside the navbar
	$(".navegacion").on('click', function(event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {

	    // Prevent default anchor click behavior
	    event.preventDefault();

	    // Store hash
	    var hash = this.hash;

	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: ($(hash).offset().top - 85)
	    }, 800, function(){

	    });

	  } // End if

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

});

function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("mapa"), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});

}
