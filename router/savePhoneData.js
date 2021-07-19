const express = require("express");
const router = express.Router();
const Phone = require("../model/PhoneSchema");
require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

router.post("/savePhoneData", async (req, res) => {
  const { Name, Brand,Model, Processor, Ram,Display } = req.body;
  console.log(Name, Brand,Model )
 
  try {
    const response = await Phone.create({
      Name, Brand,Model
    });
    console.log('response',response)
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Already Exists" });
    }
    throw error;
  }
  res.json({ status: 200 });
});


module.exports = router;
