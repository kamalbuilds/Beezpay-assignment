import React from 'react'
import './Landing.css'
import man1 from './images/man1.png'
import falcon from './images/falcon.svg'
import dot from './images/dot.svg'
import bar from './images/bar.png'
import card from './images/card.png'
import beez from './images/beez.png'
import Login from './Login';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="home">
            <div className="man">
                <img src={dot} alt="dots" width="200px" className='dots' />
                <div className='jk'>
                    <h1 className='h'>We Completely<br/> <span style={{color: 'yellow'}}>Reimagined</span> Everything <br/>About Credit Cards.</h1>
                    <img src={bar} alt="bar" className='bar'/>
                    <img src={card} alt="card" className='card'/>
                    <h2 className='join'>Join Waitlist Now</h2>
                    <Link to="/Login">
                        <button className='bn'>Join Now</button>
                    </Link>
                    
                    <img src={beez} alt="beez" className='beez'/>
                </div>
                
                <img src={man1} alt="man" height="600px"  className='man' />
                <img src={falcon} alt="falcon" />
            </div>
        </div>
        
    )
}
export default Landing
