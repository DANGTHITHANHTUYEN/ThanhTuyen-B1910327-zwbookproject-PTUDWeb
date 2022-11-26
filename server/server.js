const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./models/user");

dotenv.config();
const app = express();

// Ket noi den mongdb
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb "))
  .catch((err) => console.log(err));

//Midlleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const bookRouter = require("./routes/book");
const categoryRouter = require("./routes/category");
const ownerRouter = require("./routes/owner");
const authRouter = require("./routes/auth");

app.use("/api", bookRouter);
app.use("/api", categoryRouter);
app.use("/api", ownerRouter);
app.use("/api", authRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running at ${PORT}`);
  }
});
