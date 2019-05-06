const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuracion
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//middlewares
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api",require('./routes/index'));

//Inicio de servidor
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});