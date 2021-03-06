const express = require("express");
const bodyParser = require('body-parser')

const router = require("./routes/records");

const cors = require("cors");
const app = express();
const port = 3001;

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cors());
app.use(express.json());
const dbo = require("./db/db");

// get driver connection
app.use('/', router)


app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });

  console.log(`Server is running on port: ${port}`);
});
