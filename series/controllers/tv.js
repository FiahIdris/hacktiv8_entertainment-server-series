const Series = require('../models/Series')
const ObjectId = require('mongodb').ObjectId

class Controller {

  static async fetchData(req, res, next) {

    try {
      const series = await Series.find()
      res.status(200).json(series)
    } catch (err) {
      console.log(err)
    }
  }

  static async create(req, res, next) {

    try {

      const create = await Series.create(req.body)

      res.status(201).send('success adding a new tv series on your MongoDb')

    } catch (error) {
      console.log(error)
    }
  }

  static async update(req, res, next) {
    // console.log(id)
    // console.log(req.body)
    try {
      const id = new ObjectId(req.params.id)
      const filter = {
        _id: id
      }

      const data = {
        $set: req.body
      }
      const update = await Series.update(filter, data)
      // console.log(update)
      res.status(201).json('success updating series with id ' + id)

    } catch (error) {
      console.log(error)
    }
  }

  static async delete(req, res, next) {

    try {
      const id = new ObjectId(req.params.id)

      const filter = {
        _id: id
      }

      const remove = await Series.delete(filter)

      res.status(200).send('success removing tv series with id ' + id)
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = Controller