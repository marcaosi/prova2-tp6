const express = require('express')

const Router = express.Router()
const controller = require('../controllers/latas.js')

Router.get('/latas', controller.get)
Router.get('/latas/:id', controller.getId)
Router.post('/latas/', controller.create)
Router.put('/latas/', controller.update)
Router.delete('/latas/', controller.destroy)

module.exports = Router