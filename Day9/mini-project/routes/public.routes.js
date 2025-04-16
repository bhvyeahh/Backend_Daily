import express from 'express';

const router = express.Router();

// Token generation route

router.get("/generate-token", (req, res) => {
     const token = "token"
     res.status(200).send({
        message: "Token generated successfully",
        token: token
     })
});

router.get("/", (req, res) => { 
    res.status(200).send({
        message: "Welcome to the home route"
    })
})

export default router;
// public route