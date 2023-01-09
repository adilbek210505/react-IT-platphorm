import React from 'react';
import {Link} from "react-router-dom";
import logo from "../image/logo.svg"

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <Link to={'/'}><img src={logo} alt="" /></Link>
                        <div className="header-nav">
                            <Link className="/link" to="/aboutSchool">О школе</Link>
                            <Link className="/link" to="/ourCourses">Наши курсы</Link>
                            <Link className="/link" to="/AboutUs"> О нас</Link>
                        </div>
                    </div>
                    <div className="right_site">
                        <a className="Enter" href="#">Войти</a>
                        <button className="header-btn">Подписаться </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;