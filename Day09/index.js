import express from 'express';
import userRouter from './Routes/user.routes.js';
const app = express();

app.use("/api/v1/users",userRouter)

const PORT = 8888;

app.get('/', (req, res) => {
    res.send('Hello World!');
  }); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
