import { useState } from 'react'
import creditCardLogo from './assets/creditcard_sprite.png'
import atmLogo from './assets/atm_sign.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //Set up PIN Auth aspect; **AUTH with user PIN entry** and fetch user data
  //Handle deposit
  //Handle Withdrawal
  //Handle Balance check


  return (
    <>
      <img src={atmLogo} alt="" />
      <div className="card">
        <div className='options-card'>
          <p>Welcome, User!</p>
          <p>Please make a choice...</p>
          <div className='list-options'>
            <div className='list-options-left'>
              <div><button></button><span></span></div>
              <div><button></button><span></span></div>
              <div><button></button><span>Withdraw</span> </div>
              <div><button></button><span>Deposit</span></div>
            </div>
            <div className='list-options-right'>
              <div></div>
              <div><span>Exit</span><button></button></div>
              <div><span>Balance</span><button></button></div>
              <div><span>PIN</span><button></button></div>
            </div>
          </div>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="footer">
        Systems
      </p>
    </>
  )
}

export default App