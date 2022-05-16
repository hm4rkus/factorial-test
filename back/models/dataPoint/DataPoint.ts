import mongoose, { Schema } from "mongoose";

const DataPointSchema = new Schema({
  name: String,
  value: Number,
  timestamp: Date,
});

export const DataPoint = mongoose.model("DataPointModel", DataPointSchema);
