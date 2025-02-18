import express from "express";

const app = express();

// Define a port first
const PORT = 8000;

// using listen method

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost: ${PORT}`);
});

// Using the GET Method

app.get("/", (req, res) => {
  res.json({
    message: "Get method implemented",
  });
});
