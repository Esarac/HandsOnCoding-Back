import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors';

import { V1Router } from './routes/v1/routes'

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.use(cors());
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(bodyParser.json());
app.use("/api/v1", V1Router);

app.get( "/api", ( req: Request, res: Response) => {
    res.send( "<h1>Welcome to the Hands On Coding API!</h1>" +
    '<li>Steps: <a href="steps">"/steps"</a></li>'
    );
} );

app.listen( port, () => {
    console.log(`🦌 API is listening on port http://localhost:${ port }/api`);
} );