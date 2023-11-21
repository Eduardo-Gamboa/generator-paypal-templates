// (function($) {

//     "use strict";

//     // Variables
//     var nombre = document.getElementById("nombre");
//     var emailUsername = document.getElementById("email");
//     var monto = document.getElementById("monto");
//     var rangoTiempo = document.getElementById("rangoTiempo");
//     var moneda = document.getElementById("cmbMoneda");
//     var tipoTemplate = document.getElementById("cmbTipoTemplate");

//     var nombreMP = document.getElementById("nombreMP");
//     var conceptoMP = document.getElementById("conceptoMP");
//     var montoMP = document.getElementById("montoMP");
//     var rangoTiempoMP = document.getElementById("rangoTiempoMP");

//     // if (v === "P"){
//     //     cambiarSeleccion();
//     // }
//     // Form
//     var contactForm = function() {
//         //window.location.href = "PayPal_ éxito al enviar pago.html";
//         switch (tipoTemplate.value) {
//             case "P":
//                 if ($('#fPayPal').length > 0) {
//                     $("#fPayPal").validate({
//                         rules: {
//                             // nombre: "required",
//                             email: "required",
//                             // email: {
//                             // 	required: true,
//                             // },
//                             message: {
//                                 required: true,
//                                 minlength: 5
//                             },
//                             monto: "required",
//                             rangoTiempo: "required",
//                         },
//                         messages: {
//                             nombre: "Por favor ingresa el nombre:",
//                             subject: "Por favor ingresa el correo",
//                             email: "Por favor ingresa el correo o nombre de usuario",
//                             message: "Please enter a message",
//                             monto: "Debe ingresar un monto valido",
//                             rangoTiempo: "Debe ingresar un rango de tiempo",
//                         },
//                         /* submit via ajax */
//                         submitHandler: function() {
//                                 var $submit = $('.submitting'),
//                                     waitText = 'Submitting...';

//                                 window.open("PaySend.html?nombre=" + nombre.value + "&emailUsername=" + emailUsername.value + "&monto=" + monto.value + "&rangoTiempo=" + rangoTiempo.value + "&moneda=" + moneda.value + "", "_blank");
//                             } // end submitHandler
//                     });
//                 }
//                 break;
//             case "M":
//                 if ($('#fPayPal').length > 0) {
//                     $("#fPayPal").validate({
//                         rules: {
//                             // nombreMP: "required",
//                             // conceptoMP: "required",
//                             // // email: {
//                             // // 	required: true,
//                             // // },
//                             // message: {
//                             //     required: true,
//                             //     minlength: 5
//                             // },
//                             // montoMP: "required",
//                             // rangoTiempoMP: "required",
//                         },
//                         messages: {
//                             // nombreMP: "Por favor ingresa el nombre completo:",
//                             // conceptoMP: "Por favor ingresa el concepto del link.",
//                             // message: "Please enter a message",
//                             // montoMP: "Debe ingresar un monto valido",
//                             // rangoTiempoMP: "Debe ingresar un rango de tiempo",
//                         },
//                         /* submit via ajax */
//                         // submitHandler: function() {
//                         //         var $submit = $('.submitting'),
//                         //             waitText = 'Submitting...';

//                         //         window.open("PaySendMP.html?nombreMP=" + nombreMP.value + "&conceptoMP=" + conceptoMP.value + "&montoMP=" + montoMP.value + "&rangoTiempoMP=" + rangoTiempoMP.value + "", "_blank");
//                         //     } // end submitHandler
//                     });
//                 }
//                 break;
//             default:
//                 break;
//         }
//     };
//     contactForm();
// })(jQuery);

function limpiarCampos() {
    var valorSeleccionado = $("#cmbTipoTemplate").val();
    if (valorSeleccionado == "P") {
        $("#nombre").val("");
        $("#email").val("");
        $("#monto").val("");
        $("#rangoTiempo").val("");
    } else {
        $("#nombreMP").val("");
        $("#conceptoMP").val("");
        $("#montoMP").val("");
        $("#rangoTiempoMP").val("");
    }
}

function enviarDatos() {
    window.open("Detalle Transferencia MP - Movil.html");
}

$("#cmbTipoTemplate").change(function() {
    cambiarSeleccion();
});

function cambiarSeleccion() {
    var v = $("#cmbTipoTemplate").val();
    var lstCamposMP = ["#nombreMP", "#conceptoMP", "#montoMP", "#rangoTiempoMP"];
    var lstCamposP = ["#nombre", "#email", "#monto", "#rangoTiempo"];

    if (v === "P") {
        debugger;

        // Se agregan validaciones de PayPal
        for (var c = 0; c < lstCamposMP.length; c++) {
            $(lstCamposMP[c]).attr("required");
        }

        for (var cp = 0; cp < lstCamposP.length; cp++) {
            $(lstCamposP[cp]).removeAttr("required");
        }

        $("#hTipoSeleccion").text("PayPal");
        $("#fPayPal2").show();
        $("#fMercadoPago").hide();


        // $("#nombre").attr("required");
        // $("#email").attr("required");
        // $("#concepto").attr("required");
        // $("#rangoTiempo").attr("required");

        // Se quitan validaciones de MP
        // $("#nombreMP").removeAttr("required");
        // $("#conceptoMP").removeAttr("required");
        // $("#montoMP").removeAttr("required");
        // $("#rangoTiempoMP").removeAttr("required");

    } else if (v === "M") {
        // Se agregan validaciones de PayPal
        for (var c = 0; c < lstCamposP.length; c++) {
            $(lstCamposP[c]).attr("required");
        }

        for (var cp = 0; cp < lstCamposMP.length; cp++) {
            $(lstCamposMP[cp]).removeAttr("required");
        }

        $("#fPayPal2").hide();
        $("#fMercadoPago").show();
        $("#hTipoSeleccion").text("Mercado Pago");

        // // Se agregan validaciones de MP
        // $("#nombreMP").attr("required");
        // $("#conceptoMP").attr("required");
        // $("#montoMP").attr("required");
        // $("#rangoTiempoMP").attr("required");

        // // Se quitan validaciones de PayPal
        // $("#nombre").removeAttr("required");
        // $("#email").removeAttr("required");
        // $("#concepto").removeAttr("required");
        // $("#rangoTiempo").removeAttr("required");
    }
}

function enviarFormulario() {
    // Variables

    var nombre = document.getElementById("nombre");
    var emailUsername = document.getElementById("email");
    var monto = document.getElementById("monto");
    var rangoTiempo = document.getElementById("rangoTiempo");
    var moneda = document.getElementById("cmbMoneda");
    var tipoTemplate = document.getElementById("cmbTipoTemplate");

    var nombreMP = $("#nombreMP").val();
    var conceptoMP = $("#conceptoMP").val();
    var montoMP = $("#montoMP").val();
    var rangoTiempoMP = $("#rangoTiempoMP").val();

    switch (tipoTemplate.value) {
        case "P":
            window.open("PaySend.html?nombre=" + nombre.value + "&emailUsername=" + emailUsername.value + "&monto=" + monto.value + "&rangoTiempo=" + rangoTiempo.value + "&moneda=" + moneda.value + "", "_blank");
            break;
        case "M":
            window.open("PaySendMP.html?nombreMP=" + nombreMP + "&conceptoMP=" + conceptoMP + "&montoMP=" + montoMP + "&rangoTiempoMP=" + rangoTiempoMP + "", "_blank");
            break;
        default:
            break;
    }
    return false;
}