import BDa from "../Services/BD/Mongo/MongoDB";
import { denormalizeData } from "./utils";
const BD = new BDa(1);
export default (io) => {


    io.on("connection", socket => {
        try {
            const emitirMens = async () => {
               const mensajes = await BD.Read();
                io.sockets.emit("chatMessage",denormalizeData(mensajes));
            }
            emitirMens();
        } catch (error) {
            console.log(error);
        }

        socket.on('newMessage', async (message) => {
            try {
                
               const mensajer= await BD.Create(message)
               
               
               socket.emit('NewMessage',mensajer)
            } catch (error) {
                console.log(error);
            }

        })

        socket.on('newProduct', async datos => {

            const ProduAdd = {
                name_Produ: datos.name,
                Price: datos.price,
                url: datos.img
            }

            try {


                await BD.insert(ProduAdd);
                const producto = BD.Read();

                io.sockets.emit('productos', producto);

            }
            catch (error) {
                console.log(error);
            }
        })
    })


}   