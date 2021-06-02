'use strict'

const express = require('express');
const { sha512 } = require('js-sha512');
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();
const router = express.Router();
const config = require('../modules/config');

const userModel = require('../models/userModel');

router.route('/users')
  .get(async (req, res) => {
    try {
      const limit = req.query.hasOwnProperty('limit') ? parseInt(req.query.limit) : 50

      let userList = await userModel.find().sort({ firstname: 'ASC', lastname: 'ASC' }).limit(limit).exec()

      userList = userList.map((user) => {
        user = user.toJson()
        delete user.password

        return user
      })

      res.json(userList)
    } catch (error) {
      res.stutas(500).json({ message : error.message})
    }
  })
  .post(async (req, res) => {
    let userData = req.body
    try {
      
      userData.profile = "user"
      userData.password = sha512(userData.password)

      userData = await new userModel(userData).save()
      userData = userData.toJson()
      delete userData.password

      res.status(201).json(userData)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }

    try {
      userData.public_domain = config.PUBLIC_DOMAIN
      res.render(config.WELLCOME_EMAIL_TPL, userData, async (err, emailbody) => {
        if (err) {
          return
        }

        const from = { name: userData.firstname, email: userData.email }

        await mailer.send(from, userData.email, config.WELLCOME_SUBJECT, emailbody, true)
      })
    } catch (error) {
      console.info("Correo de bienvenida no enviado. Usuario erroneo")
      console.error(error)
    }
  })

  router.route('/users/:userId')
    .get(async (req, res) => {
      try {
        const userId = req.params.userId
        let foundUser = await userModel.findById(userId).exec()

        if (!foundUser) {
          res.status(404).json({ message: `${userId} no encontrado` })
          return
        }
        foundUser = foundUser.toJson()
        delete foundUser.password

        res.json(foundUser)
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    })
    .put(async (req, res) => {
      try {
        const userId = req.params.userId
        const userData = req.body
      }
    })