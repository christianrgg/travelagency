//Version de comand ----->   const express = require(`express`); 
import express, { response } from "express"; // version import
import router from "./routes/index.js";

const app = express();


//Definir puerto
const port = process.env.PORT || 4000;

//Agregar router
app.use(`/`, router);


app.listen( port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})