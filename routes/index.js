import express, { response } from "express";

const router = express.Router();

router.get(`/`, (req, res) =>{
    res.send(`Hola mundo`);
});

router.get(`/Nosotros`, (req, res) =>{
    res.send(`Nosotros`);
});

router.get(`/Contacto`, (req, res) =>{
    res.send(`Contacto`);
});

export default router;



