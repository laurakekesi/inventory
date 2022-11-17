const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const {
  getAllItems,
  getItemsByCategory,
  getNeedToBuy,
  createNewItem,
  deleteItemById,
  updateItemQuantity,
  updateItemCategory,
  updateItemNeedToBuy,
  updateItemName
} = require("./handlers");
const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Howdy!" });
  })

  // GET ENDPOINTS
  .get("/api/items", getAllItems)
  .get("/api/items/category/:itemCategory", getItemsByCategory)
  .get("/api/items/needToBuy", getNeedToBuy)

  // POST ENDPOINTS
  .post("/api/newItem", createNewItem)

  // DELETE ENDPOINTS
  .delete("/api/item/:itemId", deleteItemById)

  // PATCH ENDPOINTS
  .patch('/api/itemQuantity/:itemId', updateItemQuantity)
  .patch('/api/itemCategory/:itemId', updateItemCategory)
  .patch('/api/itemNeedToBuy/:itemId', updateItemNeedToBuy)
  .patch('/api/itemName/:itemId', updateItemName)

  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
