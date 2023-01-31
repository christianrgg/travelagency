import express, { response } from "express";

const router = express.Router();

router.get(`/`, (req, res) =>{
    res.send(`Hola mundo`);
});

router.get(`/Nosotros`, (req, res) =>{
    res.render(`nosotros`);
});

export default router;



