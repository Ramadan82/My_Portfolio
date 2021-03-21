import React from 'react'
import Typed from "react-typed"
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>End to End Software and Web Development Solutions</h1>
                <Typed 
                className="typed-text"
                strings={["web design", "web development", "mobile applications development", "Business software solutions"]}
                typeSpeed={60}
                backSpeed={80}
                loop
                />
                <a href="#" className="btn-main-offer" >Contact Me</a>

            </div>
        </div>
    )
}

export default Header
