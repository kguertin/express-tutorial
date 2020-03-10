const express = require('express');
const path = require('path');
const logger = require('./middlewear/logger')

const app = express();

//init Middlewear
// app.use(logger)

// Middlewear bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Set a static folder

app.use(express.static(path.join(__dirname, 'public')));

// Members routes
app.use('/api/members', require('./routes/apis/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})