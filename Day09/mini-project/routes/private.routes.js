import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();


// Dashboard route

router.get("/dashboard", authMiddleware, (req, res) => {
    res.status(200).send({
        message: `Hi ${req.user.name} Welcome to the dashboard route`
    })
});

export default router;