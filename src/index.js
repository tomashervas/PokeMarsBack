const express = require('express');
const app = express();
const cors = require('cors');
const miticos = require('./miticos.json');
const legendarios = require('./legendarios.json') 
 
const port = process.env.PORT || 3333;
const validoHasta = new Date(2022,7,31).getTime()
const nuevos = [150,151]

app.use(cors());
app.use(express.json());


app.get('/',async (req, res) => {    
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