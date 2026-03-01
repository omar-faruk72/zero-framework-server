import express from 'express'; 
import cors from 'cors';
import config from './config/index.js';



const app = express();
const port = config.port;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Zero Framework Server is Running with ESM!');
});



app.listen(port, () => {
    console.log(` Server is running on http://localhost:${port}`);
});