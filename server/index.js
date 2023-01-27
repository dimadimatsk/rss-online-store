require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT;
const linkdb = process.env.MONGO_URL;

const start = async () => {
  try {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(linkdb);
  } catch (error) {
    console.log(`server error: ${error.message}`);
    process.exit(1);
  }
  app.listen(port, () => console.log(`server has been started on port: ${port}`));
};

start();
