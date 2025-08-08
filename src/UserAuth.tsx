import { useEffect, useState } from "react"
import { bankAccounts } from "./mockData"
import { loginUser } from "./store/reducer"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function UserAuth() {
    const [accessPIN, setAccessPIN] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        const userAccount = bankAccounts.find(item => item.accountId === accessPIN)
        if (userAccount) {
            dispatch(loginUser(userAccount))
            navigate("/home")
        }
    }, [accessPIN])
    return (<>
        <div className="user-auth">
            <input type="text"
                placeholder="Please enter your 4 digit PIN here"
                inputMode="numeric" pattern="[0-9]*"
                onChange={(e) => setAccessPIN(parseInt(e.target.value))} />
        </div>

    </>)
}
export default UserAuth

