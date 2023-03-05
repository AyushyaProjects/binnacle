const mongoose = require('mongoose');
const db = mongoose.connection;
var Mongoose = require('mongoose').Mongoose;
const logger = require('../middleware/loggingHandler')

const instance = new Mongoose();
instance.set('debug', true)

instance.connect(process.env.MONGI_URI,{
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