import express, { response } from "express";

const router = express.Router();

router.get(`/`, (req, res) =>{
    res.send(`Hola mundo`);
});

router.get(`/Nosotros`, (req, res) =>{
    
    const viajes = `Viaje a alemania`; 
    res.render(`nosotros`, {
        viajes
    });
});

export default router;



