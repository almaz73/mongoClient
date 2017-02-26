var
  Tasks = require('../models/tasks'),
  ObjectId = require('mongodb').ObjectId;

exports.get = (req, res) => {
  Tasks.get((err, doc) => {
    if (err) return res.sendStatus(500)
    res.send(doc)
  })
}

exports.findById = (req, res)=>{
  Tasks.findById(ObjectId(req.params.id), (err, doc)=>{
    if(err) return res.sendStatus(500)
    res.send(doc)
  })
}

exports.create = (req, res)=>{
  var task = {name:req.body.name}
  Tasks.create(task, (err, doc)=>{
    if(err)return res.sendStatus(500)
    res.send(doc)
  })
}

exports.update = (req, res)=>{
  Tasks.update(ObjectId(req.params.id), req.body.name, (err, doc)=>{
    if(err)return res.sendStatus(500)
    res.send(doc)
  })
}

exports.delete = (req, res)=>{
  Tasks.delete(ObjectId(req.params.id), (err, doc)=>{
    if(err) return res.SendStatus(500)
    res.send(doc)
  })
}
