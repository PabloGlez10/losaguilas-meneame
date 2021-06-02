const mongoose = require('mongoose')
const config = require('./config')

class Database {
  constructor() {
    this.db = null
  }

  async connect() {
    mongoose.set("runValidators", true)
    this.db = mongoose.connection;

    try {
<<<<<<< HEAD
      await mongoose.connect(config.DB_CONECCTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
=======
      await mongoose.connect(config.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
>>>>>>> b6d99197ff6410deedc56e5d0269cedd37adceb1
      console.log('Estamos conectados a la base de datos')
    }
    catch(error) {
      console.info('Error al conectar con la base de datos')
      console.error(error)
    }
  }
}

module.exports = new Database()
