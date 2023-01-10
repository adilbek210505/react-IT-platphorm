import React from 'react';
import talk from '../image/aboutus.talk.png'

// Import Swiper styles

import presentation from '../image/aboutus.presentation.png'
import certificate from '../image/aboutus.certificate.png'
import victor from '../image/aboutus.victor.svg'
import alina from '../image/aboutus.alina.svg'
import erlan from '../image/aboutus.erlan.svg'

const AboutUs = () => {
    return (
        <div id="page">
            <div className="container">
                <div className='pages'>
                    <p className='pages--home'>Главная / <span className='pages--about'>О нас</span></p>
                </div>
                <div className='all'>
                    <h1 className="all--us">О нас</h1>
                    <p className="all--text">Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с
                        целью <br/>
                        дать возможность каждому человеку, даже без опыта в технологиях, гарантированно <br/>
                        освоить IT-профессию.</p>
                    <span
                        className='all--span'>Форма обучения - онлайн, с применением электронного обучения и дистанционных <br/>образовательных технологий  на образовательной платформе Moodle и прямые эфиры с <br/>
                преподавателем. 154 академических часа трудоёмкости учебной деятельности отведено <br/> практическим занятиям и выполнению практических заданий.</span>
                </div>
                <div className='photos'>
                    <img src={talk} alt="" className='photos--talk'/>
                    <img src={presentation} alt="" className='photos--presentation'/>
                </div>
                <div id='part'>
                    <div className='certificate'>
                        <h1 className='certificate--title'>Сертификат</h1>
                        <p className='certificate--p'>По окончании обучения выдается онлайн сертификат.</p>
                        <img src={certificate} alt=""/>
                    </div>
                </div>
                <div className="slide">
                    <h1 className='slide--title'>Отзывы наших студентов</h1>

                            <div className="slide--block">
                                <img src={victor} alt=""/>
                                <h1>Виктор Александарович</h1>
                                <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                    остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                    выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                                    рекомендую и благодарю!</p>
                                <h4>23.02.2022 г</h4>
                            </div>

                            <div className="slide--block">
                                <img src={alina} alt=""/>
                                <h1>Алина Татьянован</h1>
                                <p>Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам. </p>
                                <h4>23.02.2022 г</h4>
                            </div>

                            <div className="slide--block">
                                <img src={erlan} alt=""/>
                                <h1>Эрлан Токтошев</h1>
                                <p>Спасибо за обучение, все было правильно организовано и продумано. Дистанционное обучения это очень хорошо, потому что мы живем не в Ростове. Для нас это отлично. Второй этап обучение ребенку понравился больше, очень емко и содержательно.</p>
                                <h4>23.02.2022 г</h4>
                            </div>

                            <div className="slide--block">
                                <img src={alina} alt=""/>
                                <h1>Алина Татьянован</h1>
                                <p>Спасибо за обучение, все было правильно организовано и продумано. Дистанционное обучения это очень хорошо, потому что мы живем не в Ростове. Для нас это отлично. Второй этап обучение ребенку понравился больше, очень емко и содержательно.</p>
                                <h4>23.02.2022 г</h4>
                            </div>

                </div>
                <div id='global'>
                    <div className='group'>
                        <div className='request'>
                            <h1 className='request--title'>Оставить заявку</h1>
                            <p className='request--text'>Заполните краткую форму с ключевым <br/> вопросами, и мы
                                подготовимся к разговору с <br/> вами </p>
                        </div>
                        <form>
                        <div className='leave'>
                            <div className='inputs'>
                                <h3 className="inputs--surname">ФИО *</h3>
                                <input className="inputs--surname__bl" type="text"/>
                            </div>

                            <div className='inputs'>
                                <h3 className="inputs--surname">Номер телефон*</h3>
                                <input className="inputs--surname__bl" type="text"/>
                            </div>
                            <div className='inputs'>
                                <h3 className="inputs--surname">Номер телефон*</h3>
                                <input className="inputs--surname__bl" type="text"/>
                            </div>
                           <div className='send'>
                               <button className='send--btn'>Отправить</button>
                           </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AboutUs;