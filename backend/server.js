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




app.use(express.static(path.join(__dirname, "../frontend")));


////////////FOr ROOT 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});


//////////// FOR PRODUCT
app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src", "product.html"));
});


//////////// FOR CART
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src", "cart.html"));
});


//////////// FOR CHECKOUT
app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src", "checkout.html"));
});


//////////// FOR LOGIN
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src", "login.html"));
});


//////////// FOR Contact
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src", "contact.html"));
});


//////////// FOR FAQ
app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src", "FAQ.html"));
});


//////////// FOR PRODUCT
app.get("/adminPanel", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src", "adminpanel.html"));
});









app.listen(5000, () => {
    console.log("Server running on port 5000");
});