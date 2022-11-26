const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    //cho biet co quan he voi 1 luoc do khac ten Category
    ref: "Category",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
  },
  title: String,
  description: String,
  image: String,
  price: Number,
  quantity: Number,
  rating: [Number],
});

module.exports = mongoose.model("Book", BookSchema);
