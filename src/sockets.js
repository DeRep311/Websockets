import BD from "../Services/BD/knex";


export default (io) => {
    
         //remplazo los fs por peticones a la bd
   
    io.on("connection", socket => {
        console.log('new user connected');
        
        socket.on('newMessage', async message => {
            try {
                await BD.insetMsg(message)
                io.sockets.emit("chatMessage", message)
            } catch (error) {
                console.log(error);
            }
            
        })

        socket.on('newProduct', async datos=>{
            
            const ProduAdd= {
                name_Produ: datos.name,
                Price: datos.price,
                url: datos.img
            }
    
          try {

           
               await BD.insert(ProduAdd)
                const producto =  JSON.parse(JSON.stringify(await BD.getAll()))
                
                io.sockets.emit('productos', producto)
                
            }
           catch (error) {
              console.log(error);
          }
        })
    })


}   