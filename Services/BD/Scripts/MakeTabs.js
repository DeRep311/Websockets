import KnexLib from "knex";



class MakeTab {
    constructor(config, config3) {

        //cliente sql
        this.knex = KnexLib(config)

        //cliente sqlite
        this.Knex3 = KnexLib(config3)
    }

    async createTabProd() {
      try {
          //crea la tabla si no existe
           await this.knex.schema.createTableIfNotExists('Productos', table => {
                table.increments('id', { primaryKey: true });
                table.string('name_Produ', 100).notNullable();
                table.integer('Price', 100).notNullable();
                table.string('url', 250);
    
            })
      } catch (error) {
          console.log(error);
      }
    }
    async createTabMSG() {
      try {
           //crea la tabla si no existe
           await this.Knex3.schema.createTableIfNotExists('MSG', table => {
                table.date('Date')
                table.string('Email', 100).notNullable();
                table.string('Mensaje', 250);
    
            })
      } catch (err) {
          console.log(err);
      }


    }
}
//Exporta a knex donde se va administrar la creacion de estas tablas (el usuario no accede a esta ya que es cuestion del servidor y su gestion)
export default MakeTab;