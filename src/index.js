const config = require("./config/config");
// require("./config/database");

const app = require("./app");

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
