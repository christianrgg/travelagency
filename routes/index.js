import express, { response } from "express";

const router = express.Router();

router.get(`/`, (req, res) =>{
    res.render(`Inicio`);
});

router.get(`/nosotros`, (req, res) =>{
    
    const viajes = `Viaje a alemania`; 
    res.render(`nosotros`, {
        viajes
    });
});

export default router;



