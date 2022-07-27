const express = require('express');
const app = express();
const miticos = require('./miticos.json');
const legendarios = require('./legendarios.json') 
 
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {    
    res.json(
        {
            miticos,legendarios
        }
    );
})

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});