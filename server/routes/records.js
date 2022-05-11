const express = require('express');
const dbo = require("../db/db");

const router = express.Router();



//add middlewhere - might not need it tho, write out first
//postPatient to db
router.post("/records/id/:id", (req, res) => {

  let db_connect = dbo.getDb();
  let resource = req.body;
  db_connect.collection("records").insertOne(resource, function (err, result) {
    if (err) throw err;
  });
//look how to import records into main file for post

})



//get all patients
router.get("/records", (req, res) => {

//look how to import records into main file for post
  console.log("hello im here in get ALL records")

  let db_connect = dbo.getDb();
  db_connect.collection("records").find().sort({$natural:1}).limit(50).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });


})



module.exports = router;
