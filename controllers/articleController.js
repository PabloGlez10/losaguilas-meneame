'use strict'

const express = require('express')
const router = express.Router()
const slugify = require('slugify')
const articleModel = require('../models/articleModel')
const authMiddleware = require('../modules/authenticator')
//const publicAccess = authMiddleware(false, ['user', 'admin'])
//const onlyAdminAccess = authMiddleware(true, ['admin'])

router.route('/articles')
  .post( async (req, res) => {
    try {
      let newArticle = req.body

      if (!newArticle.hasOwnProperty("slug") ||
        (newArticle.hasOwnProperty("slug") && newArticle.slug === '')) {
        //generamos el slug
        newArticle.slug = newArticle.title
      }

      newArticle.slug = slugify(newArticle.slug, { lower: true, strict: true })

      newArticle = await new articleModel(newArticle).save()

      res.status(201).json(newArticle)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

module.exports = router
