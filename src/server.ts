import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from './routes/user'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//db
import { connectToDB } from "./db/connect";

//middlewares
app.use(express.json())

//routes
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use('/api', router);

const startServer = async () => {
  try {
    await connectToDB();
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      });
  } catch (error) {
    console.log(error);
  }
};

startServer();


