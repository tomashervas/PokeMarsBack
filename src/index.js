const express = require('express');
const app = express();
const cors = require('cors');
const miticos = require('./miticos.json');
const legendarios = require('./legendarios.json') 
 
const port = `0.0.0.0:$PORT`;
const validoHasta = new Date(2022,7,31).getTime()
const nuevos = [150,151]

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {    
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