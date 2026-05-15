import { useState } from 'react';
import TransactionsTable from './TransactionsTable';

function Transactions({ transactions, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Filter logic: Search by entity name or category
  const filtered = transactions.filter(tx => 
    tx.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Calculate summary total
  const totalAmount = filtered.reduce((acc, tx) => acc + Number(tx.amount), 0);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Transaction History</h1>
          <p className="text-sm text-gray-500">Manage and track your recent financial activity.</p>
        </div>
        
        <div className="relative w-full md:w-80">
          <input 
            type="text"
            placeholder="Search by store or category..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black shadow-sm bg-white transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Filtered Total</p>
          <p className="text-3xl font-black text-gray-900 mt-1">
            Ksh{totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Transactions Found</p>
          <p className="text-3xl font-black text-gray-900 mt-1">
            {filtered.length} <span className="text-sm font-normal text-gray-400">Records</span>
          </p>
        </div>
      </div>

      {/* The Table Component */}
      <TransactionsTable transactions={filtered} onDelete={onDelete} />

      {filtered.length === 0 && (
        <div className="py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed">
          <p className="text-gray-400 font-medium italic">No transactions match your search.</p>
        </div>
      )}
    </div>
  );
}

export default Transactions;