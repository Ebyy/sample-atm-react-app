import { useState } from 'react'
import atmLogo from './assets/atm_sign.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  // const [accessPIN, setAccessPIN] = useState({ pin: 123, cardType: 'star' })
  // const [isOpen, setIsOpen] = useState(0)

  //Set up PIN Auth aspect; **AUTH with user PIN entry** and fetch user data
  return (
    <>
      <div className='title'><img src={atmLogo} alt="atm 24 hour banking" /></div>
      <div className="card">

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