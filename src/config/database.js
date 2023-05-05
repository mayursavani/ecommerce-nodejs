const config = require("./config");
const mongoose = require("mongoose");
const { MongoClinet } = require("mongoose");
const { db } = require("../models/user");
const client = new MongoClinet(config.MONGODB);
mongoose.connect(
  config.MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    }
    console.log("DB connected successfully");
  }
);

// async function dbConnect() {
//   let result = await client.connect();
//   db = result.db("databaseName");
//   return db;
// }

// module.exports = dbConnect;
