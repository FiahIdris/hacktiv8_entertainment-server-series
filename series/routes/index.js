const express = require('express')
const router = express.Router()
const tvSeries = require('./tv')

router.get('/', function (req, res) {
  res.send('hello world')
})


router.use('/tv', tvSeries)
module.exports = router