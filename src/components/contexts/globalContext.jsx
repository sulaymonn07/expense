import { createContext, useState } from "react"

const data ={
    balance: 0,
    income: 0,
    expense: 0,
    transaction: [],
}

const GlobalContext = createContext(data)

const GlobalProvider = ({children}) => {
    const [balance, setBalance] = useState(15);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState([]);

    return(
        <GlobalContext.Provider
        value={{
            transactions, setTransactions, balance,
            setBalance, income, setIncome, expense, setExpense,
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalProvider}