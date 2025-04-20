import {Router} from 'express';
import { login } from '../controller/auth.controller.js';
import { logout } from '../controller/auth.controller.js';

const router = Router();

router.post("/login", login)

router.get("/logout", logout)

export default router