const express = require('express')
const router = express.Router()
const Controller = require('../controllers/tv')

router.get('/', Controller.fetchData)
router.post('/', Controller.create)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)

module.exports = router