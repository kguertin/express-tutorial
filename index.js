const express = require('express');
const path = require('path');
const logger = require('./middlewear/logger')

const app = express();

//init Middlewear
// app.use(logger)

//Set a static folder

app.use(express.static(path.join(__dirname, 'public')));

// Members routes
app.use('/api/members', require('./routes/apis/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})