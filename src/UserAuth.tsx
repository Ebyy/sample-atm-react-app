import React, { createContext, useEffect, useState } from "react"
import { bankAccounts } from "./mockData"
import { getUserAccountTask, loginUser } from "./store/reducer"
import store from "./store/store"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function UserAuth() {
    const [accessPIN, setAccessPIN] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {

        const userAccount = bankAccounts.find(item => item.accountId === accessPIN)
        if (userAccount) {
            console.log('prevSTATE ==> ', store.getState())
            dispatch(loginUser(userAccount))
            navigate("/home")
            console.log('newSTATE ==> ', store.getState())
        }
    }, [accessPIN])
    return (<>
        <div className="user-auth">
            <input type="text"
                placeholder="Please enter your 4 digit PIN here"
                inputMode="numeric" pattern="[0-9]*"
                onChange={(e) => setAccessPIN(parseInt(e.target.value))} />
            {/* <button onClick={handleSubmit}>Enter</button> */}
        </div>

    </>)
}
export default UserAuth

