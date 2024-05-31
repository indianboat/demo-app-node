import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true
  })
)
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello world")
})
app.get('/demo', (req, res) => {
  res.send("Hello demo")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});