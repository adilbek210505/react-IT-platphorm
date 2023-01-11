import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../image/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa";


const Header = () => {

    const [headerIcon, setHeaderIcon] = useState(false)

    return (
        <div id="header">
            <div className="container">
                <div  className="header" >
                    <div className="logo">
                        <Link to={'/'}><img src={logo} className='header_logo' alt="" /></Link>
                        <nav  className='header-nav'>
                            <NavLink className="link" to="/aboutSchool">О школе</NavLink>
                            <NavLink className="link" to="/ourCourses">Наши курсы</NavLink>
                            <NavLink className="link" to="/AboutUs"> О нас</NavLink>
                         </nav>
                    </div>
                    <div className="right_site">
                       <Link to={'/enter'}> <p className='Enter'>Войти</p></Link>
                        <button className="header-btn">Подписаться </button>
                    </div>
                    <div onClick={()=>{setHeaderIcon(!headerIcon)}} className="header--mobile_menu_icon" style={{color : "white", fontSize: '30px'}}>
                        {headerIcon ? <FaTimes/>:<FaBars/>}
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Header;