const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const miticos = require('./miticos.json');
const legendarios = require('./legendarios.json') 
 
const port = process.env.PORT || 3333;
console.log(port)
console.log(process.env.PORT)
const validoHasta = new Date(2022,7,31).getTime()
const nuevos = [150,151]

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

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