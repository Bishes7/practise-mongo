import mongoose from "mongoose";
const mongoURL = "mongodb://127.0.0.1:27017/tasklist";

const dbConnect = async () => {
  const connectDB = mongoose.connect(mongoURL);

  connectDB && console.log("Database is connected");
};

export default dbConnect;
