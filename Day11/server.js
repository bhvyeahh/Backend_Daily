import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
const app = express();

app.use(session(
    {
        secret: 'mysecret',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 // 1 day
        }
    }
))

app.use(cookieParser("codesnippets"));

const PORT = process.env.PORT || 3000;

// creating a session
app.get('/', (req, res) => { 
    console.log(req.session);
    console.log(req.session.id)
    res.send('Hello World!');
});  


// To add user data while loggin in, in session
app.get("/login", (req, res) => {
    req.session.user = {
        name: "John Doe",
        email: "johndoe@example.com",
        age: 30
    };
    res.send("User logged in");
});


// To destroy the session
app.get("/logout", (req,res)=>{
    req.session.destroy()
    res.send("User logged out")
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});