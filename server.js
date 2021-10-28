require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const path = require('path');
const cors = require('cors');
const characterController = require('./controllers/characters');


const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on('open', () => {
    console.log('Mongo is Connected');
});

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV !== 'development'){
  app.use(express.static('public'))
};

app.use('api/characters', characterController);

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});
