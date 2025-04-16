import express from 'express';
import publicRoutes from './routes/public.routes.js';
import privateRoutes from './routes/private.routes.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, 'logs'))) {
  fs.mkdirSync(path.join(__dirname, 'logs'));
}

const app = express();
const PORT = process.env.PORT || 8080;

// Inbuilt middleware
app.use(express.json());

//Middleware to routes
app.use("/public", publicRoutes);
app.use("/private", privateRoutes);



app.get('/', (req, res) => {
  res.send('Hello World!');
}); 



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
