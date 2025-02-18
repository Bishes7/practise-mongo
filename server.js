import express from "express";

import useRouter from "./src/userRouter.js";

import dbConnect from "./src/dbConnect.js";
// Call the dbconnect funtion
dbConnect();

const app = express();

// Define a port first
const PORT = 8000;

// using listen method

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost: ${PORT}`);
});

// Using the middleware to connect to the userRouter.js
app.use("/api/v1/users", useRouter);

app.use(express.json());
