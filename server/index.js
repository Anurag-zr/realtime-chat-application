const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("hello world from anurag");
});

app.use("/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`server is listening on port : ${PORT}`);
});
