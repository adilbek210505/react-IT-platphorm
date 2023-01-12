import React from 'react';
import people from "../image/Profil--img--man.svg"
import {BsFillBasket2Fill, BsFillPeopleFill} from "react-icons/bs";
import {CiWallet} from "react-icons/ci";
import {AiOutlineCreditCard} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {BiExit} from "react-icons/bi";
import {Link, Route, Routes} from "react-router-dom";

const Profil = () => {
    return (
        <section id="Profil">
            <h1>Главная / Профиль / Личные данные</h1>
            <div className="container">
                <div className="profil">
                    <div className="profil--left">
                        <div className="profil--left--block">
                            <img src={people} alt=""/>
                            <button>Добавить фото</button>
                            <div className="profil--left--block--menu">
                                <Link className="/link" to="/data">
                                    <div className="profil--left--block--menu--personal">
                                        <BsFillPeopleFill className="icons"/>
                                        <h1>Личные данные</h1>
                                    </div>
                                </Link>
                                <hr/>

                                <div className="profil--left--block--menu--personal">
                                    <CiWallet className="icons"/>
                                    <h1>Платежные карты</h1>
                                </div>
                                <hr/>
                                <div className="profil--left--block--menu--personal">
                                    <AiOutlineCreditCard className="icons"/>
                                    <h1>Подписки</h1>
                                </div>
                                <hr/>
                                <div className="profil--left--block--menu--personal">
                                    <FaRegComment className="icons"/>
                                    <h1>Комментарии</h1>
                                </div>
                                <hr/>
                                <div className="profil--left--block--menu--personal">
                                    <BsFillBasket2Fill className="icons"/>
                                    <h1>Мои покупки</h1>
                                </div>
                                <hr/>
                                <div className="profil--left--block--menu--personal">
                                    <BiExit className="icons"/>
                                    <h1>Выйти</h1>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profil;