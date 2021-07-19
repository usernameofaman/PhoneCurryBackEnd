const express = require("express");
const router = express.Router();
const Phone = require("../model/PhoneSchema");
require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fetch = require('node-fetch');

router.post("/extractData", async (req, res) => {
  const { websiteData } = req.body;
  console.log("REsponse", websiteData)
  res.send(websiteData)
}
)

module.exports = router;
