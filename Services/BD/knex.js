

import SQL from './clienteSQL'
import MakeTab from './Scripts/MakeTabs'

//Configuracion cliente sql
const conf={
    client: 'mysql',
    connection:{
        host: '127.0.0.1',
        user: 'root',
        password:'',
        database:'Ecomerce'
    }
}

//configuracion archivo sqlite
const conf3={
    client:'better-sqlite3',
  connection: {
    filename: "./Services/BD/mydb.sqlite"
  }
}

//el creador de tablas
const maker= new MakeTab(conf, conf3)

//Las acciones con las base de datos
const BD = new SQL(conf, conf3)

//exporto solo este ya que es lo unico que necesita el cliente ademas de separar la capa BD
export default BD;


//Creacion de esquemas




maker.createTabMSG();
maker.createTabProd();

