import React from 'react';
import people from "../image/Profil--img--man.svg"
import {IoPeopleSharp} from "react-icons/io";
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
                                <div className="profil--left--block--menu--personal">
                                    <IoPeopleSharp/>
                                    <h1>Личные данные</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profil;