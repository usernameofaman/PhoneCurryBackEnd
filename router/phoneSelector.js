const express = require("express");
const router = express.Router();
const Phone = require("../model/PhoneSchema");
require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

router.post("/phoneSelect", async (req, res) => {
  const { minimumPrice, maximumPrice } = req.body;

 
  // try {
  //   const response = await Phone.create({
      
  //   });
  // } catch (error) {
  //   if (error.code === 11000) {
  //     // duplicate key
  //     return res.json({ status: "error", error: "Username already in use" });
  //   }
  //   throw error;
  // }
  // res.json({ status: "ok" });
});


module.exports = router;
