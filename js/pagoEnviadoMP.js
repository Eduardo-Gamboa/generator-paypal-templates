(function($) {

    "use strict";

    var Init = function() {
        // Arreglos de nombres de meses y nombres de AM/PM
        var meses = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        var amPm = ["AM", "PM"];

        // Obtener la fecha y hora actual
        var fechaActual = new Date();

        // Obtener los componentes de la fecha y hora
        var dia = fechaActual.getDate();
        var mes = meses[fechaActual.getMonth()];
        var horas = fechaActual.getHours();
        var minutos = fechaActual.getMinutes();
        var amOpm = amPm[horas >= 12 ? 1 : 0];

        // Formatear los minutos para que tengan siempre 2 dígitos
        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        // Construir la cadena de fecha en el formato deseado
        var fechaFormateada = dia + " de " + mes + " " + horas + ":" + minutos + " " + amOpm;

        // Mostrar la fecha formateada en el elemento HTML
        // $("#fecha").text(fechaFormateada);


        var txtNombre = document.getElementById("txtNombreUsuario");
        var txtMonto = document.getElementById("txtMonto");
        // var txtEmailEnviado = document.getElementById("txtEmailEnviado");
        var txtRangoTiempo = document.getElementById("txtRangoTiempo");
        var txtConcepto = document.getElementById("txtConceptoMP");
        // var txtMoneda = document.getElementById("txtMoneda");
        // debugger;
        var queryString = window.location.search;
        // var moneda = txtMoneda.innerHTML;
        // Elimina el signo de interrogación al principio de la cadena de consulta
        queryString = queryString.slice(1);

        // Divide la cadena de consulta en pares de nombre y valor separados por "&"
        var params = queryString.split("&");

        // Crea un objeto para almacenar los parámetros y sus valores
        var queryParams = {};
        for (var i = 0; i < params.length; i++) {
            var parts = params[i].split("=");
            var name = decodeURIComponent(parts[0]);
            var value = decodeURIComponent(parts[1]);
            queryParams[name] = value;
        }
        // Accede al valor del parámetro "nombre"
        // if (queryParams.nombre === "" || queryParams.nombre === undefined || queryParams.nombre === null) {
        //     txtNombre.innerHTML = queryParams.emailUsername;
        // } else {
        //     txtNombre.innerHTML = queryParams.nombre;
        // }
        txtMonto.innerHTML = queryParams.montoMP;
        txtNombre.innerHTML = queryParams.nombreMP;
        txtRangoTiempo.innerHTML = queryParams.rangoTiempoMP;
        // txtEmailUserVer.innerHTML = queryParams.emailUsername;
        txtConcepto.innerHTML = queryParams.conceptoMP;

        // txtMoneda.innerHTML
        // var sNombre = queryParams.nombre;
        // var sNombre = queryParams.nombre;
        // var sNombre = queryParams.nombre;
    };
    Init();
})(jQuery);