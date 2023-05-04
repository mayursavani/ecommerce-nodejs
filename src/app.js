const express = require("express");
const morgan = require("morgan");
const app = express();
const { Cors } = require("./middlewares/cors");

app.use(Cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api/v1/auth", require("./routes/auth.routes"));

app.get("/", (req, res) => {
  res.json({ message: "welcome to my app" });
});

module.exports = app;
