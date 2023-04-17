(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		//window.location.href = "PayPal_ éxito al enviar pago.html";
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					nombre: "required",
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
					window.open("PagoEnviado.html?puto", "_blank");
					// location.replace('PayPal_ éxito al enviar pago.html');
				// 	$.ajax({   	
				//       type: "POST",
				//       url: "PayPal_ éxito al enviar pago.html",
				//       data: $(form).serialize(),

				//       beforeSend: function() { 
				//       	$submit.css('display', 'block').text(waitText);
				//       },
				//       success: function(msg) {
		        //        if (msg == 'OK') {
		        //        	$('#form-message-warning').hide();
				//             setTimeout(function(){
		        //        		$('#contactForm').fadeIn();
		        //        	}, 1000);
				//             setTimeout(function(){
				//                $('#form-message-success').fadeIn();   
		        //        	}, 1400);

		        //        	setTimeout(function(){
				//                $('#form-message-success').fadeOut();   
		        //        	}, 8000);

		        //        	setTimeout(function(){
				//                $submit.css('display', 'none').text(waitText);  
		        //        	}, 1400);

		        //        	setTimeout(function(){
		        //        		$( '#contactForm' ).each(function(){
				// 							    this.reset();
				// 							});
		        //        	}, 1400);
			               
			    //         } else {
			    //            $('#form-message-warning').html(msg);
				//             $('#form-message-warning').fadeIn();
				//             $submit.css('display', 'none');
			    //         }
				//       },
				//       error: function() {
				//       	$('#form-message-warning').html("Something went wrong. Please try again.");
				//          $('#form-message-warning').fadeIn();
				//          $submit.css('display', 'none');
				//       }
			    //   });   		
		  		} // end submitHandler

			});
		}
		//window.location.href = "PayPal_ éxito al enviar pago.html";
	};
	contactForm();
})(jQuery);
