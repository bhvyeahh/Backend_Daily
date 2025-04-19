import { Router } from "express";

const userRouter = Router();

userRouter.get('/user-about', (req, res) => {   
    res.send('About Page!');
    });
userRouter.get('/user-contact', (req, res) => {
    res.send('Contact Page!');
    });
userRouter.get('/user-services', (req, res) => {
    res.send('Services Page!');
    });

export default userRouter;
// export default userRoutes;