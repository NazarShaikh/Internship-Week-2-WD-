import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";
import SearchBar from "../components/SearchBar";
import DeleteModal from "../components/DeleteModal";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from "../services/employeeService";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [deletingEmployee, setDeletingEmployee] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [sortConfig, setSortConfig] = useState({
    field: "name",
    direction: "asc"
  });

  // Fetch employees
  const loadEmployees = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // Success notification
  const showSuccessMessage = (message) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  // Add / Update employee
  const handleSubmit = async (employeeData) => {
    try {
      setError("");

      if (editingEmployee) {
        await updateEmployee(editingEmployee._id, employeeData);
        showSuccessMessage("Employee updated successfully.");
      } else {
        await createEmployee(employeeData);
        showSuccessMessage("Employee added successfully.");
      }

      setShowForm(false);
      setEditingEmployee(null);
      await loadEmployees();
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit employee
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  // Delete employee
  const handleDelete = async () => {
    if (!deletingEmployee) {
      return;
    }

    try {
      setDeleting(true);
      setError("");
      await deleteEmployee(deletingEmployee._id);
      setDeletingEmployee(null);
      showSuccessMessage("Employee deleted successfully.");
      await loadEmployees();
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  };

  // Sorting
  const handleSort = (field) => {
    setSortConfig((previous) => ({
      field,
      direction:
        previous.field === field && previous.direction === "asc"
          ? "desc"
          : "asc"
    }));
  };

  // Search + sort
  const filteredEmployees = useMemo(() => {
    const searchTerm = search.toLowerCase().trim();

    let result = employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.department.toLowerCase().includes(searchTerm) ||
        employee.role.toLowerCase().includes(searchTerm)
      );
    });

    result.sort((a, b) => {
      let valueA = a[sortConfig.field];
      let valueB = b[sortConfig.field];

      if (sortConfig.field === "joinDate") {
        valueA = new Date(valueA);
        valueB = new Date(valueB);
      }

      if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }

      if (valueA > valueB) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }

      return 0;
    });

    return result;
  }, [employees, search, sortConfig]);

  // Open add form
  const openAddForm = () => {
    setEditingEmployee(null);
    setShowForm(true);
  };

  // Close form
  const closeForm = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  // Statistics
  const departmentCount = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const averageSalary =
    employees.length > 0
      ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0
        }).format(
          employees.reduce(
            (sum, employee) => sum + Number(employee.salary),
            0
          ) / employees.length
        )
      : "₹0";

  return (
    <div className="min-h-screen bg-[#062c63] font-sans text-slate-900">
      <Navbar />

      <main className="mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="mb-8 overflow-hidden rounded-[24px] border border-white/30 bg-[#0755b8] shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_280px]">
            {/* Header content */}
            <div className="relative px-7 py-9 sm:px-10 sm:py-11">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "42px 42px"
                  }}
                />
              </div>

              <div className="relative">
                <div className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Dashboard
                </div>

                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Employee Management
                </h1>

                <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-blue-100 sm:text-lg">
                  Manage your organization's employees, departments, roles,
                  salaries and joining information efficiently.
                </p>
              </div>
            </div>

            {/* Add employee button */}
            <button
              onClick={openAddForm}
              className="group flex min-h-[180px] items-center justify-center gap-3 bg-[#f4d000] px-8 text-xl font-extrabold text-slate-900 transition-all duration-300 hover:bg-[#ffe13b] hover:shadow-inner lg:min-h-full lg:text-2xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xl text-white transition-transform duration-300 group-hover:rotate-90">
                +
              </span>
              <span>Add Employee</span>
            </button>
          </div>
        </section>

        {/* Notifications */}
        {success && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700 shadow-lg">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
              ✓
            </span>
            {success}
          </div>
        )}

        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700 shadow-lg">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white">
              !
            </span>
            {error}
          </div>
        )}

        {/* Statistics */}
        <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Employees */}
          <div className="rounded-[20px] border border-white/20 bg-[#0755b8] p-7 shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                  Total Employees
                </p>
                <h2 className="mt-3 text-5xl font-black tracking-tight text-white">
                  {employees.length}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                👥
              </div>
            </div>

            <div className="mt-6 h-px bg-white/20" />

            <p className="mt-3 text-sm font-medium text-blue-200">
              Active employee records
            </p>
          </div>

          {/* Departments */}
          <div className="rounded-[20px] border border-white/20 bg-[#0755b8] p-7 shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                  Departments
                </p>
                <h2 className="mt-3 text-5xl font-black tracking-tight text-white">
                  {departmentCount}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                🏢
              </div>
            </div>

            <div className="mt-6 h-px bg-white/20" />

            <p className="mt-3 text-sm font-medium text-blue-200">
              Across the organization
            </p>
          </div>

          {/* Average Salary */}
          <div className="rounded-[20px] border border-white/20 bg-[#0755b8] p-7 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                  Average Salary
                </p>
                <h2 className="mt-3 truncate text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {averageSalary}
                </h2>
              </div>

              <div className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                ₹
              </div>
            </div>

            <div className="mt-6 h-px bg-white/20" />

            <p className="mt-3 text-sm font-medium text-blue-200">
              Based on current employees
            </p>
          </div>
        </section>

        {/* Employee Section */}
        <section className="overflow-hidden rounded-[24px] bg-white shadow-2xl">
          {/* Section header */}
          <div className="flex flex-col gap-5 border-b border-slate-200 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">
                  Employees
                </h2>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                  {filteredEmployees.length}
                </span>
              </div>

              <p className="mt-1 text-base font-medium text-slate-500">
                {filteredEmployees.length === 1
                  ? "employee displayed"
                  : "employees displayed"}
              </p>
            </div>

            <div className="w-full lg:max-w-[420px]">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

                <p className="mt-5 text-base font-semibold text-slate-500">
                  Loading employees...
                </p>
              </div>
            ) : (
              <EmployeeTable
                employees={filteredEmployees}
                onEdit={handleEdit}
                onDelete={setDeletingEmployee}
                sortConfig={sortConfig}
                onSort={handleSort}
              />
            )}
          </div>
        </section>
      </main>

      {/* Add / Edit Modal */}
      {showForm && (
        <EmployeeForm
          employee={editingEmployee}
          onSubmit={handleSubmit}
          onCancel={closeForm}
        />
      )}

      {/* Delete Modal */}
      {deletingEmployee && (
        <DeleteModal
          employee={deletingEmployee}
          onConfirm={handleDelete}
          onCancel={() => setDeletingEmployee(null)}
          deleting={deleting}
        />
      )}
    </div>
  );
}

export default Dashboard;