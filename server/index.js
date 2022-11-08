const express = require('express');
const morgan = require('morgan');
require("dotenv").config();


const {
createNewItem
} = require("./handlers")
const PORT = 4000;

express()

// .get(/api/allItems)
.post('/api/newItem', createNewItem)

.use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })


    .use(morgan("tiny"))
    .use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))


.get('/', (req, res) => {
  res.status(200).json({status: 200, message: "Howdy!"})
})


.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});