import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';


const server =Server.init(3000);
server.app.use(router);

// const mysql = new MySQL();
// MySQL.intance;



server.comenzar(()=>{


    console.log('servidor corriendo en el puerto 3000');

});
