const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
