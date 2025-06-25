import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import route from "./route/route_blog.js"
//import bodyParser from "body-parser";

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
await mongoose.connect(process.env.MONGO_URL);

//routes
app.use("/blog", route)
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());




app.listen(PORT, () => {
  console.log(`Now listening on port: `, PORT);
});
