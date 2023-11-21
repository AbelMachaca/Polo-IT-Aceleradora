require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', async () => {
  console.log('Conexión exitosa a la base de datos MongoDB');

  
});
