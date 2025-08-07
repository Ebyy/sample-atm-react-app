import { useState } from "react"
import { checkBalance, runDepositTask, runWithdrawTask } from "./store/reducer"
import { useDispatch, useSelector } from "react-redux"
import store from "./store/store"
import { useNavigate } from "react-router-dom"

export const DepositPage = () => {
    const [depositAmount, setDepositAmount] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDepositClick = () => {
        console.log('prevSTATE// ==> ', store.getState())
        dispatch(runDepositTask(depositAmount))
        console.log('newSTATE// ==> ', store.getState())
        navigate("/home")
    }
    return (<>
        <input type="text"
            placeholder="Enter amount to deposit"
            inputMode="numeric" pattern="[0-9]*"
            onChange={(e) => setDepositAmount(parseInt(e.target.value))} />
        <button onClick={handleDepositClick}>Submit</button></>)
}

export const WithdrawalPage = () => {
    const [cashToWithdraw, setCashToWithdraw] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleWithdrawalClick = () => {
        console.log('oldSTATE// ==> ', store.getState())
        dispatch(runWithdrawTask(cashToWithdraw))
        console.log('newSTATE// ==> ', store.getState())
        navigate("/home")
    }
    return (<>
        <input type="text"
            placeholder="Enter amount to withdraw"
            inputMode="numeric" pattern="[0-9]*"
            onChange={(e) => setCashToWithdraw(parseInt(e.target.value))} />
        <button onClick={handleWithdrawalClick}>Submit</button></>)
}

export const BalancePage = () => {
    const userAccountBalance = useSelector(checkBalance)
    const navigate = useNavigate()
    return (<><div className="account-balance"><h1>{userAccountBalance}</h1>
        <button onClick={() => navigate("/home")}>Exit</button>
        <div className="container">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
        </div>
    </div>
    </>)
}