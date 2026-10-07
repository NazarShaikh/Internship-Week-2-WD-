import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.message) {
      setSuccess(location.state.message);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 px-4 py-10">
      {/* Background glow */}
      <div className="absolute -left-40 -top-40 h-96 w-96 animate-pulse rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-teal-500/20 blur-3xl" />

      {/* Small decorative glow */}
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.55)] lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-neutral-950 via-emerald-950 to-teal-900 p-12 text-white lg:flex lg:flex-col lg:justify-center">
            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-emerald-400/10" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-teal-400/10" />
            <div className="absolute right-20 top-20 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
            <div className="absolute bottom-32 right-32 h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_15px_rgba(94,234,212,0.8)]" />

            <div className="relative">
              {/* Logo */}
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-xl font-black text-neutral-950 shadow-[0_10px_35px_rgba(16,185,129,0.35)] transition duration-500 hover:rotate-6 hover:scale-110">
                  A
                </div>
                <span className="text-xl font-bold tracking-wide text-white drop-shadow-lg">
                  Auth Portal
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
                Welcome
                <br />
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  back.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-emerald-100/80">
                Sign in to access your secure dashboard and manage your
                account with confidence.
              </p>

              {/* Accent line */}
              <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />

              {/* Security message */}
              <div className="mt-10 flex items-center gap-3 text-sm text-emerald-100/70"></div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-8 sm:p-12">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
                Welcome Back
              </p>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 drop-shadow-sm">
                Sign In
              </h2>
              <p className="mt-3 text-neutral-500">
                Enter your credentials to continue.
              </p>
            </div>

            {/* Success message */}
            {success && (
              <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 shadow-sm">
                {success}
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 shadow-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-neutral-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none transition duration-300 placeholder:text-neutral-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 focus:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-neutral-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none transition duration-300 placeholder:text-neutral-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 focus:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-500/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {loading ? "Signing In..." : "Sign In"}
                </span>

                {/* Button shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
              </button>
            </form>

            {/* Register link */}
            <p className="mt-8 text-center text-sm text-neutral-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-emerald-600 transition duration-300 hover:text-teal-600"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;