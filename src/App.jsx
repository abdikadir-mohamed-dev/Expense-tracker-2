// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// }
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./pages/Form";
import Transactions from "./pages/Transactions";
function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            FINANCE<span className="text-gray-400">HUB</span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-sm hover:text-gray-300">History</Link>
            <Link to="/add" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-all">
              + New Transaction
            </Link>
          </div>
        </nav>

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Transactions transactions={expenses} />} />
            <Route path="/add" element={<Form onAddExpense={addExpense} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;