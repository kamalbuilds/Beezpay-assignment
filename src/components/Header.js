import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import icon from './images/icon.png';

function Header() {    
    return (
        <div className="header">
            <Link to="/">
                <img alt="Beezhive icon" src={icon} className='logo' />
                
            </Link>
            <div className="header__search">
                <h2>Beezpay Plus</h2>
                <h3>The Beezhive Product</h3>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <h2>
                        About
                    </h2>
                </div>
                <div className="header__option">
                    <h2>
                        Reward
                    </h2>
                </div>
                <div className="header__option">
                    <h2>
                       Blog 
                    </h2>
                </div>
                <div className="header__option">
                    <h2>
                       Register
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default Header
