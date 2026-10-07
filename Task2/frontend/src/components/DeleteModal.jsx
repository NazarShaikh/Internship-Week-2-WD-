function DeleteModal({ employee, onConfirm, onCancel, deleting }) {
if (!employee) {
return null;
}

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur-sm">
<div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
{/* Warning Icon */}
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600">
!
</div>
{/* Heading */}
<h2 className="text-xl font-bold text-slate-900">
Delete Employee?
</h2>
{/* Description */}
<p className="mt-2 text-sm leading-6 text-slate-500">
Are you sure you want to delete{" "}
<strong className="font-semibold text-slate-800">
{employee.name}
</strong>
?
</p>
{/* Warning */}
<div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
<p className="text-sm font-medium text-red-600">
This action cannot be undone.
</p>
</div>
{/* Actions */}
<div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
<button
type="button"
className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
onClick={onCancel}
disabled={deleting}
>
Cancel
</button>
<button
type="button"
className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:opacity-50"
onClick={onConfirm}
disabled={deleting}
>
{deleting ? "Deleting..." : "Delete"}
</button>
</div>
</div>
</div>
);
}
export default DeleteModal;