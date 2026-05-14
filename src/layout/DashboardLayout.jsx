import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Wallet, Tag, ArrowLeftRight, User, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home",         to: "/dashboard",              icon: LayoutDashboard },
  { label: "Wallets",      to: "/dashboard/wallets",      icon: Wallet },
  { label: "Categories",   to: "/dashboard/categories",   icon: Tag },
  { label: "Transactions", to: "/dashboard/transactions", icon: ArrowLeftRight },
  { label: "Profile",      to: "/dashboard/profile",      icon: User },
];

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {open && <div className="fixed inset-0 bg-black/30 z-20 md:hidden" onClick={() => setOpen(false)} />}

      <aside className={`fixed md:static z-30 h-full w-60 bg-white border-r border-gray-200 flex flex-col py-6 px-4 transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex items-center gap-3 px-2 mb-6">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Wallet size={18} className="text-white" />
          </div>
          <span className="text-base font-semibold text-gray-800">ExpenseTracker</span>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-950 px-2 mb-2">Overview</p>

        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/dashboard"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button onClick={() => setOpen(true)} className="text-gray-500"><Menu size={20} /></button>
          <span className="text-sm font-semibold text-gray-700">ExpenseTracker</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6"><Outlet /></main>
      </div>
    </div>
  );
}
