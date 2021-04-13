import React from 'react'
import Typed from 'react-typed';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className=" main-info">
                <h1>Web development and promotions</h1>
                <Typed
                    className="typed-text"
                    strings={['Web design','Web Development','Projects']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                    <Link className="btn-main-info" to="/about">Contact me</Link>
            </div>
        </div>
    )
}

export default Header
