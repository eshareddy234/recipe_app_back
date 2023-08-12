import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
mongoose.set('strictQuery', true);

mongoose
    .connect(process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },(err)=>{
    if(err){
      console.log("errorrrrr")
      console.log(err)
    }
    else{
      console.log("successfully connected")
    }

  });

app.listen(PORT, () => console.log("Server started on",PORT));
