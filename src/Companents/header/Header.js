import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../image/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa";

const Header = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className= {mobile ? 'nav-link-mobile' : "logo" } >
                        <Link to={'/'}><img src={logo} alt="" /></Link>
                        <div className= "header-nav">
                            <Link className="link" to="/aboutSchool">О школе</Link>
                            <Link className="link" to="/ourCourses">Наши курсы</Link>
                            <Link className="link" to="/AboutUs"> О нас</Link>
                        </div>
                    </div>
                    <div className=  {mobile ? 'nav-link-mobile' : "right_site" } >
                        <a className="Enter" href="#">Войти</a>
                        <Link to={'/packet'}><button className="header-btn">Подписаться </button></Link>
                    </div>
                    <div onClick={()=> setMobile(!mobile)} className="header--mobile_menu_icon" style={{color: 'white', fontSize: '30px',textAlign: 'center'}}>
                        {mobile ? <FaTimes/> : <FaBars/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;