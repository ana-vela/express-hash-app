const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { response } = require("express");
const saltRounds = 10;
const plainText = "ReskillAmericans123";
const port = 4000;
const inputText = "SampleTextPw";

app.use(express.json());

bcrypt.hash(plainText, saltRounds).then((hash) => {
  console.log(hash);
 
  bcrypt.compare(inputText, hash).then(result => {
    console.log(result);
})
});

app.listen(port, () => console.log(`app listening on port ${port}`));
