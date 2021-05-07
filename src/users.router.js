const express = require("express");
const users = require("./users.json");

const { randomNumber } = require("./randomNumber") // to generate a random pohone number

const fs = require('fs'); // to manage file system

const userRouter = express.Router();

userRouter.get("/", async function (req, res, next) {
  res.send(users);
});


userRouter.post("/", async (req, res, next) => {

  users
    .forEach( user => user.number = randomNumber())

  fs.writeFileSync('./src/users.json', JSON.stringify(users));
    // create in another file

  res.send(users);
})

module.exports = userRouter;
