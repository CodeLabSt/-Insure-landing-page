import React from 'react'

import '../assets/styles/Banner.css'

import IntroDesktopImg from '../assets/images/image-intro-desktop.jpg'
import BgRightDesktopImg from '../assets/images/bg-pattern-intro-right-desktop.svg'
import BgLeftDesktopImg from '../assets/images/bg-pattern-intro-left-desktop.svg'
import BgRightMovilImg from '../assets/images/bg-pattern-intro-right-mobile.svg'
import BgLeftMovilImg from '../assets/images/bg-pattern-intro-left-mobile.svg'

const Banner = props => {
    return (
        <div className='banner'>
            <img id='img-bg-right' src={BgRightDesktopImg} alt='bg-right' />
            <img id='img-bg-left' src={BgLeftDesktopImg} alt='bg-left' />
            <div className='contText'>
                <div className='divider' />
                <img src={BgLeftMovilImg} alt='bg-movil-left' />
                <img src={BgRightMovilImg} alt='bg-movil-left' />
                <h1>Humanizing<br/>your insurance.</h1>
                <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plant that's right you for you. Ensure you and your loved ones are protected</p>
                <button>VIEW PLANS</button>
            </div>
            <div className='contIntro'>
                <img src={IntroDesktopImg} alt='intro' />
            </div>
        </div>
    )
}

export default Banner