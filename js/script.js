$( document ).ready(function() {

	function getAndroidVersion(ua) {
	    ua = (ua || navigator.userAgent).toLowerCase(); 
	    var match = ua.match(/android\s([0-9\.]*)/);
	    return match ? match[1] : false;
	};

	var lechugaBandera = 1
	var segundos = 0.6
	var segundotimeout = 0
	var margin = 0
	var marginLechuga = ''		
	var categoria = 0
	var categoriaparalechuga = 0

	var versionAndroid = getAndroidVersion()
	versionAndroid = parseFloat(versionAndroid)
	console.log(versionAndroid)

	function resetcontenidos(){
		$("#contenido_proyect").fadeOut()
		$("#imagen_1p").attr("src", "")
		$("#imagen_2p").attr("src", "")
		$("#imagen_3p").attr("src", "")
		$("#imagen_1p").css("display","none")
		$("#imagen_2p").css("display","none")
		$("#imagen_3p").css("display","none")
		$("#iframeid").attr("src", "")
		$("#iframeid").css("display","none")
		$("#contenido_proyect #ilustraciones").css("display","none")
		$("#texto_proyect").text("")
		$("#botones_proyectos").css("display","block")
	}

	function resetlechuga() {
			console.log("Realizo un reset")
			$('.ventanas').css({'display' : 'none'})
			$('.ventanas').css({'opacity' : '0'})
			$('.categoria').css({'transition' : ''})
			$('.categoria').css({'margin-left' : ''})
			$('#Lechuga').css({'transition' : ''})
			$('#Lechuga').css({'bottom' : ''})
			if (banderaViewport == 0) {
				$('#Lechuga').css({'height' : ''})
			}
			$('.categoria').css({'display' : 'block'})
			$('.categoria').css({'opacity' : '1'})
			if (categoriaparalechuga == 4) {
				resetcontenidos()
			}
			if (categoriaparalechuga == 3) {
				$("#demoreal").attr("src", "https://www.youtube.com/embed/jSfh0UAyKoI?rel=0&amp;showinfo=0")
			}
	}

	function margincaminandolechuga() {
			marginLechuga = $('#Lechuga').css('margin-left')				    			
			marginLechuga = parseFloat(marginLechuga)
			if (banderaViewport == 0) {
				marginLechuga = (marginLechuga * 100) / width
			} else {
				marginLechuga = (marginLechuga * 100) / height
			}

			if (marginLechuga > 1) { marginLechuga = marginLechuga }
			marginLechuga = parseInt(marginLechuga)
			marginLechuga = marginLechuga
			console.log("margin lechuga es igual a = "+ marginLechuga)
	}

	function abrirventana() {

		console.log('Entro a abrir ventanas')

		switch (categoria) {
			case 1:
			margin = '0%'
			segundos = 0
			resetlechuga()
			return
			break

			case 2:
			margin = '20%'
			segundos = 0.6
			break

			case 3:
			margin = '40%'
			segundos = 1.2
			break

			case 4:
			margin = '60%'
			segundos = 2
			break

			case 5:
			margin = '80%'
			segundos = 2.4
			break
		}

		if (categoriaparalechuga == categoria) {

			$('.categoria').css({'opacity' : '0'})

			$('#seccion_'+categoria).css({'opacity' : '1'})


			$('.categoria').css({'display' : 'none'})
			$('#seccion_'+categoria).css({'margin-left' : margin})
			$('#seccion_'+categoria).css({'display' : 'block'})

			segundotimeout = segundos * 1000

			if (categoriaparalechuga == categoria) {
				setTimeout(function(){
					$('#Lechuga').css({'transition' : 'margin-left '+segundos+'s linear , left '+segundos+'s linear'})
					$('#seccion_'+categoria).css({'transition' : 'margin-left '+segundos+'s linear'})
					$('#Lechuga').css({'margin-left' : '0'})
					$('#seccion_'+categoria).css({'margin-left' : '0'})
					$('#ventana_'+categoria).css({'display' : 'block'})
					if (categoria == 3 && banderaViewport == 1) {
							$('#Lechuga').css({'left' : '-8.4%'})
					}
					if (categoria == 4) {
							$('#Lechuga').css({'left' : '-7%'})
					}
				}, 100)
			}

			setTimeout(function(){
				$('#ventana_'+categoria).css({'opacity' : '1'})
			}, segundotimeout)
			console.log('Termino abrir ventana_')

		} else {
			console.log('Salio de abrir ventana')
			return
		}

	}

	function paraLechuga(){

			margincaminandolechuga()

			$('#Lechuga').css({'-webkit-transform' : '',
			            	'-moz-transform' : '',
			             	'-ms-transform' : '',
			             	'transform' : ''})

						$('#Lechuga').css({'left' : ''})

			if ( marginLechuga ==  0 && categoria == 1 ) {							
				$('#Lechuga').css({'background-image' : 'url(img/home.gif)'})
				categoriaparalechuga = categoria
				console.log("Entro a para lechuga de cat = " + categoria)
				console.log(categoriaparalechuga)
				console.log(categoria)
				setTimeout(function(){
					if (marginLechuga ==  0 && categoria == 1) {
						$('#Lechuga').css({'background-image' : 'url(img/home.gif)'})
						abrirventana()
					}
				}, 500)

			} else if ( (marginLechuga >= 19 && marginLechuga <= 24) && categoria == 2 ) {
				$('#Lechuga').css({'background-image' : 'url(img/pintamonos.gif)'})
				$('#Lechuga').css({'bottom' : '5%'})
				categoriaparalechuga = categoria
				console.log("Entro a para lechuga de cat = " + categoria)
				console.log(categoriaparalechuga)
				console.log(categoria)
				setTimeout(function(){
					if ((marginLechuga >= 19 && marginLechuga <= 24) && categoria == 2) {
						$('#Lechuga').css({'background-image' : 'url(img/pintamonos.gif)'})
						$('#Lechuga').css({'bottom' : '5%'})
						abrirventana()
					}
				}, 500)

			} else if ( (marginLechuga >=  31 && marginLechuga <= 39) && categoria == 3) {
				$('#Lechuga').css({'background-image' : 'url(img/animador.gif)'})
				if (banderaViewport == 0) {
					$('#Lechuga').css({'left' : '-7%'})
					$('#Lechuga').css({'bottom' : '8%'})
				} else{
					$('#Lechuga').css({'bottom' : '9%'})
				}
				categoriaparalechuga = categoria
				console.log("Entro a para lechuga de cat = " + categoria)
				console.log(categoriaparalechuga)
				console.log(categoria)
				setTimeout(function(){
					if ((marginLechuga >=  31 && marginLechuga <= 39) && categoria == 3) {
						$('#Lechuga').css({'background-image' : 'url(img/animador.gif)'})
						if (banderaViewport == 0) {
							$('#Lechuga').css({'left' : '-7%'})
							$('#Lechuga').css({'bottom' : '8%'})
						} else{
							$('#Lechuga').css({'bottom' : '9%'})
						}
						abrirventana()
					}
				}, 500)

			} else if ( (marginLechuga >= 51 && marginLechuga <= 56) && categoria == 4 ) {
				$('#Lechuga').css({'background-image' : 'url(img/proyectos.gif)'})
				$('#Lechuga').css({'left' : '0'})
				$('#Lechuga').css({'bottom' : '5%'})
				categoriaparalechuga = categoria
				console.log("Entro a para lechuga de cat = " + categoria)
				console.log(categoriaparalechuga)
				console.log(categoria)
				setTimeout(function(){
					if ( (marginLechuga >= 51 && marginLechuga <= 56) && categoria == 4 ) {
						$('#Lechuga').css({'background-image' : 'url(img/proyectos.gif)'})
						$('#Lechuga').css({'left' : '0'})
						$('#Lechuga').css({'bottom' : '5%'})
						abrirventana()
					}
				}, 500)

			} else if ( (marginLechuga >= 77 && marginLechuga <= 82) && categoria == 5 ) {
				$('#Lechuga').css({'background-image' : 'url(img/contacto.gif)'})
				$('#Lechuga').css({'left' : '0'})
				categoriaparalechuga = categoria
				console.log("Entro a para lechuga de cat = " + categoria)
				console.log(categoriaparalechuga)
				console.log(categoria)
				setTimeout(function(){
					if ((marginLechuga >= 77 && marginLechuga <= 82) && categoria == 5) {
						$('#Lechuga').css({'background-image' : 'url(img/contacto.gif)'})
						$('#Lechuga').css({'left' : '0'})
						abrirventana()
					}
				}, 500)

			} else {
				return
			}

			
		
	}

	function lechugacaminaradelante() {
			console.log("La lechuga camino hacia adelante")
			segundotimeout = segundos * 1000
			segundotimeout = segundotimeout + 100
			$('#Lechuga').css({'background-image' : 'url(img/camina.gif)'})
			$('#Lechuga').css({'transition' : 'margin-left '+segundos+'s linear'})
			$('#Lechuga').css({'margin-left' : margin})
			setTimeout(paraLechuga, segundotimeout);
	}

	function lechugacaminaratras() {
			console.log("La lechuga camino hacia atras")
			segundotimeout = segundos * 1000
			segundotimeout = segundotimeout + 100
			$('#Lechuga').css({'-webkit-transform' : 'rotateY(-180deg)',
			            	'-moz-transform' : 'rotateY(-180deg)',
			             	'-ms-transform' : 'rotateY(-180deg)',
			             	'transform' : 'rotateY(-180deg)'})
			$('#Lechuga').css({'background-image' : 'url(img/camina.gif)'})
			$('#Lechuga').css({'transition' : 'margin-left '+segundos+'s linear'})
			$('#Lechuga').css({'margin-left' : margin})
			setTimeout(paraLechuga, segundotimeout);
	}

	$('#seccion_1').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			margin = '0%'

			categoria = 1


			switch (lechugaBandera) {
				case 5:
				segundos = 2.4
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 1.8
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 3:
				segundos = 1.2
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 2:
				segundos = 0.6
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 1:
				segundos = 0
				lechugaBandera = 1
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break
			}
		})

	$('#boton_1').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			margin = '0%'

			categoria = 1

	
			switch (lechugaBandera) {
				case 5:
				segundos = 2.4
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 1.8
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 3:
				segundos = 1.2
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 2:
				segundos = 0.6
				lechugaBandera = 1
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 1:
				segundos = 0
				lechugaBandera = 1
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break
			}
		})

	$('#seccion_2').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			if (banderaViewport == 0) {
				margin = '20%'
			} else {
				margin = '22%'
			}


			categoria = 2

			switch (lechugaBandera) {
				case 5:
				segundos = 1.8
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 1.2
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 3:
				segundos = 0.6
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 2:
				segundos = 0
				lechugaBandera = 2
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break

				case 1:
				segundos = 0.6
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break
			}
		})
	$('#boton_2').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			if (banderaViewport == 0) {
				margin = '20%'
			} else {
				margin = '22%'
			}

			categoria = 2

			switch (lechugaBandera) {
				case 5:
				segundos = 1.8
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 1.2
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 3:
				segundos = 0.6
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 2:
				segundos = 0
				lechugaBandera = 2
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break

				case 1:
				segundos = 0.6
				lechugaBandera = 2
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break
			}
		})

	$('#seccion_3').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			if (banderaViewport == 0) {
				margin = '39.3%'
			} else {
				margin = '33%'
			}

			categoria = 3

			switch (lechugaBandera) {
				case 5:
				segundos = 1.2
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 0.6
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 3:
				segundos = 0
				lechugaBandera = 3
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break

				case 2:
				segundos = 0.6
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 1:
				segundos = 1.2
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break
			}
		})
	$('#boton_3').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			if (banderaViewport == 0) {
				margin = '39.3%'
			} else {
				margin = '33%'
			}

			categoria = 3

			switch (lechugaBandera) {
				case 5:
				segundos = 1.2
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 0.6
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 3:
				segundos = 0
				lechugaBandera = 3
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break

				case 2:
				segundos = 0.6
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 1:
				segundos = 1.2
				lechugaBandera = 3
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break
			}
		})

	$('#seccion_4').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			if (banderaViewport == 0) {
				margin = '52%'
			} else {
				margin = '53%'
			}

			categoria = 4

			switch (lechugaBandera) {
				case 5:
				segundos = 0.6
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 0
				lechugaBandera = 4
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break

				case 3:
				segundos = 0.6
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 2:
				segundos = 1.2
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 1:
				segundos = 1.8
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break
			}
		})

	$('#boton_4').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			if (banderaViewport == 0) {
				margin = '52%'
			} else {
				margin = '53%'
			}

			categoria = 4

			switch (lechugaBandera) {
				case 5:
				segundos = 0.6
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaratras()
				}, 300)
				break

				case 4:
				segundos = 0
				lechugaBandera = 4
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break

				case 3:
				segundos = 0.6
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 2:
				segundos = 1.2
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 1:
				segundos = 1.8
				lechugaBandera = 4
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break
			}
		})

	$('#seccion_5').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})

			resetlechuga()

			if (banderaViewport == 0) {
				margin = '78%'
			} else {
				margin = '80%'
			}

			categoria = 5

			switch (lechugaBandera) {
				case 1:
				segundos = 2.4
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 2:
				segundos = 1.8
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 3:
				segundos = 1.2
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 4:
				segundos = 0.6
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 5:
				segundos = 0
				lechugaBandera = 5
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break
			}
		})
	$('#boton_5').click(
		function() {

			$('#Lechuga').css({'margin-left' : margin})
			
			resetlechuga()

			if (banderaViewport == 0) {
				margin = '78%'
			} else {
				margin = '80%'
			}

			categoria = 5

			switch (lechugaBandera) {
				case 1:
				segundos = 2.4
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 2:
				segundos = 1.8
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 3:
				segundos = 1.2
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 4:
				segundos = 0.6
				lechugaBandera = 5
				setTimeout(function(){
				lechugacaminaradelante()
				}, 300)
				break

				case 5:
				segundos = 0
				lechugaBandera = 5
				$('#Lechuga').css({'margin-left' : margin})
				paraLechuga()
				break
			}
		})

		//-----------------------Botones contenido secciones

		$("#pro_1").click(function(){
			$("#botones_proyectos").fadeOut()
			$("#iframeid").attr("src", "")
			$("#iframeid").hide()
			$("#imagen_1p").attr("src", "img/secc4/casadelsol.jpg")
			$("#imagen_2p").attr("src", "img/secc4/pag1.jpg")
			$("#imagen_3p").attr("src", "img/secc4/pag2.jpg")
			$("#imagen_1p").css("display","block")
			$("#texto_proyect").text("“El viaje a la casa del sol” es un libro trilingüe escrito e ilustrado por Vicman, está escrito en español, ingles y náhuatl y esta próximo a ser publicado.")
			$("#contenido_proyect #ilustraciones").show()
			$("#contenido_proyect").fadeIn()
		})

		$("#pro_2").click(function(){
			$("#botones_proyectos").fadeOut()
			$("#imagen_1p").attr("src", "img/secc4/portada.jpg")
			$("#imagen_2p").attr("src", "img/secc4/pag2l.jpg")
			$("#imagen_3p").attr("src", "img/secc4/pag24.jpg")
			$("#iframeid").attr("src","https://www.youtube.com/embed/LcEs5bbbXys?rel=0&amp;showinfo=0")
			$("#iframeid").show()
			$("#imagen_1p").css("display","block")
			$("#texto_proyect").text("“El viaje a Mictlan” es un libro trilingüe escrito e ilustrado por Vicman, está escrito en español, ingles y náhuatl, fue editado por editorial resistencia en el 2012, ha sido reeditado 3 veces hasta la fecha y es parte de la colección de libros del rincón, además consta de una aplicación para dispositivos móviles con la que se puede disfrutar del libro animado y narrado en los tres idiomas.")
			$("#contenido_proyect #ilustraciones").show()
			$("#contenido_proyect").fadeIn()
		})

		$("#pro_3").click(function(){
			$("#botones_proyectos").fadeOut()
			$("#imagen_1p").attr("src", "")
			$("#imagen_2p").attr("src", "")
			$("#imagen_3p").attr("src", "")
			$("#imagen_1p").hide()
			$("#imagen_2p").hide()
			$("#imagen_3p").hide()
			$("#contenido_proyect #ilustraciones").hide()
			$("#iframeid").attr("src","https://www.youtube.com/embed/wCMT-A8xSrQ?rel=0&amp;showinfo=0")
			$("#iframeid").show()
			$("#texto_proyect").text("Farsocracia. Cortometraje animado que habla acerca de la farsa de los procesos electorales.")
			$("#contenido_proyect").fadeIn()
		})

		$("#pro_4").click(function(){
			$("#botones_proyectos").fadeOut()
			$("#imagen_1p").attr("src", "")
			$("#imagen_2p").attr("src", "")
			$("#imagen_3p").attr("src", "")
			$("#imagen_1p").hide()
			$("#imagen_2p").hide()
			$("#imagen_3p").hide()
			$("#contenido_proyect #ilustraciones").hide()
			$("#iframeid").attr("src","https://www.youtube.com/embed/kJlJ2mQZEMM?rel=0&amp;showinfo=0")
			$("#iframeid").show()
			$("#texto_proyect").text("Eclipse 3d. Cortometraje de ciencia ficción que puede ser apreciado con lentes estereoscópicos en 3d.")
			$("#contenido_proyect").fadeIn()
		})

		$("#pro_5").click(function(){
			$("#botones_proyectos").fadeOut()
			$("#imagen_1p").attr("src", "")
			$("#imagen_2p").attr("src", "")
			$("#imagen_3p").attr("src", "")
			$("#imagen_1p").hide()
			$("#imagen_2p").hide()
			$("#imagen_3p").hide()
			$("#contenido_proyect #ilustraciones").hide()
			$("#iframeid").attr("src","https://www.youtube.com/embed/4BBpkNflPVM?rel=0&amp;showinfo=0")
			$("#iframeid").show()
			$("#texto_proyect").text("Eclipse 3d. Cortometraje de ciencia ficción que puede ser apreciado con lentes estereoscópicos en 3d.")
			$("#contenido_proyect").fadeIn()
		})

		$("#boton_cerrar_proyect").click(function(){
			resetcontenidos()
		})

		var imagenesporyect = 0
		var banderaimgporyect = 1

		$("#flecha_izq_proyect").click(function(){
			imagenesporyect = $(".proyect_img").length
			if (banderaimgporyect <= imagenesporyect) {
				$("#imagen_"+banderaimgporyect+"p").css("display","none")
				banderaimgporyect--
				if (banderaimgporyect == 0) {
					banderaimgporyect = imagenesporyect
				}
				$("#imagen_"+banderaimgporyect+"p").css("display","block")
			}
		})

		$("#flecha_der_proyect").click(function(){
			imagenesporyect = $(".proyect_img").length
			if (banderaimgporyect <= imagenesporyect) {
				$("#imagen_"+banderaimgporyect+"p").css("display","none")
				banderaimgporyect++
				if (banderaimgporyect > imagenesporyect) {
					banderaimgporyect = 1
				}
				$("#imagen_"+banderaimgporyect+"p").css("display","block")
			}

		})

		var banderaimgilustra = 1
		var dir = "https://api.github.com/repos/fhorazombie/Vicman/contents/img/ilustracciones";
		var fileextension = ".jpg";
		var imagenes = []
		$.ajax({
		    url: dir,
		    success: function (data) {
				data.forEach(element => {
					imagenes.push(element.name);
				});
		    }
		});

		var totalimagenes = imagenes.length
		var actualdetotal = 0

		console.log(imagenes)

		$("#flecha_izq").click(function(){
			totalimagenes = imagenes.length
			imagenesporyect = $(".ilustra_img").length
			actualdetotal--
			if (actualdetotal == -1) {
				actualdetotal = totalimagenes - 1
				console.log("Actual total img " + actualdetotal)
			}
			if (banderaimgilustra <= imagenesporyect) {
				$("#imagen_"+banderaimgilustra).css("display","none")
				banderaimgilustra--
				if (banderaimgilustra == 0) {
					banderaimgilustra = imagenesporyect
				}
				console.log(banderaimgilustra + "Bandera ilustracion de 4")
				console.log(imagenes[actualdetotal])
				$("#imagen_"+banderaimgilustra).attr("src", "img/ilustracciones/"+imagenes[actualdetotal])
				$("#imagen_"+banderaimgilustra).css("display","block")
			}
			console.log("Actual total img "+actualdetotal)
		})

		$("#flecha_der").click(function(){
			totalimagenes = imagenes.length
			console.log("total img " + totalimagenes)
			imagenesporyect = $(".ilustra_img").length
			actualdetotal++
			if (actualdetotal == totalimagenes) {
				actualdetotal = 0
				console.log("Actual total img 0")
			}
			if (banderaimgilustra <= imagenesporyect) {
				$("#imagen_"+banderaimgilustra).css("display","none")
				banderaimgilustra++
				if (banderaimgilustra > imagenesporyect) {
					banderaimgilustra = 1
				}
				console.log(imagenes[actualdetotal])
				$("#imagen_"+banderaimgilustra).attr("src", "img/ilustracciones/"+imagenes[actualdetotal])
				$("#imagen_"+banderaimgilustra).css("display","block")
			}
			console.log("Actual total img "+actualdetotal)

		})


			// --------------------Ajustar body para verlo siempre en landscape

			var banderaViewport = 0
		    var width = $(window).width()
		    console.log ("Ancho es "+width)
		    var height = $(window).height()
		    console.log("Alto es "+height)
		    var lechugastate = ""

		    //Pantalla portrait
    	    function mobyle(){

    	    			$('body').css({'width':'100vh',
				    	    			'max-width':'100vh',
				    	    			'height':'100vh',
				    	    			'max-height':'100vh'})

    					$('#wrapper').attr('id','wrapper2')
    					$('#wrapper2').css('max-height',(width))


    					$('body').css({'-webkit-transform' : 'rotate(-90deg)',
    					            	'-moz-transform' : 'rotate(-90deg)',
    					             	'-ms-transform' : 'rotate(-90deg)',
    					             	'transform' : 'rotate(-90deg)'})

    					var width_correcto = $('#wrapper2').prop('scrollHeight')
    					console.log(width_correcto)
    					width_correcto = width_correcto - width
    					console.log(width_correcto)
    					width_correcto = width - width_correcto
    					console.log(width_correcto)

    					$('#wrapper2').css('max-height',(width_correcto))

    					$('iframe').css('height',"64vw")
    					$('div#ilustraciones').css('height',"64vw")

    					lechugastate = $("#Lechuga").css('background-image')
    					lechugastate.toString()

    					banderaViewport = 1

    					setTimeout(function(){
    						if (lechugastate.search("contacto") != -1) {
    							console.log("Solto 5")
    							$('#boton_5').trigger("click")
    						} else if (lechugastate.search("proyectos") != -1) {
    							console.log(lechugastate+"Solto 4" + " " + lechugastate.search("proyectos"))
    							$('#boton_4').trigger("click")
    						} else if (lechugastate.search("animador") != -1) {
    							console.log("Solto 3")
    							$('#boton_3').trigger("click")
    						} else if (lechugastate.search("pintamonos") != -1) {
    							console.log("Solto 2")
    							$('#boton_2').trigger("click")
    						} else if (lechugastate.search("home") != -1) {
    							console.log("Solto 1")
    							$('#boton_1').trigger("click")
    						}
    					}, 100)

    					$('#Lechuga').css({'height' : '78%'})



    		}

    		//Pantalla normal landscape
    	    function mobyle_dos(){
    	    			$('body').css({'width':'',
				    	    			'max-width':'',
				    	    			'height':'',
				    	    			'max-height':''})

    				    $('#viewport').attr('content','width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no')
    					$('#wrapper2').attr('id','wrapper')
    					$('#wrapper').css('height',"")
    					$('#wrapper').css('max-height',"")
    					$('#Lechuga').css({'top' : ''})
    					$('#Lechuga').css({'width' : ''})
    					$('#Lechuga').css({'height' : ''})
    					$('#Lechuga').css({'left' : ''})

    					$('body').css({'-webkit-transform' : 'rotate(0deg)',
    					             '-moz-transform' : 'rotate(0deg)',
    					             '-ms-transform' : 'rotate(0deg)',
    					             'transform' : 'rotate(0deg)'})
    					$('iframe').css('height',"")
    					$('div#ilustraciones').css('height',"")

    					lechugastate = $("#Lechuga").css('background-image')
    					lechugastate.toString()

    					banderaViewport = 0

    					setTimeout(function(){
    						if (lechugastate.search("contacto") != -1) {
    							console.log("Solto 5")
    							$('#boton_5').trigger("click")
    						} else if (lechugastate.search("proyectos") != -1) {
    							console.log("Solto 4")
    							$('#boton_4').trigger("click")
    						} else if (lechugastate.search("animador") != -1) {
    							console.log("Solto 3")
    							$('#boton_3').trigger("click")
    						} else if (lechugastate.search("pintamonos") != -1) {
    							console.log("Solto 2")
    							$('#boton_2').trigger("click")
    						} else if (lechugastate.search("home") != -1) {
    							console.log("Solto 1")
    							$('#boton_1').trigger("click")
    						}
    					}, 100)

    		}

    		if ( width < height /*&& versionAndroid >= 4.3*/) {
		    			mobyle()
	    		} 

	    	var anchovideo = 0
	    	var anchovideo2 = 0
	    	var banderavideo  = 0

	    	window.addEventListener("resize", function() {

	    				width_px = $(window).width()
	    				console.log ("RESIZE Ancho es "+width_px)
	    				height_px = $(window).height()
	    				console.log("RESIZE Alto es "+height_px)

	    				anchovideo = $("#iframeid").width()
	    				console.log("Video Ancho es "+anchovideo)

	    				anchovideo2 = $("#demoreal").width()
	    				console.log("Video Ancho es "+anchovideo2)

	    				if (banderavideo == 1) {
	    					console.log("Salio por bandera video")
	    					banderavideo = 0
			    			return;
	    				}

			    		if (width_px == anchovideo) {
			    			console.log("Salio resize "+anchovideo)
			    			banderavideo = 1
			    			return;
			    		}

			    		if (width_px == anchovideo2) {
			    			console.log("Salio resize "+anchovideo2)
			    			banderavideo = 1
			    			return;
			    		}

			    		if ( width_px < height_px) {

			    			console.log("Entro a Mobile resize")
						    width = $(window).width()
			    			console.log ("Ancho es "+width)
			    			height = $(window).height()
			    			console.log("Alto es "+height)
			    			mobyle()

			    		} else if ( width_px > height_px){

			    			console.log("Entro a Mobile normal")
			    			width = $(window).width()
			    			console.log ("Ancho es "+width)
			    			height = $(window).height()
			    			console.log("Alto es "+height)
			    			mobyle_dos()

			    		}

			}, false)


});
