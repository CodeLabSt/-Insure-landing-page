import React from 'react'

import '../assets/styles/AboutUs.css'

import IconOne from '../assets/images/icon-snappy-process.svg'
import IconTwo from '../assets/images/icon-affordable-prices.svg'
import IconThree from '../assets/images/icon-people-first.svg'

import BgHowWeWork from '../assets/images/bg-pattern-how-we-work-desktop.svg'

const AboutUs = props => {
    return (
        <div className='about-us'>
            <div className='divider' />
            <div className='title-cont'>
                <h2>We're different</h2>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <img src={IconOne} alt='icon-one' />
                    <h3>Snappy Process</h3>
                    <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                </div>
                <div className='card'>
                    <img src={IconTwo} alt='icon-one' />
                    <h3>Affordable Prices</h3>
                    <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                </div>
                <div className='card'>
                    <img src={IconThree} alt='icon-one' />
                    <h3>People First</h3>
                    <p>Our plans aren't full of conditions and clouses to prevent payouts. We make sure you're covered when you need it.</p>
                </div>
            </div>
            <div className='find-more'>
                <h3>Find out more<br />about how we work</h3>
                <div>
                    <button>HOW WE WORK</button>
                    <img src={BgHowWeWork} alt='bg-how-we-work' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs