const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config();
const connectDB = require("./config/mongoose-connection");
connectDB();

app.use(express.json());

app.use(cookieParser());
app.use("/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
