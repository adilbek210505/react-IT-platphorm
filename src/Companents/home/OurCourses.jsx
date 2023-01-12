import React from 'react';
import {BsArrowRight} from "react-icons/bs";

const OurCourses = () => {
    return (
        <section id='courses'>
            <div className='container'>
                <div className='out'>
                    <p className='out--p'>Главная / <span className='out--span'>О нас</span></p>
                </div>
                <div className='course'>
                <div className='course--title'>
                    <h1 >Курсы</h1>
                </div>
                    <div className='developer'>
                        <div className="developer--three">
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>Frontend-разработчик</h2>
                                </div>
                                    <div className='block--text'>
                                        <p className='block--text__p'>Мастер создания сайтов. Умеет  делать их красивыми,  интерактивными, с большим  функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты</p>
                                    </div>
                                        <div className='block--details'>
                                            <a className='block--details__a' href="#">Подробнее  <BsArrowRight/></a>
                                        </div>
                            </div>
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>Backend-разработчик</h2>
                                </div>
                                    <div className='block--text'>
                                        <p className='block--text__p'>Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент  и опорную систему для проекта - от  простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.</p>
                                    </div>
                                        <div className='block--details'>
                                            <a className='block--details__a' href="#">Подробнее  <BsArrowRight/></a>
                                        </div>
                            </div>
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>UX / UI Дизайнер</h2>
                                </div>
                                    <div className='block--text'>
                                        <p className='block--text__p'>Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.</p>
                                    </div>
                                        <div className='block--details'>
                                            <a className='block--details__a' href="#">Подробнее  <BsArrowRight/></a>
                                        </div>
                            </div>
                        </div>
                        <div className="developer--three">
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>DevOps - инженер</h2>
                                </div>
                                <div className='block--text'>
                                    <p className='block--text__p'>Он разбирается в <br/>
                                        программировании  и <br/> инфраструктуре и объединяет эти  <br/>знания для оптимальной работы <br/> бизнеса.</p>
                                </div>
                                <div className='block--details'>
                                    <a className='block--details__a' href="#">Подробнее  <BsArrowRight/></a>
                                </div>
                            </div>
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>Android-разработчик</h2>
                                </div>
                                <div className='block--text'>
                                    <p className='block--text__p'>Создает, обновляет, усовершенствует мобильные приложения для смартфонов, планшетов, электронных книг, игровых приставок и других девайсов, работающих на операционной системе Android.</p>
                                </div>
                                <div className='block--details'>
                                    <a className='block--details__a' href="#">Подробнее  <BsArrowRight/></a>
                                </div>
                            </div>
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>Java-разработчик</h2>
                                </div>
                                <div className='block--text'>
                                    <p className='block--text__p'>Cпециалист, который создает приложения разной сложности, используя старейший язык программирования.
                                    </p>
                                </div>
                                <div className='block--details'>
                                    <a className='block--details__a' href="#">Подробнее  <BsArrowRight/></a>
                                </div>
                            </div>
                        </div>
                        <div className="developer--three">
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>С++ - разработчик</h2>
                                </div>
                                <div className='block--text'>
                                    <p className='block--text__p'>Занимается разработкой высокопроизводительных и высоконагруженных систем, таких как поисковики, драйверы, игры и приложения. </p>
                                </div>
                                <div className='block--details'>
                                    <a className='block--details__arr' href="#">Подробнее  <BsArrowRight/></a>
                                </div>
                            </div>
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>IOS - разработчик</h2>
                                </div>
                                <div className='block--text'>
                                    <p className='block--text__p'>iOS разработчик - идеальная профессия для того, кто любит мобильную продукцию компании Apple. Специальность позволяет совмещать творческие способности.
                                    </p>
                                </div>
                                <div className='block--details'>
                                    <a className='block--details__arr' href="#">Подробнее  <BsArrowRight/></a>
                                </div>
                            </div>
                            <div className='block'>
                                <div className='block--title'>
                                    <h2 className='block--title__h'>Python - разработчик</h2>
                                </div>
                                <div className='block--text'>
                                    <p className='block--text__p'>Cпециалист, который применяет в работе многоуровневый язык программирования Python.</p>
                                </div>
                                <div className='block--details'>
                                    <a className='block--details__arr' href="#">Подробнее  <BsArrowRight/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCourses;