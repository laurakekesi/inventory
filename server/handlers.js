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
    const createItem = await db.collection("inventoryAll").insertOne(newItem);
    createItem?
    res.status(200).json({status: 200, data: newItem, message: "Item successfully created"})
    : res.status(404).json({status: 404, message: "Item not added :("});
    client.close();
};



//****************** DELETE HANDLERS *********************/

//****************** PATCH HANDLERS **********************/


module.exports = {
createNewItem,
}