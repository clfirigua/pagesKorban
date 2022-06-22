const animate = ScrollReveal();
// Datos del mensaje
const nombre = document.getElementById('nombre'),
    apellido = document.getElementById('apellido'),
    correo = document.getElementById('email'),
    telefono = document.getElementById('telefono'),
    cmaquinas = document.getElementById('cmaquinas');
// botones
const enviar = document.getElementById('enviar');
const url = 'https://cftelegram.herokuapp.com/cf/notificaciones/sendTelegram';




enviar.addEventListener('click', (event) => {
    event.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombre": nombre.value,
        "apellido": apellido.value,
        "telefono": telefono.value,
        "correo": correo.value,
        "nmaquinas": cmaquinas.value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://cftelegram.herokuapp.com/cf/notificaciones/sendTelegram", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

})


animate.reveal('.maquinaria-form', {
    duration: 3000,
    origin: 'left',
    distance: '300px'
});


animate.reveal('.info-korban-sec', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})

animate.reveal('.razones-1', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
})
animate.reveal('.razones-2', {
    duration: 2000,
    origin: 'right',
    distance: '200px'
})
animate.reveal('.letras', {
    duration: 2000,
    scale: 0.85,
})

