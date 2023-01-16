import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../image/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa";
import Enter from "../enter/Enter";

const Header = () => {
    const [mobile, setMobile] = useState(false)
    const [enter, setEnter] = useState(true)
    const getNavbar = () => {
        setMobile(!mobile)
    }
    useEffect(()=>{
        setEnter(enter)
    },[enter])
    return (
        <>
            <div id="header" style={{height: mobile ? '100%' : ''}}>
                <div className="container">
                    <div onClick={getNavbar} className="header--mobile_menu_icon"
                         style={{
                             position: 'relative',
                             zIndex: '1',
                             color: 'white',
                             fontSize: '30px',
                             margin: " 0px 107px -37px 648px"
                         }}>
                        {mobile ? <FaTimes/> : <FaBars/>}
                    </div>
                    <div className="header">
                        <Link to={'/'}><img style={{display: mobile ? 'none' : 'block'}}     src={logo} alt=""/></Link>
                        <div className="logo">
                            <div className={mobile ? 'nav-link-mobile' : "header-nav"}>
                                <Link className="link" to="/aboutSchool">О школе</Link>
                                <Link className="link" to="/ourCourses">Наши курсы</Link>
                                <Link className="link" to="/AboutUs"> О нас</Link>
                            </div>

                            <div className={mobile ? 'nav-link-mobile' : "right_site"}>
                                <button onClick={()=> setEnter(!enter)} className='Enter'>Войти</button>
                                <Link to={'/packet'}>
                                    <button className="header-btn">Подписаться</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={enter ? 'enter' : 'enterBlock'}> <Enter/></div>
            </div>

        </>
    );
};

export default Header;