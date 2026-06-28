const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

// connectDB disabled temporarily
// const connectDB = require("./config/db");
// connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Library Management API is running");
});

// Comment API routes that use database
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/books", require("./routes/bookRoutes"));
// app.use("/api/members", require("./routes/memberRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});