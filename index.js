//Version de comand ----->   const express = require(`express`); 
import express, { response } from "express"; // version import

const app = express();


//Definir puerto
const port = process.env.PORT || 4000;

app.get(`/`, (req, res) =>{
    res.send(`Hola mundo`);
});

app.get(`/Nosotros`, (req, res) =>{
    res.send(`Nosotros`);
});

app.listen( port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})