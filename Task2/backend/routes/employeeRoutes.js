const express = require("express");
const {
getEmployees,
getEmployeeById,
createEmployee,
updateEmployee,
deleteEmployee
} = require("../controllers/employeeController");
const router = express.Router();
// Get all employees
router.get("/", getEmployees);
// Get one employee
router.get("/:id", getEmployeeById);
// Create employee
router.post("/", createEmployee);
// Update employee
router.put("/:id", updateEmployee);
// Delete employee
router.delete("/:id", deleteEmployee);
module.exports = router;