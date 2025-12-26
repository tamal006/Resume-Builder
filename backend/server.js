import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js';
import userRouter from './routes/userAuth.js';
import resumeRouter from './routes/resumeData.js';
import resumeToken from './middleware/resumeToken.js';
const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors());
connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/user',userRouter)
app.use('/api/resume',resumeToken,resumeRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
