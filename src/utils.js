import { normalize, denormalize, schema } from "normalizr";
import faker from 'faker'
const autor = new schema.Entity('autores', {}, { idAttribute: "id" })
const texto = new schema.Entity('texto', {
    author: autor
})
export const datosFalsos = ()=>{
    const dataFalse = [];
    let data;
    for (let x = 0; x < 5; x++) {
        data = {
            name_Produ: faker.commerce.productName(),
            Price: faker.commerce.price(),
            url: faker.image.imageUrl()
        }
        dataFalse.push(data);
    
    }
    return dataFalse;
}


const chat = new schema.Entity('chat', {
    author: autor,
    text: [texto]
}, { idAttribute: "id" })

const chatSchema = new schema.Array(chat);

export const normalizeData = (data) => {
    const dataNormalizada = normalize(data, chatSchema)

    return dataNormalizada;
}

export const denormalizeData = (data) => {
    const dataDenormalizada = denormalize(data.result, chatSchema, data.entities);
    return dataDenormalizada;
}
