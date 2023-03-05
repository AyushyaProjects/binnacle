const express = require('express');
const app = express();
const mongoDbConnection = require('./db/connection');
const mongoSanatize = require('express-mongo-sanitize')
const logger = require('./middleware/loggingHandler')

// connect to DataBase
// mongoDbConnection();

app.use(mongoSanatize());

app.get('/', (req, res) => {
  res.send('Hello, World!')
})
// Add middleware and routes here

const PORT = process.env.PORT || 5001

const server = app.listen(
    PORT,
    console.log(`server started on ${process.env.NODE_ENV} mode at ${PORT}`),
    logger.info(`server started on ${process.env.NODE_ENV} mode at ${PORT}`),
    );

module.exports = app;
