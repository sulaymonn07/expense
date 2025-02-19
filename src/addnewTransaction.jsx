import React, { useContext, useState } from 'react'
import { GlobalContext } from './components/contexts/globalContext'

const AddNewTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const {setTransactions, transactions} = useContext(GlobalContext)

    const addTransaction = () => {
        const transaction = {
            text: text,
            amount: +amount
        }
        console.log(transaction);
        
        setTransactions([...transactions, transaction]);

    }

  return (
   <>
     <div className="add-new-transaction">
          <h2>Add New Transaction</h2>
          <form action="#">
            <div className="form-input">
              <laber htmlFor="text">Text</laber>
              <input onChange={(e) => setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
            </div>
            <div className="form-input">
              <laber htmlFor="text">Amount (+ income, - expense)</laber>
              <input onChange={(e) => setAmount(e.target.value)} type="number" id="text" placeholder="Enter amount..." />
            </div>

            <button onClick={addTransaction} className="btn">Add Transaction</button>
          </form>
        </div>
   </>
  )
}

export default AddNewTransaction