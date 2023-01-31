//Version de comand ----->   const express = require(`express`); 
import express, { response } from "express"; // version import
import router from "./routes/index.js";

const app = express();


//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set(`view engine`, `pug`)

//Agregar router
app.use(`/`, router);


app.listen( port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})