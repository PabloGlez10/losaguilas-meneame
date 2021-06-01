'use strict'

const express = require('express')

//Middlewares con las rutas
const indexController = require('./controllers/indexController')
const articleController = require('./controllers/articlesController')
const commentController = require('./controllers/commentController')
const userController = require('./controllers/usersController')
const authController = require('./controllers/authController')
const database = require('./modules/database')

const app = express()


app.use(express.json())

app.use(indexController)
app.use(articleController)
app.use(commentController)
app.use(userController)
app.use(authController)

database.connect()

module.exports = app
