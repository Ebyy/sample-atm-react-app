import creditCardLogo from './assets/creditcard_sprite.png'
import { getCardType, getUser } from './store/reducer'
import { useSelector } from 'react-redux'
import sticker from './assets/sticker_graf.png'
import systemsLogo from "./assets/systems.png";
import { CardActionButtons } from './CardActionButtons'
import { CardTypePosition } from './store/type';
import FocusVerticalSlice from './FocusVerticalSlice';

const Home = () => {
    const user = useSelector(getUser)
    const cardType = useSelector(getCardType)

    return (<>
        <div className='card-types'>
            <FocusVerticalSlice
                src={creditCardLogo}
                typeImagePosition={CardTypePosition[cardType]}
                blurPx={10}
                style={{ width: '300px' }}
            />
        </div>
        <CardActionButtons />
        <div className='options-card'>
            <p>Hi {user}!</p>
            <p>Please make a choice...</p>
            <div className='list-options'>
                <div className='list-options-left'>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span>Withdraw</span> </div>
                    <div><span>Deposit</span></div>
                </div>
                <div className='list-options-right'>
                    <div><span></span></div>
                    <div><span>Exit</span></div>
                    <div><span>Balance</span></div>
                    <div><span>Re-Enter PIN</span></div>
                </div>
            </div>
            <img src={sticker} alt="cartoon sticker" /> </div>
        <div className='footer'>

            <div className="footer-text"><img src={systemsLogo} alt='Systems Logo text' /></div>
        </div>
    </>)
}

export default Home