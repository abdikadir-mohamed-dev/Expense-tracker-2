import React from 'react'
import { useState } from 'react';
function Transactions() {
const[transaction,setTransaction]=useState({
    Id:'',
    Amount:'',
    Description:'',
    Category:'',
    Wallet:'',
    Date:'',
    CreatedAt:''
})
const[storeTransactions,setStoreTransactions]=useState([])
  const [showForm, setShowForm] = useState(false);


function handleSubmit(e){
e.preventDefault()
// store form data
setStoreTransactions([...storeTransactions,transaction])
// clear the form
setTransaction({
     Id:'',
    Amount:'',
    Description:'',
    Category:'',
    Wallet:'',
    Date:'',
    CreatedAt:''
 
})
}

  return (
    <>
    <div className='flex flex-col gap-4'>
    </div>
              {!showForm ? (
                <div 
          onClick={() => setShowForm(true)}
          className="relative bg-blue-950/60 border border-blue-800/40 rounded-xl p-6 min-h-40 cursor-pointer hover:bg-blue-950 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-white font-bold text-lg">Add a transaction</h3>
            <p class="text-zinc-400 text-xs mt-1">Click to add a transaction</p>
          </div>
        </div>
              ):(
        <div className='border-violet-800 bg-gray-300 max-w-xl my-0 mx-auto p-10 rounded-md'>
                <h1>Add Wallet</h1>

        <form className='flex flex-col gap-1 ' onSubmit={handleSubmit}>

            <label htmlFor="ID">Id</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" type="text" value={transaction.Id} id='ID'onChange={(e)=>setTransaction({...transaction,Id:e.target.value})}required/>
            <label htmlFor="amount">Amount:</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" type="text" value={transaction.Amount} id='amount'onChange={(e)=>setTransaction({...transaction,Amount:e.target.value})}required/>
            <label htmlFor="description">Description:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='description' type='text' value={transaction.Description} onChange={(e)=>setTransaction({...transaction,Description:e.target.value})}required/>
            <label htmlFor="category">Category:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='category' type='text' value={transaction.Category} onChange={(e)=>setTransaction({...transaction,Category:e.target.value})}required/>
            <label htmlFor="wallet">Wallet:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='wallet' type='text' value={transaction.Wallet} onChange={(e)=>setTransaction({...transaction,Wallet:e.target.value})}required/>
            <label htmlFor="date">Date:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='date' type='text' value={transaction.Date} onChange={(e)=>setTransaction({...transaction,Date:e.target.value})}required/>
            <label htmlFor="at">CreatedAt:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='at' type='text' value={transaction.CreatedAt} onChange={(e)=>setTransaction({...transaction,CreatedAt:e.target.value})}required/>


            <button className=" border bg-violet-800 rounded-md text-white cursor-pointer m-auto p-3" type='submit'>Add Task</button>
            <button type="button" onClick={() => setShowForm(false)} className=" border bg-violet-800 rounded-md text-white cursor-pointer m-auto p-3" >Cancel</button>
        </form>
      
    </div>

              )}
        <div>
                  <div className='border-violet-800 bg-gray-300 max-w-3xl my-10 mx-auto p-5 rounded-md'>
      <table>
        <thead>
            <tr >
                <th className='text-left  border-b p-6'>Id</th>
                <th className='text-left  border-b p-6'>Amount</th>
                <th className='text-left  border-b p-6'>Description</th>
                <th className='text-left  border-b p-6'>Category</th>
                <th className='text-left  border-b p-6'>Wallet</th>
                <th className='text-left  border-b p-6'>Date</th>
                <th className='text-left  border-b p-6'>CreatedAt</th>

            </tr>
        </thead>
                <tbody>
              
         {storeTransactions.map((Transaction)=>(
            <tr key={Transaction.Id}>
                <td className='border-b p-4'>{Transaction.Id}</td>
                <td className='border-b p-4'>{Transaction.Amount}</td>
                <td className='border-b p-4'>{Transaction.Description}</td>
                <td className='border-b p-4'>{Transaction.Category}</td>
                <td className='border-b p-4'>{Transaction.Wallet}</td>
                <td className='border-b p-4'>{Transaction.Date}</td>
                <td className='border-b p-4'>{Transaction.CreatedAt}</td>

            </tr>
))}
              
        </tbody>
      </table>
            </div>

    </div>

    </>
  )
}

export default Transactions
