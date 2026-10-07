function EmployeeTable({
  employees,
  onEdit,
  onDelete,
  sortConfig,
  onSort
}) {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(salary);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  const getSortIcon = (field) => {
    if (sortConfig.field !== field) {
      return "↕";
    }

    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  if (employees.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-3xl text-indigo-600">
          ⌕
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          No employees found
        </h3>

        <p className="mt-2 max-w-sm text-base text-slate-500">
          Try changing your search or add a new employee to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th
                onClick={() => onSort("name")}
                className="cursor-pointer px-7 py-5 text-sm font-semibold uppercase tracking-wider text-slate-500 transition hover:text-indigo-600"
              >
                Employee {getSortIcon("name")}
              </th>

              <th
                onClick={() => onSort("department")}
                className="cursor-pointer px-7 py-5 text-sm font-semibold uppercase tracking-wider text-slate-500 transition hover:text-indigo-600"
              >
                Department {getSortIcon("department")}
              </th>

              <th
                onClick={() => onSort("role")}
                className="cursor-pointer px-7 py-5 text-sm font-semibold uppercase tracking-wider text-slate-500 transition hover:text-indigo-600"
              >
                Role {getSortIcon("role")}
              </th>

              <th
                onClick={() => onSort("salary")}
                className="cursor-pointer px-7 py-5 text-sm font-semibold uppercase tracking-wider text-slate-500 transition hover:text-indigo-600"
              >
                Salary {getSortIcon("salary")}
              </th>

              <th
                onClick={() => onSort("joinDate")}
                className="cursor-pointer px-7 py-5 text-sm font-semibold uppercase tracking-wider text-slate-500 transition hover:text-indigo-600"
              >
                Joining Date {getSortIcon("joinDate")}
              </th>

              <th className="px-7 py-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {employees.map((employee) => (
              <tr
                key={employee._id}
                className="transition-colors hover:bg-slate-50/80"
              >
                {/* Employee */}
                <td className="px-7 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-base font-bold text-indigo-700">
                      {employee.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-slate-900">
                        {employee.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Employee
                      </p>
                    </div>
                  </div>
                </td>

                {/* Department */}
                <td className="px-7 py-6">
                  <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                    {employee.department}
                  </span>
                </td>

                {/* Role */}
                <td className="px-7 py-6 text-base font-medium text-slate-700">
                  {employee.role}
                </td>

                {/* Salary */}
                <td className="px-7 py-6">
                  <span className="text-base font-semibold text-slate-900">
                    {formatSalary(employee.salary)}
                  </span>
                </td>

                {/* Joining Date */}
                <td className="px-7 py-6 text-base text-slate-600">
                  {formatDate(employee.joinDate)}
                </td>

                {/* Actions */}
                <td className="px-7 py-6">
                  <div className="flex items-center gap-3">
                    <button
                      className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-100"
                      onClick={() => onEdit(employee)}
                      title="Edit employee"
                    >
                      Edit
                    </button>

                    <button
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                      onClick={() => onDelete(employee)}
                      title="Delete employee"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;