'use strict'
const express = require('express')
const router = express.Router()

const LoginAuth = require('../usescases/auth/LoginAuth')
const ForgotPassword = require('../usescases/auth/ForgotPassword')
let status = 500
router.route('/auth/login')
.post(async (req,res) => {
  try{
  const authData = req.body
  const result = await LoginAuth(authData)
  res.send(result)
}
catch (error) {
  if (error.status) {
    status = error.status
  }
  res.status(status).json({ message: error.message })
}
})

router.route('/auth/forggotten-password')
.post(async (req,res) => {
  try{
  const forgotData = req.body
  const result = await ForgotPassword(forgotData)
  res.send(result)
}
catch (error) {
  if (error.status) {
    status = error.status
  }
  res.status(status).json({ message: error.message })
}
})

module.exports = router
