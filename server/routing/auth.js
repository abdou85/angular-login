const router = require("express").Router();
const MongoClient = require('mongodb').MongoClient;
const jwt =require("jsonwebtoken");

const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/AngularDB', (err, client) => {
    if (err) return console.log(err);
    let db = client.db('AngularDB');
    closure(db);
  })
}

router.post("/Login", (req, res) => {
  connection(db => {
    db.collection("Users").findOne({
        email: req.body.email
      },
      (err, result) => {
        if (result) {
          if (result.password == req.body.password) {
            let token =jwt.sign(result,"OKOKOK")
            res.send( {message:"OK",token:token} );

          } else {
            res.send( {message:"wrong password"} );
          }
        } else {
          res.send( {message:"User not Found"} );
        }
      })
  })
})

router.post("/Register", (req, res) => {
  connection(db => {
    db.collection("Users").insert(req.body, (err, result) => {
      res.send(result);
    })
  })



})


module.exports = router;
