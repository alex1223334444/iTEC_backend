var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

/* GET users listing. */

const cors=require('cors');
const { append } = require('express/lib/response');
const dbURL='mongodb+srv://Alex:parola@cluster0.tfoycoi.mongodb.net/?retryWrites=true&w=majority';
router.use(
  cors ({
    origin: "*"
  })
);
mongoose.connect(dbURL)
.then((result) => console.log("SUCCESS"))
.catch((err) => console.log(err));


router.post('/addUser', (req, res) => {
  //res.status(200).send(req.body)
   const user = new User({
     username: req.body.username,
     password: req.body.password
   });
   user.save()
   .then((result) => {res.send(result)})
   .catch((err) => {console.log(err)});
})


router.post('/loginUser', (req, res) => {
  //res.status(200).send(req.body)
   const user = new User({
     username: req.body.username,
     password: req.body.password
   });
   User.findOne( {username: user.username, password: user.password} ,function (err, result) {
    if (!result)
     res.status(403).json({message: "Forbiden"});
    else
    res.status(200).json(result);
    
  }
    )
  })

router.get('/addUser/:id', (req, res) => {
  // const user = new User(req.body);
  console.log(req.params);
  // user.save()
  // .then((result) => {res.send(result)})
  // .catch((err) => {console.log(err)});
  res.status(200).json({message: "success!"})
})

router.get('/', function(req, res) {
  res.setHeader("Content-Type", "text/html");
  User.find()
  .then((result) => {
    res.send(result);
    res.end();})
  .catch((err) => {console.log(err)})
});







module.exports = router;
