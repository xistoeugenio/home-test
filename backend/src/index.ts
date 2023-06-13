import express from "express"
import usersRoute from "./routes/users"
import FilesRoute from "./routes/files"
import cors from "cors";
import mongoose from "mongoose";

const app = express()


const conect = async () => {
  try {
      await mongoose.connect('mongodb+srv://hometest:12345test@cluster0.nmg1pdz.mongodb.net/TestUsers?retryWrites=true&w=majority');
      console.log("connected to mongodb")
  } catch (err) {
      throw err
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongodb has been disconected")
})



//middlewares
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use("/api/files", FilesRoute)
app.use("/api/users", usersRoute)

app.listen(8800, () => {
  conect()
  console.log("server is running on http://localhost:8800")
})
