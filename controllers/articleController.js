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
      let reqBody = req.body;
      let newArticle = {"title":reqBody.title,"slug": reqBody.slug,"user": reqBody.user,"category":reqBody.category,"body":reqBody.body}

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

  router.route('/articles/:articleId').delete( async (req, res) => {
    try {
      const articleId = req.params.articleId

      const result = await articleModel.findOneAndDelete({ _id: articleId }).exec()

      if (!result) {
        res.status(404).json({ message: `Artículo con identificador ${articleId} no encontrado.` })
        return
      }

      res.status(204).json(null)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
module.exports = router
