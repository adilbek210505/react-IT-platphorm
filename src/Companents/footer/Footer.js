import React from 'react';
import logo from "../image/logo.svg"
import {FiYoutube} from "react-icons/fi";
import {BsInstagram, BsTelephone} from "react-icons/bs";
import {CiFacebook, CiLocationOn} from "react-icons/ci";
import {RxTwitterLogo} from "react-icons/rx";
import {AiOutlineMail} from "react-icons/ai";
import {SiTiktok} from "react-icons/si";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--logo">
                        <NavLink to={'/'}><img src={logo} alt=""/></NavLink>
                        <h1>kg|ru</h1>
                    </div>
                    <div className="footer--link">
                        <h1>Быстрые ссылки</h1>
                      <NavLink to={'/aboutSchool'}><a href="#">О школе</a></NavLink>
                       <NavLink to={'/ourCourses'}> <a href="#">Наши курсы</a></NavLink>
                       <NavLink to={'/AboutUs'}> <a href="#">О нас</a></NavLink>
                    </div>
                    <div className="footer--Social-network">
                        <h1>Социальные сети</h1>
                        <div className="footer--Social-network--link">
                            <a href="https://www.instagram.com/">
                                <BsInstagram/>
                            </a>
                            <a href="#">
                                <FiYoutube/>
                            </a>
                            <a href="#">
                                <CiFacebook/>
                            </a>
                            <a href="#">
                                <RxTwitterLogo/>
                            </a>
                            <a href="#">
                                <SiTiktok/>
                            </a>
                            <a href="#">
                                {/*<TbBrandTelegram/>*/}
                            </a>
                        </div>

                    </div>
                    <div className="footer--Contacts">
                        <h1>Контакты</h1>
                        <a href="#"><AiOutlineMail/> @motionwebteam@gmail.com</a>
                        <a href="#"><BsTelephone/>+996 559 - 69 - 26 - 26</a>
                    </div>
                    <div className="footer--address">
                        <h1>Адреса</h1>
                        <p><CiLocationOn/>Турусбекова 109 / 3</p>
                        <p>Идентификационный код: 1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;