const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config()
// Connection URI
const uri =process.env.URL
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
        // Establish and verify connection
        await client.connect();
        console.log("Connected successfully to mongodb");
}
run().catch(err => {
    console.log(err);
    client.close()
})

exports.connect = client
exports.ObjectId = ObjectId