const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/app');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 9876;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});