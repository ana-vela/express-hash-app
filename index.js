const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainText = "ReskillAmericans123";
const port = 4000;
let pass = "";

app.use(express.json());

bcrypt.hash(plainText, saltRounds).then((hash) => {
  console.log(hash);
});

app.listen(port, () => console.log(`app listening on port ${port}`));
