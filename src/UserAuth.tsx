import { useState } from "react"
import { bankAccounts } from "./mockData"
import { getUserAccountTask } from "./store/reducer"
import store from "./store/store"
import { useDispatch } from "react-redux"

function UserAuth() {
    const [accessPIN, setAccessPIN] = useState(0)
    const dispatch = useDispatch()

    const handleAuthSubmit = () => {
        if (accessPIN) {
            const userAccount = bankAccounts.find(item => item.accountId === accessPIN)
            console.log('prevSTATE ==> ', store.getState())
            dispatch(getUserAccountTask(userAccount))
            console.log('newSTATE ==> ', store.getState())
        }
    }

    return (<>
        <div className="user-auth">
            <input type="number"
                placeholder="Please enter your 4 digit PIN here"
                maxLength={3}
                onChange={(e) => setAccessPIN(parseInt(e.target.value))} />
            <button onClick={handleAuthSubmit}>Enter</button>
        </div>

    </>)
}
export default UserAuth

