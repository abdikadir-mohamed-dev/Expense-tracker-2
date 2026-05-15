const TransactionsTable = ({ transactions, onDelete }) => {
  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'failed': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleDetails = (tx) => {
    alert(`
      --- TRANSACTION DETAILS ---
      ID: ${tx.id}
      Entity: ${tx.entity}
      Description: ${tx.description}
      Category: ${tx.category}
      Amount: $${Number(tx.amount).toLocaleString()}
      Date: ${tx.date}
      Status: ${tx.status}
    `);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-500 font-bold border-b border-gray-200 uppercase text-[10px] tracking-widest">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Entity</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4 text-center">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-gray-50/80 transition-colors group">
              <td className="px-6 py-4 font-mono text-[10px] text-gray-400 uppercase">{tx.id}</td>
              <td className="px-6 py-4 text-gray-600 font-medium">{tx.date}</td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">{tx.entity}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-bold">{tx.category}</span>
                </div>
              </td>
              <td className={`px-6 py-4 font-bold ${tx.type === 'expense' ? 'text-red-600' : 'text-green-600'}`}>
                {tx.type === 'expense' ? '-' : '+'}Ksh{Number(tx.amount).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black border uppercase tracking-tighter ${getStatusStyles(tx.status)}`}>
                  {tx.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-4">
                  <button 
                    onClick={() => handleDetails(tx)}
                    className="text-gray-400 hover:text-black font-bold text-xs transition-colors"
                  >
                    DETAILS
                  </button>
                  <button 
                    onClick={() => onDelete(tx.id)}
                    className="text-red-300 hover:text-red-600 font-bold text-xs transition-colors"
                  >
                    DELETE
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;