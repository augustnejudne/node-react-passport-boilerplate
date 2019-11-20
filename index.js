process.env.NODE_ENV !== 'production' && require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connected to db: ${process.env.MONGODB_URI}`);
  })
  .catch(e => {
    console.log(`Failed to connect to db: ${e}`);
  });

app.listen(process.env.PORT, () => {
  console.log(`Running on PORT: ${process.env.PORT}`);
});
