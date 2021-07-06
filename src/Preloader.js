import React from 'react'
import logo1 from './preloaders/Preloader-Magic.gif'
import logo2 from './preloaders/Preloader-block.gif'
import logo3 from './preloaders/Preloader-dots.gif'
import logo4 from './preloaders/Preloader-green-orbits.gif'
import logo5 from './preloaders/Preloader-Spinner.gif'
import logo6 from './preloaders/Preloader.gif'

export default function Preloader() {
    return (
        <div>
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
            <img src={logo3} alt="logo3" />
            <img src={logo4} alt="logo4" />
            <img src={logo5} alt="logo5" />
            <img src={logo6} alt="logo6" />
        </div>
    )
}
