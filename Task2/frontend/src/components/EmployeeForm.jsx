import { useEffect, useState } from "react";
const initialForm = {
name: "",
department: "",
role: "",
salary: "",
joinDate: ""
};
function EmployeeForm({ employee, onSubmit, onCancel }) {
const [form, setForm] = useState(initialForm);
const [errors, setErrors] = useState({});
useEffect(() => {
if (employee) {
setForm({
name: employee.name || "",
department: employee.department || "",
role: employee.role || "",
salary: employee.salary || "",
joinDate: employee.joinDate
? employee.joinDate.substring(0, 10)
: ""
});
} else {
setForm(initialForm);
}
setErrors({});
}, [employee]);
const handleChange = (e) => {
const { name, value } = e.target;
setForm((previous) => ({
...previous,
[name]: value
}));
};
const validate = () => {
const newErrors = {};
if (!form.name.trim()) {
newErrors.name = "Name is required";
} else if (form.name.trim().length < 2) {
newErrors.name = "Name must contain at least 2 characters";
}
if (!form.department) {
newErrors.department = "Department is required";
}
if (!form.role.trim()) {
newErrors.role = "Role is required";
}
if (!form.salary) {
newErrors.salary = "Salary is required";
} else if (Number(form.salary) < 0) {
newErrors.salary = "Salary cannot be negative";
}
if (!form.joinDate) {
newErrors.joinDate = "Joining date is required";
}
setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};
const handleSubmit = (e) => {
e.preventDefault();
if (!validate()) {
return;
}
onSubmit({
name: form.name.trim(),
department: form.department,
role: form.role.trim(),
salary: Number(form.salary),
joinDate: form.joinDate
});
};
return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6 backdrop-blur-sm">
<div className="max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
{/* Header */}
<div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
<div>
<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
{employee ? "✎" : "+"}
</div>
<h2 className="text-xl font-bold text-slate-900">
{employee ? "Edit Employee" : "Add Employee"}
</h2>
<p className="mt-1 text-sm text-slate-500">
{employee
? "Update employee information"
: "Enter employee information"}
</p>
</div>
<button
type="button"
className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
onClick={onCancel}
aria-label="Close"
>
×
</button>
</div>
{/* Form */}
<form onSubmit={handleSubmit}>
<div className="grid grid-cols-1 gap-5 px-6 py-6 sm:grid-cols-2">
{/* Full Name */}
<div>
<label className="mb-2 block text-sm font-semibold text-slate-700">
Full Name
</label>
<input
type="text"
name="name"
placeholder="e.g. Rahul Sharma"
value={form.name}
onChange={handleChange}
className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 ${
errors.name
? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
: "border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
}`}
/>
{errors.name && (
<span className="mt-1.5 block text-xs font-medium text-red-500">
{errors.name}
</span>
)}
</div>
{/* Department */}
<div>
<label className="mb-2 block text-sm font-semibold text-slate-700">
Department
</label>
<select
name="department"
value={form.department}
onChange={handleChange}
className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition ${
errors.department
? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
: "border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
}`}
>
<option value="">Select department</option>
<option value="Engineering">Engineering</option>
<option value="Human Resources">Human Resources</option>
<option value="Finance">Finance</option>
<option value="Marketing">Marketing</option>
<option value="Sales">Sales</option>
<option value="Operations">Operations</option>
<option value="Design">Design</option>
</select>
{errors.department && (
<span className="mt-1.5 block text-xs font-medium text-red-500">
{errors.department}
</span>
)}
</div>
{/* Role */}
<div>
<label className="mb-2 block text-sm font-semibold text-slate-700">
Role
</label>
<input
type="text"
name="role"
placeholder="e.g. Software Developer"
value={form.role}
onChange={handleChange}
className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 ${
errors.role
? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
: "border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
}`}
/>
{errors.role && (
<span className="mt-1.5 block text-xs font-medium text-red-500">
{errors.role}
</span>
)}
</div>
{/* Salary */}
<div>
<label className="mb-2 block text-sm font-semibold text-slate-700">
Salary
</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
₹
</span>
<input
type="number"
name="salary"
placeholder="e.g. 55000"
min="0"
value={form.salary}
onChange={handleChange}
className={`w-full rounded-xl border bg-white py-3 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 ${
errors.salary
? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
: "border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
}`}
/>
</div>
{errors.salary && (
<span className="mt-1.5 block text-xs font-medium text-red-500">
{errors.salary}
</span>
)}
</div>
{/* Joining Date */}
<div className="sm:col-span-2">
<label className="mb-2 block text-sm font-semibold text-slate-700">
Joining Date
</label>
<input
type="date"
name="joinDate"
value={form.joinDate}
onChange={handleChange}
className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition ${
errors.joinDate
? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
: "border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
}`}
/>
{errors.joinDate && (
<span className="mt-1.5 block text-xs font-medium text-red-500">
{errors.joinDate}
</span>
)}
</div>
</div>
{/* Actions */}
<div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
<button
type="button"
className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
onClick={onCancel}
>
Cancel
</button>
<button
type="submit"
className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-100"
>
{employee ? "Update Employee" : "Add Employee"}
</button>
</div>
</form>
</div>
</div>
);
}
export default EmployeeForm;