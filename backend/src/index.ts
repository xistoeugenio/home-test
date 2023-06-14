import express from "express";
import usersRoute from "./routes/users";
import FilesRoute from "./routes/files";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://hometest:12345test@cluster0.nmg1pdz.mongodb.net/TestUsers?retryWrites=true&w=majority'
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB has been disconnected");
});

// Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/files", FilesRoute);
app.use("/api/users", usersRoute);

app.listen(8800, () => {
  connect();
  console.log("Server is running on http://localhost:8800");
});
