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
const paymentsRouter = require('./src/routes/paymentsRoutes');
const shipmentsRouter = require('./src/routes/shipmentsRoutes');
const reviewsRouter = require('./src/routes/reviewsRoutes');
const inventaoryLogsRouter = require('./src/routes/inventaryLogsRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/shippingaddress', shippingAdresRouter);
app.use('/shoppingcarts', shoppingCartsRouter);
app.use('/cartitems', cartItemsRouter);
app.use('/orders', ordersRouter);
app.use('/orderitems', orderItemsRouter)
app.use('/payments', paymentsRouter);
app.use('/shipments', shipmentsRouter);
app.use('/reviews', reviewsRouter);
app.use('/inventorylogs', inventaoryLogsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
