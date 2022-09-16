import * as fs from "fs";

export default (io) => {
    const messages = []
    const productos = [{ name: "shampoo", price: 43, img: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png" }, { name: "shampeo", price: 42, img: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png" }, { name: "shdfsmpoo", price: 45, img: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png" }]
    io.on("connection", socket => {
        console.log('new user connected');

        socket.on('newMessage', message => {
            messages.push(message)
            console.log(messages);
            io.sockets.emit("chatMessage", message)
            fs.writeFile('./chat.txt', JSON.stringify(messages, null, 2), 'utf-8', err => console.log(err))
        })
        socket.emit('productos', productos)
    })


}   