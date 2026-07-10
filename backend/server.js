import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js'
import userRouter from './routes/userAuth.js';
import resumeRouter from './routes/resumeData.js';
import resumeToken from './middleware/resumeToken.js';
import mongoose from "mongoose";
const app = express()
const port = process.env.PORT||3000

app.use(express.json());
app.use(cors());

async function dbConnection(){
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// Connect to Database on Startup
dbConnection();

app.use(async (req, res, next) => {
  try {
    await dbConnection();
    next();
  } catch (err) {
    res.status(500).json({ message: "Database connection failed", error: err.message });
  }
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/user',userRouter)
app.use('/api/resume',resumeToken,resumeRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// export default app;