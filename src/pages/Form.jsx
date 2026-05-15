import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ onAddExpense }) { 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    entity: '', description: '', category: 'Shopping', amount: '', date: '', status: 'Completed', type: 'expense'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTx = { 
      ...formData, 
      id: `TXN-${Math.floor(100000 + Math.random() * 900000)}` // Random 6-digit ID
    };
    onAddExpense(newTx); 
    navigate("/"); // Send user back to the history table
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-gray-200 shadow-xl mt-10">
      <h2 className="text-2xl font-black mb-1">New Transaction</h2>
      <p className="text-gray-400 text-sm mb-8">Fill in the details to record your payment.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block ml-1">Entity / Store</label>
          <input 
            type="text" placeholder="e.g. Amazon, Netflix, Apple" required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none transition-all"
            value={formData.entity} onChange={(e) => setFormData({...formData, entity: e.target.value})}
          />
        </div>

        <div>
          <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block ml-1">Description</label>
          <input 
            type="text" placeholder="What was this for?" required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:bg-white outline-none transition-all"
            value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block ml-1">Category</label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
              value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="Shopping">Shopping</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transport">Transport</option>
              <option value="Software">Software</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block ml-1">Status</label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
              value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block ml-1">Amount ($)</label>
            <input
              type="number" step="0.01" placeholder="0.00" required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
              value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block ml-1">Date</label>
            <input
              type="date" required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
              value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
        </div>

        <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold hover:shadow-lg active:scale-95 transition-all mt-4">
          Save Transaction
        </button>
      </form>
    </div>
  );
}

export default Form;