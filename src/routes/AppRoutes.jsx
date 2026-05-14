import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Landing from "../pages/Landing";

const Home         = React.lazy(() => import("../pages/Home"));
const Wallets      = React.lazy(() => import("../pages/Wallets"));
const Categories   = React.lazy(() => import("../pages/Categories"));
const Transactions = React.lazy(() => import("../pages/Transactions"));
const Profile      = React.lazy(() => import("../pages/Profile"));

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<div className="flex h-screen items-center justify-center text-gray-400 animate-pulse">Loading…</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index                   element={<Home />} />
          <Route path="wallets"          element={<Wallets />} />
          <Route path="categories"       element={<Categories />} />
          <Route path="transactions"     element={<Transactions />} />
          <Route path="profile"          element={<Profile />} />
        </Route>
        <Route path="*" element={<div className="flex h-screen items-center justify-center text-gray-500">404 — Page not found</div>} />
      </Routes>
    </React.Suspense>
  );
}