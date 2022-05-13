const express = require('express');
const dbo = require("../db/db");

const router = express.Router();



//add middlewhere - might not need it tho, write out first
//postPatient to db
router.post("/records/id/:id", (req, res) => {

  console.log("trying to post")
  let db_connect = dbo.getDb();
  let resource = req.body;
  db_connect.collection("records").insertOne(resource, function (err, result) {
    if (err) throw err;
    res.json("done");
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

      //0 just happens to be the position of patient
      //TO DO: let make a cmd that searches each inital nest and checks if result[i].resourceType === "Patient"
      //result[0].entry[0]

      const patientsArray =  result.map(function(creature) {
        return creature.entry[0].resource;
      });
      res.json(patientsArray);
    });


})



module.exports = router;
