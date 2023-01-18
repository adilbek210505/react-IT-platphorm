import React from 'react';
import {FaRegAddressBook} from "react-icons/fa";
import java from "../../image/main--photo--java.png";
import {NavLink} from "react-router-dom";

const AllArticle = () => {
    return (
        <div id='allarticle'>
            <div className="container">
                <p>Главная <span>/ Наши курсы</span></p>
                <div className="allarticle">
                    <h1> статьи</h1>
                    <div className="allarticle--group">
                        <div className="allarticle--group__block">
                            <img className="allarticle--group__block--image" src={java} alt=""/>
                            <div className="allarticle--group__block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="allarticle--group__block--text__link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="allarticle--group__block">
                            <img className="allarticle--group__block--image" src={java} alt=""/>
                            <div className="allarticle--group__block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="allarticle--group__block--text__link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="allarticle--group__block">
                            <img className="allarticle--group__block--image" src={java} alt=""/>
                            <div className="allarticle--group__block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="allarticle--group__block--text__link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="allarticle--group__block">
                            <img className="allarticle--group__block--image" src={java} alt=""/>
                            <div className="allarticle--group__block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="allarticle--group__block--text__link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="allarticle--group__block">
                        <img className="allarticle--group__block--image" src={java} alt=""/>
                        <div className="allarticle--group__block--text">
                            <h6>Статьи</h6>
                            <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                Training Center. </p>
                            <div className="allarticle--group__block--text__link">
                                <a href="#"><FaRegAddressBook/>Читать</a>
                                <a href="#">01.02.2022</a>
                            </div>
                        </div>
                    </div>
                        <div className="allarticle--group__block">
                            <img className="allarticle--group__block--image" src={java} alt=""/>
                            <div className="allarticle--group__block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="allarticle--group__block--text__link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default AllArticle;