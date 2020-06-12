import mysql = require('mysql');



export default class MySQL {

    private static _instance:MySQL;

    conexion: mysql.Connection;

    conectado:Boolean = false;

    constructor(){
        console.log('clases inicializada esto solo una vez');

        this.conexion = mysql.createConnection({
            host     : 'localhost',
            user     : 'darwin',
            password : 'Gmd123456**',
            database : 'node_api'
          });

          this.conectadoBD();
    }

    //implementar los get y set

    public static get intance(){
        return this._instance || (this._instance =new this());
    }

    static ejecutarConsulta(consulta:string, callback: Function) {

        this.intance.conexion.query(consulta,(err,results:Object[],fields)=> {

            if(err){
                console.log('Error en Consulta Mysql');
                console.log(err);
                return callback(err);
            }
            if (results.length ===0 ){
                callback('El registro Solicitado no existe');

            }else {

                // hacer todos los resultado correcto
                callback(null,results);

            }
      

        });
        
    }


    private conectadoBD() {

        this.conexion.connect( (error:mysql.MysqlError )=>{

            if(error){
                console.log(error.message);
                return;
            }

            this.conectado=true;
            console.log('Base de Datos Mysql Conectado!!');


        });
        
    }



}


