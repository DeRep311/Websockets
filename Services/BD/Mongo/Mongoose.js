
import mongoose, { Schema as _Schema, connect, model } from 'mongoose';
const Schema = _Schema;
try {
    // Connect to the MongoDB cluster
    connect(
        'mongodb+srv://DeRep:nose1234@cluster0.dc3f8gz.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}
// const schemAuth = new Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     Name: {
//         type: String,
//         required: true
//     },
//     LastName: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     nick: {
//         type: String,
//         required: true
//     },
//     avatar: {
//         type: String,
//         required: true
//     }
// })

const schem = new Schema({
    Fecha:{
        type:String,
        default: new Date().toLocaleTimeString()
        
    },
    Mensajes: {
        type: String,
        required: true
    },
    author: {
        id: {
            type: String,
            required: true
        } ,
        Name: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        nick: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        }
    },
    
},{
    timestamps: false,
    versionKey: false
})





export default mongoose.model('Mensajes', schem);
