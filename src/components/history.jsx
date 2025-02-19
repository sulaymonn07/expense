import { useContext } from "react";
import { GlobalContext } from "./contexts/globalContext"
import Transaction from "./transaction";


const History = () => {
  const {transactions} = useContext(GlobalContext)

  console.log(transactions);
  

  return (
    <>
        <div className="history-container">
          <h2>History</h2>
          <div className="transaction-container">
            {transactions.map((t) => {
              return <Transaction text={t.text} amount={t.amount} />
            })}
          </div>
            {transactions.length === 0 && (
          <div className="no-transaction">
            <p>No transaction</p>
          </div>
            )}
        </div>
    </>
  )
}

export default History