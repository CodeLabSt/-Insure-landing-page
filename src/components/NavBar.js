import React , { useState } from 'react'

import '../assets/styles/NavBar.css'

import HamburgerMenu from '../assets/images/icon-hamburger.svg'
import BgMenuMovil from '../assets/images/bg-pattern-mobile-nav.svg'
import CloseMenu from '../assets/images/icon-close.svg'

const NavBar = props => {

    const [expanded,setExpanded] = useState(false)
    const [movilMenu,setMovilMenu] = useState(HamburgerMenu)

    const handleMenu = () => {
        let menu = document.querySelectorAll('nav div')[1]
        if(!expanded){
            menu.style.transform = 'translateY(0)'
            setExpanded(true)
            setMovilMenu(CloseMenu)
        }else{
            menu.style.transform = 'translateY(-200vh)'
            setExpanded(false)
            setMovilMenu(HamburgerMenu)
        }
    }

    return (
        <nav>
            <div>
                <a href='#'>INSURE</a>
            </div>
            <img src={movilMenu} onClick={handleMenu} id='hamburger-menu' alt='hamburger-menu' />
            <div>
                <a href='#' >HOW WE WORK</a>
                <a href='#' >BLOG</a>
                <a href='#' >ACCOUNT</a>
                <a href='#' >VIEW PLANS</a>
                <img src={BgMenuMovil} id='bg-menu-movil' alt='bg-menu-movil' />
            </div>
        </nav>
    )
}

export default NavBar