const Employee = require("../models/Employee");

const getEmployees = async (req, res) => {
try {
const employees = await Employee.find().sort({ createdAt: -1 });
res.status(200).json(employees);
} catch (error) {
res.status(500).json({
message: "Failed to fetch employees",
error: error.message
});
}
};

const getEmployeeById = async (req, res) => {
try {
const employee = await Employee.findById(req.params.id);
if (!employee) {
return res.status(404).json({
message: "Employee not found"
});
}
res.status(200).json(employee);
} catch (error) {
res.status(500).json({
message: "Failed to fetch employee",
error: error.message
});
}
};

const createEmployee = async (req, res) => {
try {
const { name, department, role, salary, joinDate } = req.body;
// Basic validation
if (!name || !department || !role || !salary || !joinDate) {
return res.status(400).json({
message: "All fields are required"
});
}

const employee = await Employee.create({
name,
department,
role,
salary,
joinDate
});
res.status(201).json(employee);
} catch (error) {
res.status(500).json({
message: "Failed to create employee",
error: error.message
});
}
};

const updateEmployee = async (req, res) => {
try {
const employee = await Employee.findById(req.params.id);
if (!employee) {
return res.status(404).json({
message: "Employee not found"
});
}
const updatedEmployee = await Employee.findByIdAndUpdate(
req.params.id,
req.body,
{
new: true,
runValidators: true
}
);
res.status(200).json(updatedEmployee);
} catch (error) {
res.status(500).json({
message: "Failed to update employee",
error: error.message
});
}
};

const deleteEmployee = async (req, res) => {
try {
const employee = await Employee.findById(req.params.id);
if (!employee) {
return res.status(404).json({
message: "Employee not found"
});
}
await Employee.findByIdAndDelete(req.params.id);
res.status(200).json({
message: "Employee deleted successfully"
});
} catch (error) {
res.status(500).json({
message: "Failed to delete employee",
error: error.message
});
}
};

module.exports = {
getEmployees,
getEmployeeById,
createEmployee,
updateEmployee,
deleteEmployee
};