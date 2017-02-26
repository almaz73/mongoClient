var db = require('../db');

exports.get = (cb) => db.get().collection('tasks').find().toArray(
  (err, doc) => cb(err, doc)
)


exports.findById = (id, cb)=>db.get().collection('tasks').findOne(
  {_id:id},
  (err, doc)=>cb(err, doc)
)

exports.create = (task, cb)=>db.get().collection('tasks').insert(
  task,
  (err, doc)=>cb(err, doc)
)

exports.update = (id, newName, cb)=>db.get().collection('tasks').updateOne(
  {_id:id},
  {name:newName},
  (err, doc)=>cb(err, doc)
)

exports.delete = (id, cb)=>db.get().collection('tasks').deleteOne(
  {_id:id},
  (err, doc)=>cb(err, doc)
)
