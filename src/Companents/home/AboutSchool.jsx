import React from 'react';
import benner from "../image/AboutSchool-school--right-img.png"
import {BsArrowRight} from "react-icons/bs";
import sliderImage from "../image/AboutSchool-slider-two--img.svg"
import sliderImg from "../image/AboutSchool-slider--img.svg"
import slideri from "../image/AboutSchool-slider-three--img.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AboutSchool = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <section id="school">
            <div className="container">
                <p className="p-text"> Главная /<span> О школе</span></p>
                <div className="school">
                    <div className="school--left">
                        <h1>О нашей школе:</h1>
                        <p>Наша платформа — это интенсивная программа <br/> обучения для тех, кто хочет освоить
                            востребованную <br/>профессию, войти в IT и зарабатывать больше.</p>
                        <h1>Наша миссия:</h1>
                        <p>Сформировать интерес к современным технологиям <br/> и помочь школьнику определиться с
                            выбором <br/> будущей специальности.</p>
                    </div>
                    <div className="school--right">
                        <img className="school--right--image" src={benner} alt=""/>
                    </div>
                </div>
                <div className="title">
                    <h1 className="title--h">Курсы</h1>
                    <div className="title--group">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">
                            <div className="title--group--block">
                                <h1>Frontend-разработчик</h1>
                                <p>Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим
                                    функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно
                                    разрабатывать новые проекты</p>
                                <div className="title--group--block--icon">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#">Подробнее <BsArrowRight/></a>
                                </div>
                            </div>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">
                            <div className="title--group--block">
                                <h1>Backend-разработчик</h1>
                                <p>Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                                    собирает фундамент и опорную систему для проекта - от простого сайта для магазина
                                    одежды до сложных вычислительных систем нейронных сетей.</p>
                                <div className="title--group--block--icon">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#">Подробнее <BsArrowRight/></a>
                                </div>
                            </div>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">
                            <div className="title--group--block">
                                <h1>UX / UI Дизайнер</h1>
                                <p>Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист
                                    UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных
                                    параметров для комфорьного использования продукта.</p>
                                <div className="title--group--block--icon">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#">Подробнее <BsArrowRight/></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <button className="all">Все курсы</button>
                </div>
                <div className="subtitle">
                    <h1 className="subtitle-h">Мастер-классы</h1>
                    <div className="subtitle--block">
                        <h2>Реактивное программирование на Java: как, зачем и стоит ли? </h2>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого
                            относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++
                            ...</p>
                    </div>
                    <div className="subtitle--block">
                        <h2>Реактивное программирование на Java: как, зачем и стоит ли? </h2>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого
                            относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++
                            ...</p>
                    </div>
                    <div className="subtitle--block">
                        <h2>Реактивное программирование на Java: как, зачем и стоит ли? </h2>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого
                            относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++
                            ...</p>
                    </div>
                    <button>Все мастер классы</button>
                </div>
                <div className="packet">
                    <h1>Уровень пакетов</h1>
                    <h3>Списания будут автоматическими. Вы всегда можете отменить подписку в <br/> Вашем личном кабинете
                        и больше списаний не будет</h3>
                    <div className="packet--group">
                        <div className="packet--group--block">
                            <h2>Месяц +</h2>
                            <p>Доступны: Все статьи</p>
                            <h4>105,00 $</h4>
                            <h6>Ежемесячно</h6>
                            <div className="packet--group--block--btn">
                                <button>Оформить подписку</button>
                                <button>Подробнее</button>
                            </div>
                        </div>
                        <div className="packet--group--block">
                            <h2>Год + +</h2>
                            <p>Доступны: Все Мастер классы и статьи и курсы</p>
                            <h4>585,00 $</h4>
                            <h6>Ежегодно</h6>
                            <div className="packet--group--block--btn">
                                <button>Оформить подписку</button>
                                <button>Подробнее</button>
                            </div>
                        </div>
                        <div className="packet--group--block">
                            <h2>Год +</h2>
                            <p>Доступны: Все Мастер классы и статьи и курсы</p>
                            <h4>220,00 $</h4>
                            <h6>Ежегодно</h6>
                            <div className="packet--group--block--btn">
                                <button>Оформить подписку</button>
                                <button>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <h1 className="slider--h">Отзывы о нашей школе</h1>
                        <Slider {...settings}>
                        <div className="slider--block">
                            <img src={sliderImg} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                                рекомендую и благодарю!</p>
                            <h4>23.02.2022 г</h4>
                        </div>
                        <div className="slider--block">
                        <img src={slideri} alt=""/>
                        <h1>Виктор Александарович</h1>
                        <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                            остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                            выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                            рекомендую и благодарю!</p>
                        <h4>23.02.2022 г</h4>
                    </div>
                        <div className="slider--block">
                        <img src={sliderImage} alt=""/>
                        <h1>Виктор Александарович</h1>
                        <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                            остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                            выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                            рекомендую и благодарю!</p>
                        <h4>23.02.2022 г</h4>
                    </div>
                            <div className="slider--block">
                                <img src={sliderImg} alt=""/>
                                <h1>Виктор Александарович</h1>
                                <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                    остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                    выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                                    рекомендую и благодарю!</p>
                                <h4>23.02.2022 г</h4>
                            </div>

                        </Slider>

                </div>
                <div className="service">
                    <div className="service--left">
                        <h1>Оставить заявку</h1>
                        <p>Заполните краткий бриф с ключевым вопросами, <br/> и мы подготовимся к разговору с вами </p>
                    </div>
                    <div className="service--right">
                        <form className="service--right__form">
                        <h1>ФИО*</h1>
                            <input type="text"/>
                        <h1>Номер телефон*</h1>
                        <input type="text"/>
                        <h1>Email*</h1>
                        <input type="text"/>
                        <button>Отправить</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSchool;