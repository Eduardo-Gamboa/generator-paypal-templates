(function($) {

	"use strict";

  // Form
	var contactForm = function() {
		//window.location.href = "PayPal_ éxito al enviar pago.html";
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					// nombre: "required",
					email: "required",
					// email: {
					// 	required: true,
					// },
					message: {
						required: true,
						minlength: 5
					},
					monto: "required",
					rangoTiempo: "required",
				},
				messages: {
					nombre: "Por favor ingresa el nombre:",
					subject: "Por favor ingresa el correo",
					email: "Por favor ingresa el correo o nombre de usuario",
					message: "Please enter a message",
					monto: "Debe ingresar un monto valido",
					rangoTiempo: "Debe ingresar un rango de tiempo",
				},
				/* submit via ajax */
				submitHandler: function() {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';
					// window.location.href = "./PayPal_ éxito al enviar pago.html?Pedro";
					debugger;
					var nombre = document.getElementById("nombre");
					var emailUsername = document.getElementById("email");
					var monto = document.getElementById("monto");
					var rangoTiempo = document.getElementById("rangoTiempo");
					
					// emailUsername.innerText
					window.open("PaySend.html?nombre="+nombre.value+"&emailUsername="+emailUsername.value+"&monto="+monto.value+"&rangoTiempo="+rangoTiempo.value+"", "_blank");
		  		} // end submitHandler
			});
		}
	};
	contactForm();
})(jQuery);