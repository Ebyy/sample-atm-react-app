import creditCardLogo from './assets/creditcard_sprite.png'
import { bankAccounts } from './mockData'
import { checkBalance, getUserAccountTask, runDepositTask, runExitTask, runWithdrawTask } from './store/reducer'
import store from './store/store'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const bal = useSelector(checkBalance)
    // const [isOpen, setIsOpen] = useState(0)

    const dispatch = useDispatch();
    const handlePINClick = (uniqueId: number) => {
        const userAccount = bankAccounts.find(item => item.accountId === uniqueId)
        console.log('prevSTATE ==> ', store.getState())
        dispatch(getUserAccountTask(userAccount))

        console.log('newSTATE ==> ', store.getState())
    }
    const handleBalanceClick = () => {
        console.log('newSTATE// ==> ', store.getState())
        console.log('balance// ==> ', bal)
    }

    const handleWithdrawalClick = (num: number) => {
        console.log('oldSTATE// ==> ', store.getState())
        dispatch(runWithdrawTask(num))
        console.log('newSTATE// ==> ', store.getState())
    }
    const handleDepositClick = (num: number) => {
        console.log('prevSTATE// ==> ', store.getState())
        dispatch(runDepositTask(num))
        console.log('newSTATE// ==> ', store.getState())
    }
    const handleExitClick = () => {
        console.log('prev* ==> ', store.getState())
        dispatch(runExitTask())
        console.log('new* ==> ', store.getState())
    }
    return (<>
        <div className='card-types'><img src={creditCardLogo} alt="credit card types" /></div>
        <div className='options-card'>
            <p>Welcome, User!</p>
            <p>Please make a choice...</p>
            <div className='list-options'>
                <div className='list-options-left'>
                    <div><button></button><span></span></div>
                    <div><button></button><span></span></div>
                    <div><button onClick={() => handleWithdrawalClick(20)}></button><span>Withdraw</span> </div>
                    <div><button onClick={() => handleDepositClick(50)}></button><span>Deposit</span></div>
                </div>
                <div className='list-options-right'>
                    <div><span></span><button></button></div>
                    <div><span>Exit</span><button onClick={handleExitClick}></button></div>
                    <div><span>Balance</span><button onClick={handleBalanceClick}></button></div>
                    <div><span>PIN</span><button onClick={() => handlePINClick(1023)}></button></div>
                </div>
            </div>
        </div>
    </>)
}