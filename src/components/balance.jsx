import { useContext } from "react";
import { GlobalContext } from "./contexts/globalContext";

const Balance = () => {
    const {balance} =useContext(GlobalContext)
  return (
    <>
      <div className="balance-container">
        <span className="balance-title">Your Balace</span>
        <span className="balance-amount">${balance}</span>
      </div>
    </>
  );
};

export default Balance;
