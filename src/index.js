import express from 'express'; // require এর বদলে import
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Zero Framework Server is Running with ESM!');
});

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});