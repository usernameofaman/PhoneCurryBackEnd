const express = require("express");
const router = express.Router();
const User = require("../model/UserSchema");
require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

router.post("/register", async (req, res) => {
  const {    name,    email,    phone,    password: plainTextPassword,    cpassword,  } = req.body;

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  if (plainTextPassword != cpassword) {
    console.log("Don't Match");
    return res.json({ status: "error", error: "Passwords Do not Match" });
  }

  if (!name || typeof name !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      name,
      email,
      phone,
      password,
    });
    console.log("User created successfully: ", response);
    return res.json({status:"success"})
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
});


module.exports = router;
