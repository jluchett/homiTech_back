const express = require('express');
const cors = require('cors');
require('dotenv').config()

const usersRouter = require('./src/routes/usersRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
