import React from 'react'
import { useState } from 'react'

function Wallets() {
    const[wallet,setWallet]=useState({
  WalletType:'',
  amount:'',
  createdAt:''  
})
const[storeWallet,setStoreWallet]=useState([])

  const [showForm, setShowForm] = useState(false);

function handleSubmit(e){
e.preventDefault()
setStoreWallet([...storeWallet,wallet])
// clear form
setWallet({
  WalletType:'',
  amount:'',
  createdAt:''  

})
}

    // form layout
    // wallet layout
  return (
            <>
        
    {/* wallet card */}
<div className='flex gap-6'>
          {!showForm ? (

            <div 
          onClick={() => setShowForm(true)}
          className="relative bg-blue-950/60 border border-blue-800/40 rounded-xl p-6 min-h-40 cursor-pointer hover:bg-blue-950 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-white font-bold text-lg">Add a wallet</h3>
            <p class="text-zinc-400 text-xs mt-1">Click to add a wallet for your transactions</p>
          </div>
        </div>
      ) : (<div className='border-violet-800 bg-gray-300 max-w-xl my-0 mx-auto p-10 rounded-md'>
                <h1>Add Wallet</h1>

        <form className='flex flex-col gap-1 ' onSubmit={handleSubmit}>

            <label htmlFor="wallet">Wallet type</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" type="text" value={wallet.WalletType} id='wallet'onChange={(e)=>setWallet({...wallet,WalletType:e.target.value})}required/>
            <label htmlFor="amount">Amount:</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" 
 type="text" value={wallet.amount} id='amount'onChange={(e)=>setWallet({...wallet,amount:e.target.value})}required/>
            <label htmlFor="date">Created at:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='date' type='text' value={wallet.createdAt} onChange={(e)=>setWallet({...wallet,createdAt:e.target.value})}required/>
            <button className=" border bg-violet-800 rounded-md text-white cursor-pointer m-auto p-3" type='submit'>Add Task</button>
            <button type="button" onClick={() => setShowForm(false)} className=" border bg-violet-800 rounded-md text-white cursor-pointer m-auto p-3" >Cancel</button>
        </form>
      
    </div>
      )}

    {storeWallet.map((Wallet)=>(
    <div className='flex flex-col justify-between p-4 border-black-800 rounded-lg relative w-80'>
        <h2 className='text-blue-500'>{Wallet.WalletType}</h2>
        <p className='font-bold text-2xl'>KES{Wallet.amount}</p>
        <p className='absolute bottom-4 right-4'>{Wallet.createdAt}</p>
    </div>

    ))}
    </div>
      </>

  )
}

export default Wallets
