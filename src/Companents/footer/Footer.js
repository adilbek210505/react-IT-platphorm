import React from 'react';
import logo from "../image/logo.svg"
import {FiYoutube} from "react-icons/fi";
import {BsInstagram, BsTelephone} from "react-icons/bs";
import {CiFacebook, CiLocationOn} from "react-icons/ci";
import {RxTwitterLogo} from "react-icons/rx";
import {GrTictok} from "react-icons/gr";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--logo">
                        <img src={logo} alt=""/>
                        <h1>kg|ru</h1>
                    </div>
                    <div className="footer--link">
                        <h1>Быстрые ссылки</h1>
                        <a href="#">О школе</a>
                        <a href="#">Наши курсы</a>
                        <a href="#">О нас</a>
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
                                <GrTictok/>
                            </a>
                            <a href="#">
                                <TbBrandTelegram/>
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