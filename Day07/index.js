import express from 'express'
import data from './data/data.js';
let app = express();
const PORT = 8888;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// GET route to fetch all users
app.get('/api/v1/users', (req, res) => {
    res.status(200).send(data);
});

// Params route to fetch a user by ID
app.get('/api/v1/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = data.find(user => user.id === userId);

    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

// PUT route to update user data
app.put('/api/v1/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const userIndex = data.findIndex(user => user.id === userId)
    if (userIndex !== -1) {
        const updatedUser = { ...data[userIndex], ...req.body };
        data[userIndex] = updatedUser;
        res.status(200).send(updatedUser);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

// Post route to create a new user
app.post('/api/v1/users', (req, res) => {
    const newUser = { id: data.length + 1, ...req.body };
    data.push(newUser);
    res.status(201).send(newUser);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});