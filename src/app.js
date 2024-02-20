// import express

import express from "express";

const app = express();
// const bodyparser = require ("body-parser");
const port = 3000;
//this app.listen is a call back function used tolisten for ports

// set view engine to be ejs

const verifyTime = (req, res, next) => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  if (day >= 1 && day <= 5 && hour >= 20 && hour <= 23) {
    next();
  } else {
    res.send("oops! this application only works (monday to friday)9am-5pm");
  }
};

app.use(verifyTime);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
