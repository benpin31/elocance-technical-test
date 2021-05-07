const express = require("express");
const users = require("./users.json");

const { randomNumber } = require("./randomNumber") // to generate a random pohone number

const fs = require('fs'); // to manage file system

const userRouter = express.Router();

userRouter.get("/", async function (req, res, next) {
  res.status(200).json(users);
});


userRouter.patch("/", async (req, res, next) => {

  try {
    users
      .forEach(user => user.number = randomNumber())

    fs.writeFileSync('./src/users.json', JSON.stringify(users));
    // create in another file

    res.status(200).json(users);
  } catch(err) {
    res.status(500).json(err.toString());
  }

})

module.exports = userRouter;
