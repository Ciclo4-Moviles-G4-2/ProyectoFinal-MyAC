/*
Template Name: Woof!
Author: Ingrid Kuhn
Modified by: Mao Moreno
Author URI: themeforest/user/ingridk
Version: 1.1
*/
jQuery(function ($) {

	//----------------------------------- Document ready -----------------------------------//

	$(document).ready(function () {

		//Effects on scroll

		AOS.init({
			disable: 'mobile',
			duration: 1500,
			once: true
		});

		//Scrolling feature 

		$('.page-scroll a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		//Dropdown on hover

		if ($(window).width() >= 1024) {
			$(".navbar .dropdown").on({
				mouseenter: function () {
					$(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();

				},
				mouseleave: function () {
					$(this).find('.dropdown-menu').first().stop(true, true).delay(200).slideUp();
				}
			});
		}

		//	Back Top Link

		var offset = 200;
		var duration = 500;
		$(window).scroll(function () {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		//Owl-carousels

		$("#owl-services2").owlCarousel({
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			dots: true,
			margin: 10,
			loop: false,
			autoplay: false,
			navRewind: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				991: {
					items: 2,
				},

			}
		});

		$('#owl-featured').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav: true,
			navText: [" <i class='fas fa-chevron-left'></i>", " <i class='fas fa-chevron-right'></i>"],
			autoplayHoverPause: true,
			dots: true,

			responsive: {
				0: {
					items: 1,
					stagePadding: 0
				},
				767: {
					items: 2,
					stagePadding: 60
				},
				1200: {
					items: 4,
					stagePadding: 120
				},
			}
		})
		$("#owl-services").owlCarousel({
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			dots: true,
			loop: false,
			autoplay: false,
			navRewind: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				991: {
					items: 2,
				},
				1200: {
					items: 4,
				}
			}
		});

		$('#owl-adopt-single').owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			autoplay: true,
			nav: true,
			navText: [" <i class='fas fa-chevron-left'></i>", " <i class='fas fa-chevron-right'></i>"],
			autoplayHoverPause: true,
			dots: true,

		});
		$('#owl-gallery').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav: true,
			navText: [" <i class='fas fa-chevron-left'></i>", " <i class='fas fa-chevron-right'></i>"],
			dots: true,
			responsive: {
				0: {
					items: 1,
					stagePadding: 20
				},
				767: {
					items: 2,
					stagePadding: 60
				},
				1200: {
					items: 4,
					stagePadding: 120
				},
			}
		});

		$('#owl-testimonial').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav: true,
			navText: [" <i class='fas fa-chevron-left'></i>", " <i class='fas fa-chevron-right'></i>"],
			autoplayHoverPause: true,
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				991: {
					items: 2,
				},

			}
		});
		$("#owl-team1,#owl-team2,#owl-team3").owlCarousel({
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			dots: true,
			margin: 30,
			loop: true,
			autoplay: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1200: {
					items: 4,
				},

			}
		});

		// Magnific Popup

		$('#owl-gallery,#owl-adopt-single,#owl-featured,#gallery-isotope').magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image',
			gallery: {
				enabled: true
			},
			titleSrc: 'title',
			titleSrc: function (item) {
				return '<a href="' + item.el.attr('href') + '">' + item.el.attr('title') + '</a>';
			}
		});




		//------- Window scroll function -------//
		$(window).scroll(function () {

			//Collapse the top bar on scroll

			if ($("#main-nav").offset().top > 60) {
				$('.top-bar').slideUp({
					duration: 250,
					easing: "easeInOutSine"
				}).fadeOut(120);
			} else {
				$('.top-bar').slideDown({
					duration: 0,
					easing: "easeInOutSine"
				}).fadeIn(120);
			}



		}); // end window scroll


	}); // end document ready


	//----------------------------------- Funciones particulares -----------------------------------//

	//Direccion web del proyecto (para la API)
	let url = 'https://myac.herokuapp.com/';

	//Funcion que me devuelve la edad en meses o en a??os dependiendo de la cantidad de meses
	function textoEdad(meses) {
		if (meses >= 12) {
			var anios = Math.round(meses * 10 / 12) / 10;
			return anios + " a??o" + (anios == 1 ? "" : "s");
		}
		return meses + " mes" + (meses == 1 ? "" : "es");
	}

	//Funcion que permite cargar los datos de las mascotas desde la API implementada para ser
	//mostrados como HTML en forma de fichas/tarjetas en la p??gina "buscar_mascotas.html"
	function cargarDatos(d) {
		//console.log(d);
		let htmlTotal = "";
		for (ind in d) {
			htmlTotal = htmlTotal +
				`<div class="adopt-card col-md-6 col-xl-3 res-margin">
                    <div class="card bg-light-custom">
                        <div class="thumbnail text-center">
							<img src= "` + d[ind].ruta_img + `" class="border-irregular1 img-fluid" alt="">
							<div class="caption-adoption">
								<h6 class="adoption-header">`+ d[ind].nombre + `</h6>
								<ul class="list-unstyled">
									<li><i class="fa fa-venus-mars fa-lg"></i> - `+ d[ind].genero + `</li>
									<li><i class="fa fa-balance-scale fa-lg"></i> - `+ d[ind].tamano + `</li>
									<li><i class="fa fa-calendar fa-lg"></i> - `+ textoEdad(d[ind].edad) + `</li>
								</ul>
								<div class="text-center">
									<a href="ficha-mascotas.html?id=` + d[ind]._id + `" class="btn btn-primary">Ver ficha</a>
								</div>
							</div>
                        </div>
                    </div>
                </div>`
		}
		$("#contenedor").hide();
		document.getElementById("contenedor").innerHTML = htmlTotal;
		//Efecto fade in para el contenedor de las fichas de las mascotas
		$("#contenedor").fadeIn(1200, "swing");
	}

	//Funcion que permite cargar los datos de una mascota de acuerdo a su id desde la API 
	//implementada para ser mostrados como HTML en la p??gina "ficha-mascotas.html"
	function cargarFicha(d) {
		console.log(d);
		vocalGenero = (d.genero == "Macho" ? "o" : "a");
		document.getElementById("contenedor_ficha").innerHTML =
			`<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="row bg-light-custom border-irregular1 block-padding m-3">
							<div class="col-lg-4 offset-lg-2">
								<div class="col-md-12">
									<a href="` + d.ruta_img + `" title="` + d.nombre + `">
										<img src="` + d.ruta_img + `" class="border-irregular1 img-fluid hover-opacity" alt="">
									</a>
								</div>
							</div>
							<div class="col-lg-6 res-margin mt-6 text-xs-center">
								<h3 class="text-center">`+ d.nombre + `</h3>
								<div class="row">
									<div class="col-lg-6">
										<ul class="list-unstyled pet-adopt-info">
											<ul class="custom list-inline font-weight-bold">
												<li class="h7">Tipo: <span> `+ d.tipo + ` </span></li>
												<li class="h7">G??nero: <span>`+ d.genero + ` </span></li>
												<li class="h7">Tama??o: <span>`+ d.tamano + ` </span></li>
												<li class="h7">Edad: <span> `+ textoEdad(d.edad) + `</span></li>
											</ul>
										</ul>
									</div>
								</div>
								<ul class="list-unstyled pet-adopt-info">
									<ul class="custom list-inline font-weight-bold">
										<li class="h7">Descripci??n: <span> `+ d.descripcion + `</span></li>
										<li class="h7">??En adopci??n?: <span> `+ (d.en_adopcion ? "S??" : "No") + `</span></li>
									</ul>
								</ul>
								<a href="form_adoption.html" class="btn btn-primary" data-aos="zoom-in">Ad??ptame</a>
							</div>
						</div>
						<div class="col-md-12 mt-5">
							<h3 class="text-center">??Qui??n es `+ d.nombre + `?</h3>
							<div class="alert alert-primary border-irregular2 p-5 mt-5" role="alert">
								<h6 class="text-light">`+ d.nombre + ` es un` + (vocalGenero == "o" ? "" : "a") + (d.tipo == "Perro" ? " perrit" : " gatic")
								+ vocalGenero + ` rescatad` + vocalGenero + ` de las frias calles de Bogot??, luego de ser
								abandonad`+ vocalGenero + ` por aquellos a quienes cre??a su familia.<br><br>
								`+ d.nombre + ` llego a nuestras instalaciones con desnutrici??n, problemas de piel y un coraz??n
								roto.<br><br>
								My Adopcion Center se encarg?? de curarl`+ vocalGenero + ` y darle mucho amor, 
								y ahora esta list`+ vocalGenero + ` para ser parte de tu familia.
								` + d.nombre + ` es muy tiern` + vocalGenero + ` y una gran compa????a.
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>`
	}

	//----------------------------------- Window load function -----------------------------------//

	$(window).load(function () {

		// Page Preloader 	
		$("#preloader").fadeOut("slow");

		var pathname = window.location.pathname;

		if (pathname == "/buscar_mascota.html") {
			//Llamado a Ajax para el cargue y mostrado de datos de todas las mascotas
			//tan pronto se cargue la web de "buscar_mascotas.html"
			$.ajax(
				url + "api/mascota", {
				method: 'GET',
			}
			).done(cargarDatos);

			//Cuando se da click sobre alguno de los botones de filtrado:
			$('.option').on('click', function () {
				//Efecto visual para la activaci??n de botones y cierre de los desplegables
				$('.option').removeClass('active');
				$(this).addClass('active');
				$('.dropdown-menu').removeClass('show');

				//Variable que guarda el texto correspondienta a la opci??n de filtrado elegida
				var selector = $(this).text();
				//console.log(selector);

				//Vuelve a realizar el cargue de los datos desde la API mediante Ajax
				$.ajax(
					url + "api/mascota", {
					method: 'GET',
				}
				).done(function (d) {
					//Pero para el caso, solo de los datos correspondientes al filtro
					//guardado en la variable selector

					//Array auxiliar que permite guardar solo los datos filtrados
					let aux = [];

					//Se recorren todos los datos, pero solo se almacenan los que
					//coincidan con el filtro elegido en el array aux
					for (ind in d) {
						let edad = parseInt(d[ind].edad);
						switch (selector) {
							case d[ind].tipo:
								aux.push(d[ind]);
								break;
							case d[ind].genero:
								aux.push(d[ind]);
								break;
							case d[ind].tamano:
								aux.push(d[ind]);
								break;
							case "Cachorro":
								if (edad >= 0 && edad < 12)
									aux.push(d[ind]);
								break;
							case "Joven":
								if (edad >= 12 && edad < 36)
									aux.push(d[ind]);
								break;
							case "Adulto":
								if (edad >= 36)
									aux.push(d[ind]);
								break;
							case "Todos":
								aux.push(d[ind]);
						}
					}
					//Y se realiza el cargue y mostrado de los datos filtrados en el html
					cargarDatos(aux);
				});
			});
		}
		else if (pathname == "/ficha-mascotas.html") {
			let URLsearch = window.location.search;
			//Llamado a Ajax para el cargue y mostrado de ficha de la mascota seleccionada
			//tan pronto se cargue la web de "ficha_mascotas.html"
			$.ajax(
				url + "api/mascota/" + URLsearch.split("=")[1], {
				method: 'GET',
			}
			).done(cargarFicha);
		}
	}); // end window load function

}); // end jquery function