const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Library Management API is running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/members", require("./routes/memberRoutes"));

app.listen(process.env.PORT, () => {
  console.log("Server started");
});

