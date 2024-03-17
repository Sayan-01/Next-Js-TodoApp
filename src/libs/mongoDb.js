import mongoose from "mongoose";

const expMongo = async () => {
  const mongoo = process.env.MONGO_URL;
  mongoose.connect(mongoo);
};
export default expMongo;
