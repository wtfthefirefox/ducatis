import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <>
            <div className="section__container header__container">
                <div className="section__wrapper header__wrapper">
                    <div className="menu">
                        <div className="menu__hamburger">
                            <span className="menu__hamburger-item"/>
                        </div>
                        <div className="header__logo-link">
                            <a href="/" className="header__logo">
                                <img src={require("./img/logo.png")} alt="header logo" width="110px" height="117px"/>
                            </a>
                        </div>
                        
                        <ul className="menu__list">
                            <a href="/" className="menu__browser">
                                <img src={require("./img/browser.png")} alt="browser" width="21px" height="16px"/>
                            </a>
                            <li className="menu__item">
                                <a href="/" className="menu__link">international website</a>
                            </li>
                            <li className="menu__item">
                                <a href="/" className="menu__link">my dacati</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;