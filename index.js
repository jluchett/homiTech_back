const express = require('express');
const cors = require('cors');
require('dotenv').config()

const usersRouter = require('./src/routes/usersRoutes');
const categoriesRouter = require('./src/routes/categoriesRoutes');
const productsRouter = require('./src/routes/productsRoutes');
const shippingAdresRouter = require('./src/routes/shippingAddresRoutes');
const shoppingCartsRouter = require('./src/routes/shoppingCartsRoutes');
const cartItemsRouter = require('./src/routes/cartItemsRoutes');
const ordersRouter = require('./src/routes/ordersRoutes');
const orderItemsRouter = require('./src/routes/orderItemsRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/shippingaddress', shippingAdresRouter);
app.use('/api/shoppingcarts', shoppingCartsRouter);
app.use('/api/cartitems', cartItemsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/orderItems', orderItemsRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
