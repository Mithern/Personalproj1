
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mitherngoh:Seng0705@cluster0.dcfudi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ObjectId = require('mongodb').ObjectId

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    const output = await client.db("Reeee").collection("Deta").find({name: " "});
   for await (const doc of output) {
      console.dir(doc);
    }
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
