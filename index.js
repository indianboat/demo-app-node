import express from "express";
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true
  })
)
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send("Hello world")
})
app.get('/demo', (req, res) => {
  res.send("Hello demo")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});