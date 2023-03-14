const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//****************** GET HANDLERS ***********************/
const getAllItems = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Inventory");
  const allItems = await db.collection("inventoryAll").find().toArray();
  allItems
    ? res
        .status(200)
        .json({ status: 200, data: allItems, message: "Items retrieved" })
    : res.status(404).json({ status: 404, message: "Items not found :(" });
  client.close();
};

const getItemsByCategory = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Inventory");
  const category = req.params.itemCategory;
  const itemsByCat = await db
    .collection("inventoryAll")
    .find({ itemCategory: category })
    .toArray();
  itemsByCat
    ? res
        .status(200)
        .json({ status: 200, data: itemsByCat, message: "Items found!" })
    : res.status(404).json({ status: 404, message: "Category not found" });
  client.close();
};

const getNeedToBuy = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Inventory");
  const itemsToBuy = await db
    .collection("inventoryAll")
    .find({ needToBuy: true })
    .toArray();
  itemsToBuy
    ? res
        .status(200)
        .json({
          status: 200,
          data: itemsToBuy,
          message: "Items to buy retrieved",
        })
    : res.status(404).json({ status: 404, message: "Items not found" });
  client.close();
};

//****************** POST HANDLERS **********************/
const createNewItem = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Inventory");
  const newItem = req.body;
  newItem.needToBuy = false;
  if (newItem.itemQuantity <= 2) {
    newItem.needToBuy = true;
  }
  const createItem = await db.collection("inventoryAll").insertOne(newItem);
  createItem
    ? res.status(200).json({
        status: 200,
        data: newItem,
        message: "Item successfully created",
      })
    : res.status(404).json({ status: 404, message: "Item not added :(" });
  client.close();
};

//****************** DELETE HANDLERS *********************/
const deleteItemById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Inventory");
  const _id = req.params.itemId;
  const deleteItem = await db
    .collection("inventoryAll")
    .findOneAndDelete({ _id: ObjectId(_id) });
  deleteItem
    ? res
        .status(200)
        .json({ status: 200, data: deleteItem, message: "Item deleted!" })
    : res.status(404).json({ status: 404, message: "Item not found:(" });
  client.close();
};

//****************** PATCH HANDLERS **********************/
const updateItemQuantity = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        client.connect();
        const db = client.db("Inventory");
        const _id = req.params.itemId;
        const newQuantity = req.body.itemQuantity;
        const itemToUpdate = await db.collection("inventoryAll").findOneAndUpdate({_id: ObjectId(_id)}, {$set: {itemQuantity: newQuantity}}, {returnNewDocument: true});     
        itemToUpdate.value.itemQuantity !== newQuantity?
        res.status(200).json({status: 200, data: itemToUpdate, message: `Item quantity updated to ${newQuantity}`})
        :res.status(404).json({status: 404, message: "Item not found"});
        client.close();
    }
    catch {
        res.status(500).json({status: 500, message: "Server error!"})
    }
};

const updateItemCategory = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        client.connect();
        const db = client.db("Inventory");
        const _id = req.params.itemId;
        const newCategory = req.body.itemCategory;
        const updateCategory = await db.collection("inventoryAll").findOneAndUpdate({_id: ObjectId(_id)}, {$set: {itemCategory: newCategory}}, {returnNewDocument: true});
        updateCategory.lastErrorObject.updatedExisting === true?
        res.status(200).json({status: 200, data: updateCategory, message: `Item category updated to ${newCategory}`})
        : res.status(404).json({status: 404, message: "Item not found"});
        client.close();
    }
    catch {
        res.status(500).json({status: 500, message: "Server error!"})
    }
};

const updateItemNeedToBuy = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();
        const db = client.db("Inventory");
        const _id = req.params.itemId;
        const needToBuy = req.body.needToBuy;
        const updateNeedToBuy = await db.collection("inventoryAll").findOneAndUpdate({_id: ObjectId(_id)}, {$set: {needToBuy: needToBuy}}, {returnNewDocument: true});
        updateNeedToBuy.lastErrorObject.updatedExisting === true?
        res.status(200).json({status: 200, data: updateNeedToBuy, message: `Item need to buy updated to ${needToBuy}`})
        : res.status(404).json({status: 404, message: "Item not found."});
        client.close();
    }
    catch {
        res.status(500).json({status: 500, message: "Server error!"})
    }
};

const updateItemName = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        client.connect();
        const db = client.db("Inventory");
        const _id = req.params.itemId;
        const newName = req.body.itemName;
        const updateName = await db.collection("inventoryAll").findOneAndUpdate({_id: ObjectId(_id)}, {$set: {itemName: newName}}, {returnNewDocument: true});
        updateName.lastErrorObject.updatedExisting === true?
        res.status(200).json({status: 200, data: updateName, message: `Item name update to ${newName}`})
        :res.status(404).json({status: 404, message: "Item not found"});
        client.close();
    }
    catch {
        res.status(500).json({status: 500, message: "Server error!"})
    }
}


module.exports = {
  getAllItems,
  getItemsByCategory,
  getNeedToBuy,
  createNewItem,
  deleteItemById,
  updateItemQuantity,
  updateItemCategory,
  updateItemNeedToBuy,
  updateItemName
};
