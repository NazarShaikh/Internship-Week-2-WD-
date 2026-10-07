function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-sm">
            E
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              EmployeeHub
            </h1>
            <p className="text-xs font-medium text-slate-500">
              Employee Management System
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 sm:flex">
          Dashboard
        </div>

      </div>
    </nav>
  );
}

export default Navbar;