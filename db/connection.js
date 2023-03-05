const mongoose = require('mongoose');
const db = mongoose.connection;
var Mongoose = require('mongoose').Mongoose;
const logger = require('../middleware/loggingHandler');
const dotenv = require('dotenv');

console.log(dotenv.config({path: process.cwd()+'/config/' + process.env.NODE_ENV.trim() + '-app-config.env'}));
dotenv.config({path: process.cwd()+'/config/' + process.env.NODE_ENV.trim() + '-app-config.env'});

const instance = new Mongoose();
instance.set('debug', true);

console.log(`mongo connection URL -> ${process.env.MONGO_URI}`)

instance.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected!');
});

logger.debug(`mongoDB connected at : ${instance.connection.host}`);
console.log(`mongoDB connected at : ${instance.connection.host}`);

module.exports = {instance}