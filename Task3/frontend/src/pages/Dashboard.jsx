import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  logoutUser
} from "../services/authService";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data.user);
      } catch (error) {
        logoutUser();
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-neutral-800 border-t-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.25)]" />
          <p className="mt-5 text-sm font-medium text-neutral-400">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      {/* NAVBAR */}
      <nav className="relative border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 font-black text-neutral-950 shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition duration-300 hover:scale-105 hover:rotate-3">
              A
            </div>
            <div>
              <h1 className="font-bold tracking-wide text-white">
                Auth Portal
              </h1>
              <p className="text-xs text-neutral-500">
                Secure Dashboard
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-neutral-300 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300 hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN */}
      <main className="relative mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
            Dashboard
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Welcome,{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              {user?.username}
            </span>
          </h2>
          <p className="mt-3 text-neutral-400">
            You have successfully authenticated.
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Username */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-neutral-500">
                Username
              </p>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                @
              </div>
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">
              {user?.username}
            </h3>
          </div>

          {/* Email */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-teal-400/20 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-neutral-500">
                Email
              </p>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400">
                @
              </div>
            </div>
            <h3 className="mt-5 break-all text-lg font-bold text-white">
              {user?.email}
            </h3>
          </div>

          {/* Authentication */}
          <div className="group rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.07] hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-neutral-500">
                Authentication
              </p>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                ✓
              </div>
            </div>
            <h3 className="mt-5 flex items-center gap-2 text-xl font-bold text-emerald-400">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Verified
            </h3>
          </div>
        </div>

        {/* SUCCESS CARD */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-emerald-400/10 bg-gradient-to-br from-emerald-950/50 to-teal-950/30 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-xl font-bold text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.12)]">
              ✓
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">
              Authentication Successful
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-400">
              This is a protected dashboard. Your JWT token was verified by
              the backend before your account information was returned.
            </p>

            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Session Active
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;