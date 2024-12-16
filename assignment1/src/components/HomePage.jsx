import React from 'react'
import './HomePage.css';
import clientDatabiz from '../images/clientDatabiz.svg';
import clientAudiophile from '../images/clientAudiophile.svg';
import clientMaker from '../images/clientMaker.svg';
import clientMeet from '../images/clientMeet.svg';
import imageHeroDesktop from '../images/imageHeroDesktop.png';

const HomePage = () => {
  return (
    <div className='homepage'>
        <div className='column1'>
            <h1>Make<br/> remote work</h1>
            <p>
                Get your team in sync, no matter the location.
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
       <img src={imageHeroDesktop}/>
        </div>
        
    </div>
  )
}

export default HomePage