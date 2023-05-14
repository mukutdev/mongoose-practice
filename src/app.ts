import express, { Application , urlencoded } from "express";
import cors from "cors";
const app: Application = express();
app.use(cors());

//application route
import userRoutes from './app/modules/user/user.route'

//pare data 

app.use(express.json())
app.use(urlencoded({extended :true}))

app.use("/api/v1/user", userRoutes );

export default app;
