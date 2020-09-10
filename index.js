const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

//Load env variables
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const bootcamps = require('./routes/bootcamps');

const PORT = process.env.PORT || 3000;

const app = express();

//Middleware Begin
//Dev logging
if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

//Body parser
app.use(express.json());

app.use('/api/v1/bootcamps', bootcamps);

//Middleware Error
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
      .underline
  );
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  //Close server and exit process
  server.close(() => process.exit(1));
});
