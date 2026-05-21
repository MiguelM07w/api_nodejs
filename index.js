const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hola Mundo'));
app.get('/about', (req, res) => res.send('Acerca de'));

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));