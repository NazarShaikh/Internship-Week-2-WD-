const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const app = express();
// Connect to MongoDB
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/employees", employeeRoutes);
// Test route
app.get("/", (req, res) => {
res.json({
message: "Employee Management API is running"
});
});
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});