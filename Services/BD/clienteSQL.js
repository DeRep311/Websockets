import res from "express/lib/response";
import KnexLib from "knex";

class SQL{
    constructor(config, config3){
        this.knex= KnexLib(config)
        this.knex3= KnexLib(config3)
        this.TabName= 'Productos'
        this.msg='MSG'

    }


    async insert(data){
        await this.knex(this.TabName).insert(data)
    }


    async getAll(){
        const datos = await this.knex(this.TabName).select('id','Price', 'name_Produ','url')
        return datos
    }
    
    ////Falta terminar


    // getById(id){
    //     this.knex(this.TabName).where({'id': id}).select('id', 'name_Produ','url')
    // }
    // deleteById(id){
    //     this.knex(this.TabName).where({'id': id}).del()
    // }
    // update(id, data){
    //     this.knex(this.TabName).where({'id': id}).update(data)
    // }
    // close(){
    //     this.knex.destroy();
    // }




   async getAllMsg(){
        const datos = await this.knex3(this.msg).select('Date', 'Email', 'Mensajes');
        return datos
    }
    async insetMsg(data){
       await this.knex3(this.msg).insert(data)
    }


}
export default SQL;