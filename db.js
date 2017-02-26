var
  MongoClient = require('mongodb').MongoClient,
  state = {
    db: null
  }

exports.connect = function(url, done) {
  if (state.db) return done()
  MongoClient.connect(url, function(err, database) {
    if (err) return done(err)
    state.db = database
    done()
  })
}

exports.get = () => state.db
