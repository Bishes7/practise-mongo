import express from "express";

const router = express.Router();
import mongoose from "mongoose";
import { Schema } from "mongoose";

const schemaFile = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  hr: {
    type: Number,
    min: 1,
    max: 100,
    required: true,
  },

  type: {
    type: String,
    default: "entry",
    enum: ["entry", "bad"],
  },
});

const collectionName = mongoose.model("Task", schemaFile);

// Using the GET Method

router.get("/", async (req, res, next) => {
  const savedData = await collectionName.find();
  res.json({
    message: "Get method implemented",
    savedData,
  });
});

// Using the Post Method
router.post("/", async (req, res, next) => {
  try {
    const insertedData = await collectionName(req.body).save();
    res.json({
      message: "Post method implemented",
      insertedData,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Error",
    });
  }
});

export default router;
