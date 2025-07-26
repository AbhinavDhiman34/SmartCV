import { Router } from "express";

import { registerUser, loginUser, logoutUser, logoutAllDevices } from '../controllers/User.Controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";





const UserRouter = Router();


UserRouter.route('/registeruser').post(registerUser);
UserRouter.route('/loginuser').post(loginUser);
UserRouter.post("/logout", verifyJWT, logoutUser);
UserRouter.post("/logout-all", verifyJWT, logoutAllDevices);



export default UserRouter;
