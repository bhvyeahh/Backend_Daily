import express from "express";
import data from "./data/data.js"; // Make sure this file exists and exports the array

const app = express();
app.use(express.json());
const PORT = 8080;

// ------------------- ROUTES -------------------

// Root route

// app.get("/", (req, res) => {
//     res.status(200).send("Hello World!");
// });



// Users route with optional query filter
app.get("/api/v1/users", (req, res) => {
    const { name } = req.query;
    // using query params to filter users
    if (name) {
        const user = data.filter((user) => user.name === name);
        res.status(200).send(user);
    } else {
        res.status(200).send(data); // <-- Yahi missing tha
    }
});

// Router Params
app.get("/api/v1/users/:id", (req, res)=>{
    const {id} = req.params;
    const parsedId = parseInt(id);
    const user = data.find((user)=>user.id === parsedId)
    res.status(200).send(user)
})


// -----------POST Request -----------

app.post("/api/v1/users",(req,res)=>{

    const {name, displayName} = req.body
    const newUser = {
        id: data.length + 1,
        name,
        displayName
    }
    data.push(newUser) // Add new user to the data array
    res.status(201).send({
        message: "User Created Successfully",
        user: newUser
    })
})

// -----------PUT Request -----------

app.put("/api/v1/users/:id", (req, res) => {
    const {
        body,
        params: { id },
    } = req;
    const parsedId = parseInt(id);
    const userIndex = data.findIndex((user) => user.id === parsedId);
    if(userIndex === -1){
        res.status(404).send("User not found" );
    }
    data[userIndex] = {
        id: parsedId,
        ...body,
    };
    res.status(201).send({
        message: "User Updated Successfully",
        user: data[userIndex],
    })
}
)

// Start server   
app.listen(PORT, () => {
    console.log(`Server Running at PORT ${PORT}`);
});
