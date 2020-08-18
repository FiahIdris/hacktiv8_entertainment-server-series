const { getDatabase } = require('../config/dbConnection')


class Series {

  static database() {
    return getDatabase().collection('series')
  }

  static find() {
    return this.database().find().toArray()
  }

  static create(data) {
    return this.database().insertOne(data)
  }

  static update(filter, updateDocument) {
    return this.database().updateOne(filter, updateDocument)
  }

  static delete(filter) {
    return this.database().deleteOne(filter)
  }
}

module.exports = Series