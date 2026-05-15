function Table({ expenses, searchTerm, onCategoryChange }) {
const filteredExpenses = expenses.filter(exp => 
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  localStorage.setItem("expenses", JSON.stringify(expenses));
  return (

  <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Expense</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Description</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredExpenses.map((expense, index) => (
                  <tr 
                    key={expense.id} 
                    className={`hover:bg-gray-50 transition-colors ${index % 2 !== 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{expense.name}</td>
                    <td className="px-6 py-4 text-gray-600">{expense.description}</td>
                    <td className="px-6 py-4 text-gray-600">
                    <select
                    value={expense.category}
                    onChange={(e) => onCategoryChange(expense.id, e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
                   >
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                  <option value="Rent">Rent</option>
                  <option value="Savings">Savings</option>
                  <option value="Other">Other</option>
                  </select>
                  </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{Number(expense.amount).toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-600">{expense.date}</td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
          </div>
  );
}

export default Table;