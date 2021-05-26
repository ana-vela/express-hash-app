const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { response } = require("express");
const saltRounds = 10;
const plainText = "ReskillAmericans123";
const port = 4000;
let hashedPassword;

app.use(express.json());

bcrypt.hash(plainText, saltRounds).then((hash) => {
  hashedPassword = hash;
  console.log(hash);
});

app.post("/", (req, res) => {
  bcrypt.compare(req.body.password, hashedPassword).then((result) => {
    res.json({ result });
  });
});

app.listen(port, () => console.log(`app listening on port ${port}`));
