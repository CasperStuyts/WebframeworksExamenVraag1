var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('exam')
})

/* GET ALL PRODUCTS */
router.get('/', (req, res) => {
  mysort = {Naam:1}
  db.collection('students').find().sort(mysort).toArray((err, result) => {
 
    if (err) return
    res.render('list.ejs', { products: result })
  })
})
/* ADD A PRODUCT */
router.get("/add",(req,res)=>{
  res.render('add.ejs',{})
})

router.post('/add',(req,res)=>{
  var query = {Name:req.body.Naam}
  db.collection('students').find(query).toArray((err,result)=>{
    
    if (err) return
    if(result==''){
      db.collection('students').insertOne(req.body,(err,result)=>{
      if (err) return
      res.redirect('/')
    })
  }
    else
    res.send("Already exists!")
  
  })
})
/* SEARCH A PRODUCT */
router.get("/search",(req,res)=>{
  res.render('search.ejs',{})
})

router.post('/search',(req,res)=>{
  var query = {Name:req.body.Name}
  
  db.collection('items').find(query).toArray((err,result)=>{
   
    if (err) return
    if(result=='')
    res.render('notfound.ejs',{})
    else
    return true;
  })
})
module.exports = router;
