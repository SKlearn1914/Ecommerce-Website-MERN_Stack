const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// Middleware
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

// routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});