import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <h1 className="title">Expens Tracker</h1>
      <div className="balance-container">
      <span className="balance-title">Your Balace</span>
      <span className="balance-amount">$0.00</span>
      </div>
      <div className="income-expense">
        <div className="income">
          <span className="income-title">INCOME</span>
          <span className="income-amount">$0.00</span>
        </div>
        <div className="expense">
          <span className="expense-title">EXPENSE</span>
          <span className="expense-amount">$0.00</span>
        </div>
      </div>
      <div className="history-container">
        <h2>History</h2>
        <div className="no-transaction">
          <p>No transaction</p>
        </div>
      </div>

      <div className="add-new-transaction">
        <h2>Add New Transaction</h2>
        <form action="#">
            <div className="form-input">
              <laber htmlFor="text">Text</laber>
              <input type="text" id="text" placeholder="Enter text..." />
            </div>
            <div className="form-input">
              <laber htmlFor="text">Amount (+ income, - expense)</laber>
              <input type="number" id="text" placeholder="Enter amount..." /> 
            </div>

            <button className="btn">Add Transaction</button>
        </form>
      </div>


      </div>      
    </>
  )
}

export default App
