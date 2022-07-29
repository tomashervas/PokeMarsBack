import bodyParser from "body-parser";
import express from "express";
import cors from 'cors';
const app = express();
const miticos = require('./miticos.json');
const legendarios = require('./legendarios.json') 
 
const port = process.env.PORT || 3333;
const validoHasta = new Date(2022,7,31).getTime()
const nuevos = [150,151]

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get('/', async (req, res) => {    
    res.json(
        {
            validoHasta,
            nuevos,
            miticos,
            legendarios 
        }
    );
})

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});