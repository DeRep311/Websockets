import * as fs from "fs";

export default (io) => {
    const messages = []
    const productos = []
    io.on("connection", socket => {
        console.log('new user connected');

        socket.on('newMessage', message => {
            messages.push(message)
            io.sockets.emit("chatMessage", message)
            fs.writeFile('./chat.txt', JSON.stringify(messages, null, 2), 'utf-8', err => console.log(err))
        })

        socket.on('newProduct',datos=>{
            productos.push(datos);
            fs.writeFile('./productos.txt', JSON.stringify(productos, null, 2), 'utf-8', err => console.log(err))
            io.sockets.emit('productos', productos)
        })
        
    })


}   