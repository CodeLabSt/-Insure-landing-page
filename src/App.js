import React, { Fragment } from 'react'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

const App = props => {
    return (
        <Fragment>
            <NavBar />
            <Banner />
            <AboutUs />
            <Footer />
        </Fragment>
    )
}

export default App