const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//****************** GET HANDLERS ***********************/

//****************** POST HANDLERS **********************/
const createNewItem = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Inventory");
  const newItem = req.body;
  newItem.needToBuy = false;
  if (newItem.itemQuantity <= 1) {
    newItem.needToBuy = true;
  }
  const createItem = await db.collection("inventoryAll").insertOne(newItem);
  createItem
    ? res
        .status(200)
        .json({
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
    const deleteItem = await db.collection("inventoryAll").findOneAndDelete({_id: ObjectId(_id)});
    deleteItem?
    res.status(200).json({status: 200, data: deleteItem, message: "Item deleted!"})
    : res.status(404).json({status: 404, message: "Item not found:("});
    client.close();
}

//****************** PATCH HANDLERS **********************/

module.exports = {
  createNewItem,
  deleteItemById
};







// const deletePostById = async (req, res) => {
//     const client = new MongoClient(MONGO_URI, options);
//     await client.connect();
//     const db = client.db("myFinalProject");
//     const _id = req.params.postId;
//     const deletePost = await db
//       .collection("post_data")
//       .findOneAndDelete({ _id: ObjectId(_id) });
//     deletePost
//       ? res
//           .status(200)
//           .json({ status: 200, message: "Post successfully deleted!" })
//       : res
//           .status(404)
//           .json({ status: 404, message: "No post found under that _id." });
//     client.close();
//   };