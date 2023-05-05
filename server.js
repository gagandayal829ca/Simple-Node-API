const express = require("express");
const mongoose = require("mongoose");

const productsRoute = require("./routes/products");

const app = express();
app.use(express.json());

//** Routes */

app.get("/", (req, res) => {
  res.send("Simple Node API project with MongoDB");
});

app.use("/products", productsRoute);

mongoose
  .connect("mongodb+srv://gagandayal:gagan123@cluster0.ug3ec.mongodb.net/test2")
  .then(() => {
    app.listen(3001, () => {
      console.log(`Node API app is running on port 3001`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
