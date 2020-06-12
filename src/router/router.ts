import {Router,Request,Response} from 'express';
import MySQL from '../mysql/mysql';


const router = Router();


router.get('/jugadores',(req:Request,res:Response)=> {

    const consulta =`
    SELECT * 
    FROM jugadores`;

    MySQL.ejecutarConsulta(consulta,(error:any,jugadores:Object[])=>{

        if(error){
            res.status(400).json({
                ok:false,
                error:error
            });
        } else {
            res.json({
                ok:true,
                jugadores:jugadores
            })
        }


    });

  

});

router.get('/jugadores/:idURL',(req:Request,res:Response)=> {

    const id = req.params.idURL;
    //para escapara los campos
    const escapedId = MySQL.intance.conexion.escape(id);
   
    const consulta =`
    SELECT * 
    FROM jugadores
    where id=${escapedId}`;

    MySQL.ejecutarConsulta(consulta,(error:any,jugadores:Object[])=>{

        if(error){
            res.status(400).json({
                ok:false,
                error:error
            });
        } else {
            res.json({
                ok:true,
                jugador:jugadores[0]
            })
        }


    });

  

});


export default router;