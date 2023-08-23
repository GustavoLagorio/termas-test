let nombreValor;
let phoneValor;
let emailValor;

document.getElementById("reserva").addEventListener("submit", function (event) {
    event.preventDefault();

    //Recolectando informacion del formulario

    let nombre = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    nombreValor = nombre;
    phoneValor = phone;
    emailValor = email;
    console.log(nombreValor);
    console.log(phoneValor);
    console.log(emailValor);
    console.log(fechasReserva);

    /*// Reemplaza 'tu_mensaje' con el mensaje que deseas enviar
    var mensaje = encodeURIComponent(`Hola se registro una reserva a nombre de ${nombreValor} su telefono de contacto es ${phoneValor} su mail ${emailValor} y sus fechas de reserva son del dia ${fechasReserva[0]} al ${fechasReserva[fechasReserva.length - 1]}`);
    // Reemplaza 'numero_destino' con el número de teléfono al que deseas enviar el mensaje (incluyendo el código de país)
    var numeroDestino = '541135927507';
    // Construye el enlace de WhatsApp con el mensaje y número de destino
    //var enlaceWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroDestino + '&text=' + mensaje;
    var enlaceWhatsApp = 'https://web.whatsapp.com/send?phone=' + numeroDestino + '&text=' + mensaje;
    // Abre el enlace en una nueva pestaña o ventana del navegador
    window.open(enlaceWhatsApp);*/

    document.getElementById("reserva").reset();
})

