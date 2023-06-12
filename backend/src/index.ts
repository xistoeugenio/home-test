import express from "express"
import usersRoute from "./routes/users"
import cors from "cors";

const app = express()


//middlewares
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use("/api/users", usersRoute)

app.listen(8800, () => {
  console.log('server is running')
})
