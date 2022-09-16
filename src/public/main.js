
const socket = io()
let email = document.getElementById('Gmail')
let mensaje = document.getElementById('mensaje')
let chat = document.getElementById('chat')
let btn = document.getElementById('envio')
function obtenerPlantilla(productos){
    return fetch('plantillas/tabla-productos.hbs')
    .then(response=> response.text())
    .then(plantilla=>{
        const plantillaHBS= Handlebars.compile(plantilla)
        const htmlCompleto= plantillaHBS({productos})
        return htmlCompleto
    })
}
socket.on('productos', async productos=>{
    const html= await obtenerPlantilla(productos)
    document.getElementById('productos').innerHTML=html
})


btn.addEventListener('click', () => {
    socket.emit('newMessage', {
        Email: email.value,
        Mensaje: mensaje.value
    })
})



socket.on('chatMessage', data => {
    const html =`<p>
    <strong>${data.Email}</strong>[${new Date().toLocaleTimeString()}]: ${data.Mensaje}
    </p>`
    chat.innerHTML+= html
})