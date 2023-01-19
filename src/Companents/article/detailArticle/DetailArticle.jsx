import React from 'react';
import article from "../../image/article-img.png"
import {RiLock2Fill} from "react-icons/ri";
import {AiOutlineUser} from "react-icons/ai"
import java from "../../image/main--photo--java.png";
import {FaRegAddressBook} from "react-icons/fa";

const DetailArticle = () => {
    return (
        <div id="detailArticle">
            <div className="container">
                <div className="detailArticle">
                    <p className="detailArticle--home">Главная<span>/ Статья / Мы подготовили...</span></p>
                    <h5>11.09.2022</h5>
                    <h3>Мы подготовили подборку самых популярных <br/>
                        курсов по направлению Java в IBS Training Center.
                    </h3>
                    <h5>
                        Когда-то ни один крупный проект не обходился без применения <br/>
                        функционального и асинхронного программирования. Эти подходы до сих пор <br/>
                        популярны за счет своих преимуществ: они помогают выдерживать большие <br/>
                        нагрузки и писать эффективный код, не теряя в скорости разработки.
                    </h5>
                    <img src={article} alt="" className="detailArticle--img"/>

                    <h4>
                        В рамках курса от IBS Training Center вы поймете, как работают основные <br/>
                        фичи Spring Framework 5, и узнаете:
                    </h4>

                    <div className="detailArticle--inform">
                        <p>
                            <hr/>
                            Какие существуют конфигурации для Spring Framework 5;
                        </p>
                        <p>
                            <hr/>
                            Как работать с REST-сервисами и документацией при помощи Swagger.
                        </p>
                        <p>
                            <hr/>
                            Что такое бины и как с ними работать;
                        </p>
                        <p>
                            <hr/>
                            Что такое Концепция IoC;
                        </p>
                        <p>
                            <hr/>
                            Примеры использования AOP;
                        </p>
                    </div>

                    <div className="detailArticle--block">
                        <RiLock2Fill className="detailArticle--block__icon"/>

                        <div className="detailArticle--block__follow">
                            <h2>Оформите подписку, чтобы <br/>
                                посмотреть полную версию
                            </h2>
                            <p>Вы уже авторизованы? <span>Авторизуйтесь</span></p>
                        </div>

                        <button>Получить доступ за 225,00$</button>
                    </div>

                    <h1>
                        Комментарии
                    </h1>

                    <div className="detailArticle--block">
                        <AiOutlineUser className="detailArticle--block__icon"/>

                        <div className="detailArticle--block__follow">
                            <h2 className="text">Вы не зарегистрировались!</h2>
                            <p className="texts">Чтобы оставить комментарий, пожалуйста авторизуйтесь или <br/>
                                зарегитрируйтесь.</p>
                        </div>

                        <button>Получить доступ за 225,00$</button>
                    </div>

                    <h1>Другие статьи </h1>

                    <div className="detailArticle--group">
                        <div className="detailArticle--group__right">
                                    <h6>Статьи</h6>
                                    <p>Мы подготовили подборку <br/>
                                        самых популярных курсов <br/>
                                        по направлению Java в IBS <br/>
                                        Training Center.
                                    </p>
                                    <div className="detailArticle--group__right--link">
                                        <a href="#"><FaRegAddressBook/>Читать</a>
                                        <a href="#">01.02.2022</a>
                                    </div>
                                </div>
                        <div className="detailArticle--group__right">
                            <h6>Статьи</h6>
                            <p>Мы подготовили подборку <br/>
                                самых популярных курсов <br/>
                                по направлению Java в IBS <br/>
                                Training Center.
                            </p>
                            <div className="detailArticle--group__right--link">
                                <a href="#"><FaRegAddressBook/>Читать</a>
                                <a href="#">01.02.2022</a>
                            </div>
                        </div>
                        <div className="detailArticle--group__right">
                            <h6>Статьи</h6>
                            <p>Мы подготовили подборку <br/>
                                самых популярных курсов <br/>
                                по направлению Java в IBS <br/>
                                Training Center.
                            </p>
                            <div className="detailArticle--group__right--link">
                                <a href="#"><FaRegAddressBook/>Читать</a>
                                <a href="#">01.02.2022</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailArticle;