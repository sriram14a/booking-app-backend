import express from "express"
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { roomRouter } from "./routes/Rooms.js";

dotenv.config();

const app = express();
const port = process.env.PORT
const mongo_URL = process.env.MONGO_URL

async function createConnection(){
  try{
    const client = new MongoClient(mongo_URL)
    await client.connect()
    console.log("MongoDB is connected")
    return client;
  }catch{
    console.log("Mongo db is not connected")
  }
  
}

export const client = await createConnection();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello Welcome To booking App<br/><br/> /rooms - for all rooms<br/> /rooms/id(1) - for search room<br/> /rooms?customer_name=name - for rooms by customer name')
})

app.use("/Rooms", roomRouter)

app.listen(port,()=>{
    console.log("App is listening to",port)
})
