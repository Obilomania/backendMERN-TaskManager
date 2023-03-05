const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
//middleware to enable form data
app.use(express.urlencoded({ extended: false }));
//Handle Cors
app.use(
  cors({
    origin: [
      "http://localhost:3000/",
      "https://taskapp-mernstack.onrender.com",
    ],
  })
);
app.use("/api/tasks", taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

//To Connect your Server to MongoDB
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
