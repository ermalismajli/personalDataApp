const express = require("express");
const mime = require("mime");

const bodyParser = require("body-parser");


const { MongoClient, cursor } = require("mongodb");
const uri =
  /////////////////////////////database connection////////////////////////////////////////////////////////////////////////////////////////////////////
const client = new MongoClient(uri);
const database = client.db("test");


const cors = require("cors");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

function getDb() {
  return database;
}

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post("/input", (req, res) => {
  const { name, surname, age, university } = req.body;
  // TODO: Insert form data into MongoDB or another database
  var collection2 = database.collection("persons");
  collection2.insertOne(
    { name: name, surname: surname, age: age, university: university },
    function (err, res) {}
  );

  res.send("Form submitted successfully");
  res.end();
});

server.get("/table", async (req, res) => {
  var collection = database.collection("persons");
  const cursor = await collection.find({});
  var ar1 = [];
  var ar2 = [];
  var ar3 = [];
  var ar4 = [];
  var c = 0;
  await cursor.forEach((element) => {
    c++;
    ar1.push(element.name);
    ar2.push(element.surname);
    ar3.push(element.age);
    ar4.push(element.university);
  });
  res.json({ name: ar1, surname: ar2, age: ar3, university: ar4, count: c });
  res.end();
});

server.listen(5000, function () {
  console.log("server is running on port 5000");
});
