require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DB_URL;

const routes = require('./routes/product-routes');

const app = express();

app.use(express.json());

app.use('/api', routes);

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('open', () => {
  console.log('Database Connected');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
