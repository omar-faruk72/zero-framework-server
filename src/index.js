import express from 'express'; 
import cors from 'cors';
import config from './config/index.js';
import { connectDB } from './config/db.js';
import { dataPostRoutes } from './modules/data-post/data-post.routes.js';

const app = express();
const port = config.port;

connectDB();
// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Zero Framework Server is Running with ESM!');
});

app.use('/post', dataPostRoutes)



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});