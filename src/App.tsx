import atmLogo from './assets/atm_sign.png'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserAuth from './UserAuth'
import Home from './Home'
import { useSelector } from 'react-redux'
import { isValidUser } from './store/reducer'
import { useEffect } from 'react'
import { BalancePage, DepositPage, WithdrawalPage, } from './UserActions'


function App() {
  // const [accessPIN, setAccessPIN] = useState({ pin: 123, cardType: 'star' })
  // const [isOpen, setIsOpen] = useState(0)

  //Set up PIN Auth aspect; **AUTH with user PIN entry** and fetch user data

  const isAuthenticated = useSelector(isValidUser);

  return (
    <>
      <div className='content'><img src={atmLogo} alt="atm 24 hour banking" />
        <div className="card">
          <Routes>
            <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/auth"} />} />
            <Route path="/auth" element={<UserAuth />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to={"/auth"} />} />
            <Route path="/deposit" element={isAuthenticated ? <DepositPage /> : <Navigate to={"/auth"} />} />
            <Route path="/withdraw" element={isAuthenticated ? <WithdrawalPage /> : <Navigate to={"/auth"} />} />
            <Route path="/balance" element={isAuthenticated ? <BalancePage /> : <Navigate to={"/auth"} />} />
          </Routes>
        </div></div>
    </>
  )
}

export default App