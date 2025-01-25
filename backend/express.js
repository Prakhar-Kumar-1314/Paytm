const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("api/v1", mainRouter);

app.listen(() => {
  console.log(`Working on Port ${port}`);
});
