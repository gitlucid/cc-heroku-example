const { MongoClient, ServerApiVersion } = require('mongodb');

let client;

const connectToDatabase = async () => {
  if (!client) {
    const uri = "mongodb+srv://23cc-oracle:sACepPKA7q6ySVg@cc.buouygq.mongodb.net/?retryWrites=true&w=majority";
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
  }
  return client;
};

module.exports = connectToDatabase;