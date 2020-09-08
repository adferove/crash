const express = require('express');

const bootcamps = require('./routes/bootcamps');

const dotenv = require('dotenv');
//Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
