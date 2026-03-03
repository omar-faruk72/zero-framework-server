import express from 'express'; 
import cors from 'cors';
import config from './config/index.js';
import { connectDB } from './config/db.js';
import { userRouter } from './modules/user/user.routes.js';

const app = express();
const port = config.port;

connectDB();
// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Zero Framework Server is Running with ESM!');
});

// user
app.use('/', userRouter);



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});