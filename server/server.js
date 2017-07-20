const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

const doctorHandler = require('./controllers/doctors.js');

app.use(express.static(path.join(__dirname, '/../client/public')));


app.use('/doctors', doctorHandler);


const server = app.listen(port, function () {
  console.log('Listening on port ', port);
});
