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
	$(".promos-description").on('click', function(event) {
    event.preventDefault();
    $(".promos-collapse").each(function(){
    	$(this).collapse('hide');
    });
		$($(this).attr("data-collapse")).collapse('show');
	});

	

});

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
	});
});

var promos_json = JSON.parse(promos);
Object.keys(promos_json).forEach(function(key) {
  $.each(promos_json[key], function(index, value){

		numero = index+1
		var promociones = '<div class="accordion" id="promo_'+key+'_'+numero+'">';
		promociones +=			'<div class="card">';
		promociones +=				'<div class="card-header" id="promo_'+key+'_'+numero+'_heading">';
		promociones +=					'<button class="btn btn-link w-100 promos-description" data-collapse="#promo_'+key+'_'+numero+'_collapse" >';
		promociones +=						'<p class="float-left mb-0 text-dark">'+value["titulo"]+'</p>';
		promociones +=						'<p class="float-right mb-0 text-secondary">'+value["precio"]+'</p>';
		promociones +=					'</a>';
		promociones +=				'</div>';
		promociones +=				'<div id="promo_'+key+'_'+numero+'_collapse" class="collapse promos-collapse" aria-labelledby="promo_'+key+'_'+numero+'_heading" data-parent="#promo_'+key+'_'+numero+'">';
		promociones +=					'<div class="card-body">';
		promociones +=						'<div class="row">';
		var cont_promo_1 =					'<div class="col-xs-12 col-md-4">';
		cont_promo_1 +=								'<img src="images/promociones/'+key+'/'+value["imagen"]+'" class="img-fluid img-responsive">';
		cont_promo_1 +=							'</div>';
		var cont_promo_2 =					'<div class="col-xs-12 col-md-8">';
		cont_promo_2 +=								'<h4>Incluye</h4>';
		cont_promo_2 +=								'<ul>';
		$.each(value["productos"], function(index, prod_promo){
			cont_promo_2 +=								'<li>'+prod_promo["unidades"]+' '+prod_promo["nombre"]+'</li>';
		});
		cont_promo_2 +=								'</ul>';
		cont_promo_2 +=							'</div>';
		if(numero%2 == 0){
			promociones +=						cont_promo_2;
			promociones +=						cont_promo_1;
		}else{
			promociones +=						cont_promo_1;
			promociones +=						cont_promo_2;
		}
		promociones +=						'</div>';
		promociones +=					'</div>';
		promociones +=				'</div>';
		promociones +=			'</div>';
		promociones +=		'</div>';
		$('#row_promo_'+key).append(promociones);
	});
});

