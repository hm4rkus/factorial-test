"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// Types
const DataPoint_1 = require("./models/dataPoint/DataPoint");
dotenv_1.default.config();
// Not very complete error handler.
const handleError = (error, res) => res.send(500);
// Mongoose
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@factorialtest.kki9q.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default.connect(uri);
// Express
const app = (0, express_1.default)();
const port = process.env.PORT;
//Get the default connection
const db = mongoose_1.default.connection;
app.use((0, cors_1.default)());
const jsonParser = body_parser_1.default.json();
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Get Data endpoint.
app.get("/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield DataPoint_1.DataPoint.find().sort({ timestamp: "asc" });
        res.send(data);
    }
    catch (error) {
        return handleError(error, res);
    }
}));
// Post Data endpoint.
app.post("/add", jsonParser, (req, res) => {
    const body = req.body;
    const newData = new DataPoint_1.DataPoint({
        name: body.name,
        value: body.value,
        timestamp: new Date(body.timestamp),
    });
    newData.save((err) => {
        if (err)
            return handleError(err, res);
        res.send(200);
    });
});
app.listen(port, () => {
    console.log(`Factorial test listening on port ${port}`);
});
