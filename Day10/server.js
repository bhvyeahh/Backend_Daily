import express from "express"
import cookieParser from "cookie-parser";

const app = express()
const PORT = 8080;

app.use(cookieParser())

app.get('/', (req, res)=>{
    // how to set cookie
    res.cookie("name", "express", {
        // Age set for cookie
        maxAge: 1000 * 60 * 60 * 24
    })
    res.send("Hello World")
})

app.get("/product", (req, res)=>{
    console.log('Cookies: ', req.cookies)
    if(req.cookies.name && req.cookies.name === "express"){
    res.status(200).send({id: 1, name: "Item 01", price: "$100"})   
    }
    else{
        res.status(403).send("you are Unauthorized")
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is connected at http://localhost:${PORT}`)
})

    // console.log(req.cookies);   undefined
    // console.log(req.headers.cookie)
    // console.log('Cookies: ', req.cookies)

    