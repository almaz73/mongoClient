var
  express = require('express'),
  bodyParser = require('body-parser'),
  ObjectId = require('mongodb').ObjectId,
  db = require('./db'),
  app = express(),
  tasksController = require('./controllers/tasks');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/tasks', tasksController.get);
app.get('/tasks/:id', tasksController.findById);
app.post('/tasks',tasksController.create);
app.put('/tasks/:id', tasksController.update);
app.delete('/tasks/:id', tasksController.delete);


db.connect("mongodb://localhost:27017/myApi", (err)=>{
  if(err){
    console.log(err)
    return res.sendStatus(500)
  }
  app.listen(3012, ()=>console.log("ЗАПУЩЕНО"))
})
