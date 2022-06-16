import {
    MongoClient,
    ServerApiVersion,
  } from 'mongodb';
  
  const uri = "mongodb://contentflyuser:mongodbDevPass321@ac-qx70btz-shard-00-00.clv85y5.mongodb.net:27017,ac-qx70btz-shard-00-01.clv85y5.mongodb.net:27017,ac-qx70btz-shard-00-02.clv85y5.mongodb.net:27017/?ssl=true&replicaSet=atlas-342alk-shard-0&authSource=admin&retryWrites=true&w=majority"
  
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  
  const dbName = "demo-contentfly-functions"
  
  export default async function handler(req, res) {
    try {
      const data = req.body;
      await addNewLead(data);
      return res.status(201);
    } catch (error) {
      res.status(400).json({ error: 'Invalid JSON in request body' });
    }
  }
  
  const addNewLead = async doc => {
    try {
      await client.connect()
  
      const db = client.db(dbName)
      const leads = db.collection("leads")
  
      const result = await leads.insertOne(doc)
      console.log(`A lead was inserted with the _id: ${result.insertedId}`)
    } catch (err) {
    } finally {
      await client.close()
    }
  }
  
  // export default function handler(req, res) {
  //     res.status(200).send({query: req.query, method: req.method, body: req.body, headers: req.headers, url: req.url})
  //   };