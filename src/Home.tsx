import creditCardLogo from './assets/creditcard_sprite.png'
import { getCardType, getUser } from './store/reducer'
import { useSelector } from 'react-redux'
import sticker from './assets/sticker_graf.png'
import { CardActionButtons } from './CardActionButtons'
import React, { createRef, useEffect, useRef } from 'react'

const Home = () => {
    const user = useSelector(getUser)
    const clientCard = useSelector(getCardType)

    const CardImageRef = useRef<HTMLImageElement>(null)
    // useEffect(() => {
    //     if (clientCard) { CardImageRef.current?.blur() }
    // }, [])

    return (<>
        <div className='card-types'><img ref={CardImageRef} src={creditCardLogo} alt="credit card types" /></div>
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

            <div className="footer-text">SYSTEMS</div>
        </div>
    </>)
}

export default Home