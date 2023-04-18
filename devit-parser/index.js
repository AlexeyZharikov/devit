const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');

require('dotenv').config();

let app = express();
let PORT = process.env.PORT || 8001;
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use('/', router);

const DB_URL = process.env.DB_URL;

mongoose.set('strictQuery', false);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`Port is: ${PORT}`);

})