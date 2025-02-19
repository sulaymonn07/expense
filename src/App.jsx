import AddNewTransaction from "./addnewTransaction";
import "./App.css";
import Balance from "./components/balance";
import Expense from "./components/expense";
import History from "./components/history";
import Income from "./components/income";
function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Expens Tracker</h1>
        <Balance />
        <div className="income-expense">
          <Income />
          <Expense />
        </div>
        <div className="history-container">
          <History />
        </div>

       <AddNewTransaction />
      </div>
    </>
  );
}

export default App;
