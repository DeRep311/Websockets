import { LoadMessage } from "./sockets.js";
import { onHandlerSubmit } from "./UI.js";
const Form = document.querySelector('#chatForm')
let btn = document.getElementById('envio')

LoadMessage();




function obtenerPlantilla(productos) {
    return fetch('plantillas/tabla-productos.hbs')
        .then(response => response.text())
        .then(plantilla => {
            const plantillaHBS = Handlebars.compile(plantilla)
            const htmlCompleto = plantillaHBS({ productos })
            return htmlCompleto
        })
}

btn.addEventListener('click',onHandlerSubmit)

//Productos con faker
fetch('http://localhost:8080/api/productos-test')

    .then(response => response.json())
    .then(async json => {
        console.log(json);
        const html = await obtenerPlantilla(json)
        document.getElementById('productos').innerHTML = html
    })
    .catch(err => console.log('Solicitud fallida', err));




