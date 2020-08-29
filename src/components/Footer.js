import React from 'react'

import '../assets/styles/Footer.css'

import BgFooterImg from '../assets/images/bg-pattern-footer-desktop.svg'
import FacebookIcon from '../assets/images/icon-facebook.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'
import PinterestIcon from '../assets/images/icon-pinterest.svg'
import InstagramIcon from '../assets/images/icon-instagram.svg'

const Footer = props => {
    return (
        <footer>
            <img src={BgFooterImg} alt='bg-footer' />
            <div className='social'>
                <div>
                    <b>INSURE</b>
                </div>
                <div>
                    <img src={FacebookIcon} alt='facebook' />
                    <img src={TwitterIcon} alt='twitter' />
                    <img src={PinterestIcon} alt='pinterest' />
                    <img src={InstagramIcon} alt='instagram' />
                </div>
            </div>
            <div className='divider' />
            <div className='link-cont'>
                <div>
                    <p className='title'>OUR COMPANY</p>
                    <p>HOW WE WORK</p>
                    <p>WHY INSURE?</p>
                    <p>VIEW PLANS</p>
                    <p>REVIEWS</p>
                </div>
                <div>
                    <p className='title'>HELP ME</p>
                    <p>FAQ</p>
                    <p>TERMS OF USE</p>
                    <p>PRIVACY POLICY</p>
                    <p>COOKIES</p>
                </div>
                <div>
                    <p className='title'>CONTACT</p>
                    <p>SALES</p>
                    <p>SUPPORT</p>
                    <p>LIVE CHAT</p>
                </div>
                <div>
                    <p className='title'>OTHERS</p>
                    <p>CAREERS</p>
                    <p>PRESS</p>
                    <p>LICENSES</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer