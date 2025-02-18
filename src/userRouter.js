import express from "express";

const router = express.Router();

// Using the GET Method

app.get("/", (req, res) => {
  res.json({
    message: "Get method implemented",
  });
});
