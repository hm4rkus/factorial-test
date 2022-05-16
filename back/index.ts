import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DataPoint } from "./models/dataPoint/DataPoint";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const handleError = (error: Error, res: Response) => res.send(500);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@factorialtest.kki9q.mongodb.net/?retryWrites=true&w=majority`;
const client = mongoose.connect(uri);

const app = express();
const port = process.env.PORT;

//Get the default connection
const db = mongoose.connection;

app.use(cors());
const jsonParser = bodyParser.json();

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/data", async (req: Request, res: Response) => {
  try {
    const data = await DataPoint.find();
    res.send(data);
  } catch (error) {
    return handleError(error as Error, res);
  }
});

interface PostDataPointBody {
  name: string;
  value: number;
  timestamp: number;
}

app.post(
  "/add",
  jsonParser,
  (req: Request<{}, {}, PostDataPointBody>, res: Response) => {
    const body = req.body;

    const newData = new DataPoint({
      name: body.name,
      value: body.value,
      timestamp: new Date(body.timestamp),
    });
    newData.save((err: Error) => {
      if (err) return handleError(err, res);
      res.send(200);
    });
  }
);

app.listen(port, () => {
  console.log(`Factorial test listening on port ${port}`);
});
