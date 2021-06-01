'use strict'

const express = require('express')

//middlewares con las rutas

const articleController = require('./controllers/ArticlesController')
const messagesController = require('./controllers/MessagesController')
const usersController = require('./controllers/UsersController')
const authController = require('./controllers/AuthController')
//server instance
const app = express()
//middleware para parsear los cuerpos tipo application/JSON en el cuerpo
app.use(express.json())
//enganchamos los controladores de los diferentes recursos
app.use(articleController)
app.use(messagesController)
app.use(usersController)
app.use(authController)

database.connect()

module.exports = app