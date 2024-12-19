import React from 'react'
import './HomePage.css';
import clientDatabiz from '../images/clientDatabiz.svg';
import clientAudiophile from '../images/clientAudiophile.svg';
import clientMaker from '../images/clientMaker.svg';
import clientMeet from '../images/clientMeet.svg';


const HomePage = () => {
  return (
    <div className='homepage'>
        <div className='column1'>
            <h1>Make remote work</h1>
            <p>
                Get your team in sync, no matter your location.
                Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
            <div className='footer'>
                <ul>
                    <li><img src={clientDatabiz}/></li>
                    <li><img src={clientAudiophile}/></li>
                    <li><img src={clientMeet}/></li>
                    <li><img src={clientMaker}/></li>
                </ul>
            </div>

        </div>


        <div className='column2'>
            <div className='hero'>
            
            </div>
       
        </div>
        
    </div>
  )
}

export default HomePage