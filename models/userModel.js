'use strict'

const mongoose = require('mongoose')

const UserSchema = require('./schemas/userSchema')

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel