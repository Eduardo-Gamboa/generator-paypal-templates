(function($) {

    "use strict";

    // Variables
    var nombre = document.getElementById("nombre");
    var emailUsername = document.getElementById("email");
    var monto = document.getElementById("monto");
    var rangoTiempo = document.getElementById("rangoTiempo");
    var moneda = document.getElementById("cmbMoneda");
    var tipoTemplate = document.getElementById("cmbTipoTemplate");
    cambiarSeleccion();
    // Form
    var contactForm = function() {
        debugger;
        //window.location.href = "PayPal_ éxito al enviar pago.html";
        switch (tipoTemplate.value) {
            case "P":
                if ($('#fPayPal').length > 0) {
                    $("#fPayPal").validate({
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

                                window.open("PaySend.html?nombre=" + nombre.value + "&emailUsername=" + emailUsername.value + "&monto=" + monto.value + "&rangoTiempo=" + rangoTiempo.value + "&moneda=" + moneda.value + "", "_blank");
                            } // end submitHandler
                    });
                }
                break;
            case "M":
                if ($('#fMercadoPago').length > 0) {
                    $("#fMercadoPago").validate({
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

                                window.open("PaySend.html?nombre=" + nombre.value + "&emailUsername=" + emailUsername.value + "&monto=" + monto.value + "&rangoTiempo=" + rangoTiempo.value + "&moneda=" + moneda.value + "", "_blank");
                            } // end submitHandler
                    });
                }
                break;
            default:
                break;
        }
    };
    contactForm();
})(jQuery);

function limpiarCampos() {
    nombre.value = "";
    //emailUsername.value = "";
    monto.value = "";
    rangoTiempo.value = "";
}

function enviarDatos() {
    window.open("Detalle Transferencia MP - Movil.html");
}

$("#cmbTipoTemplate").change(function() {
    cambiarSeleccion();
});

function cambiarSeleccion() {
    var v = $("#cmbTipoTemplate").val();
    if (v === "P") {
        $("#hTipoSeleccion").text("PayPal");
        $("#fPayPal").show();
        $("#fMercadoPago").hide();
    } else if (v === "M") {
        $("#fPayPal").hide();
        $("#fMercadoPago").show();
        $("#hTipoSeleccion").text("Mercado Pago");
    }
}