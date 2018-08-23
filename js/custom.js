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

var productos_json = JSON.parse(prods);
Object.keys(productos_json).forEach(function(key) {
  $.each(productos_json[key], function(index, value){
		numero = index+1
		var producto = '<div class="col-xs-12 col-sm-4 col-md-3" id="'+key+'_'+numero+'">';
		producto +=			'<div class="card">';
		producto +=					'<div class="hovereffect">';
	  producto +=						'<a class="products-description" href="#'+key+'_'+numero+'_description">';
	  producto +=							'<img class="card-img-top img-responsive" src="images/'+key+'/'+value["imagen"]+'" alt="Card image cap">';
	  producto +=							'<div class="overlay">';
		producto +=								'<h2>'+value["nombre"]+'</h2>';
		producto +=								'<p>detalles</p>';
		producto +=							'</div>';
	  producto +=						'</a>';
	  producto +=					'</div>';
	  producto +=					'<div id="'+key+'_'+numero+'_description" class="collapse products-collapse" aria-labelledby="headingOne" data-parent="#'+key+'_'+numero+'">';
		producto +=						'<div class="card-body">';
		producto +=					    '<h5 class="card-title">'+value["nombre"]+'</h5>';
		producto +=					    '<p class="card-text">'+value["descripcion"]+'</p>';
		producto +=					  '</div>';
		producto +=					  '<div class="card-footer">';
		producto +=					  	'Precios';
		producto +=					  	'<ul>';
		$.each(value["precios"], function(index, precio){
			producto +=					  	'<li>'+precio["unidades"]+' x '+precio["valor"]+'</li>';
		});
		producto +=					  	'</ul>';
		producto +=					  '</div>';
		producto +=					'</div>';
		producto +=				'</div>';
		producto +=			'</div>';
		$('#row_'+key).append(producto);
})
})

