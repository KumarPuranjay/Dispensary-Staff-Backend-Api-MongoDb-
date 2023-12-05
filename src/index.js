const express = require('express');
const mongoose = require('mongoose');
const studentDataRoute = require('./routes/studentDataRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const corsOptions = {
  "origin": "*",
  "methods": ["GET", "POST", "DELETE", "PUT"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/studentData', studentDataRoute);

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening the port ${PORT}...`);
});
