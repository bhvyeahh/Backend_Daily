import express from 'express';

const router = express.Router();


// Dashboard route

router.get("/dashboard", (req, res) => {
    res.status(200).send({
        message: "Welcome to the dashboard route"
    })
});

export default router;