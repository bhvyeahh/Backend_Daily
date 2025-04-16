import express from 'express';

const app = express();
// Global middleware
function hiMiddleware(req, res, next) {
  console.log('hi middleware');
  next();
}

// app.use(hiMiddleware); // commenting this line will not run the middleware
const PORT = 8080;
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// }); 


// Specific middleware for a route
// we can create multiple middleware and use them in the route
app.get('/',hiMiddleware, (req, res) => {
    res.send('Hello World!');
  }); 

app.get('/about', (req, res) => {   
    res.send('About Page!');
    });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




// 1. global middleware
// 2. router middleware
// 3. inbuilt middleware
