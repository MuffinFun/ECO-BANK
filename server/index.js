require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/routes');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static', 'partners')));
app.use(express.static(path.resolve(__dirname, 'static', 'activities')));
app.use(express.static(path.resolve(__dirname, 'static', 'benefits')));
app.use(express.static(path.resolve(__dirname, 'static', 'offers')));
app.use(fileUpload({}));

app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ match: /_test$/ });
    app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
};

start();
