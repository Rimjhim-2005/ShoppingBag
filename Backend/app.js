const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const connectDB = require("./config/mongoose-connection");
const app = express();
connectDB();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.use("/auth", require("./routes/authRoutes"));
app.use("/list", require("./routes/listRoutes"));
app.use("/history", require("./routes/historyRoutes"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
