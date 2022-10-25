import { normalizeData } from "../../../src/utils";
import Mensajes from "./mongoose";



class CRUD {
    constructor(Select) {

        if (Select == 1) {
            this.bd = Mensajes;
        } else {

        }
    }

    async Create(param) {

        const data = new this.bd(param)
        data.save().then(data => console.log('Mensaje recibido')).catch(err => console.log(err))

        return param
    }

    async Read() {
        let data = await this.bd.find({}).lean()
            data.forEach(obj => {
                obj.id = obj['_id'].toString()
                delete(obj['_id'])
            })
            return normalizeData(data)
    }
   

    
}





export default CRUD