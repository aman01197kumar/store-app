import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
  book_name: String,
  description: String,
  category: String,
});

const Store = mongoose.model("Store", storeSchema);

export default Store;
