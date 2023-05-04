const config = require("./config");
const mongoose = require("mongoose");

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
