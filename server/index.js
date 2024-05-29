require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/routes');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.static(path.resolve(__dirname, 'static', 'partners')));
app.use(express.static(path.resolve(__dirname, 'static', 'activities')));
app.use(express.static(path.resolve(__dirname, 'static', 'benefits')));
app.use(express.static(path.resolve(__dirname, 'static', 'offers')));
app.use(express.static(path.resolve(__dirname, 'static', 'accounts')));
app.use(express.static(path.resolve(__dirname, 'static', 'credit-cards')));
app.use(express.static(path.resolve(__dirname, 'static', 'person-things')));

app.use(fileUpload({}));

app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: true, match: /_test$/ });
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
};

start();
