import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/bd.js'; 
import router from './Routes/UserRoutes.js'; 

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

app.use("/api/v1", router); 

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
