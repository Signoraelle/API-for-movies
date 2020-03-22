const express = require("express");
const app = express();
const connection = require("./config");
// listen to "/api/MOVIE"
app.get("/api/MOVIE", (req, res) => {
  // connection to the database, and selection of movie
  connection.query("SELECT * FROM MOVIE", (err, results) => {
    if (err) {
      
      //  If an error has occurred, then the user is informed of the error
      res.status(500).send("Error retrieving all movies");
    } else {
      // If everything went well, we send the result of the SQL query as JSON.
      res.json(results);
    }
  });
});

app.listen(3000, err => {
  if (err) {
    throw new Error("Alert alert");
  }
  console.log("Listening on port 3000");
});
