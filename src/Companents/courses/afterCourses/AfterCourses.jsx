import React from 'react';
import image from "../../image/asterCourses--image--video.png"
import nurai from "../../image/nuray.svg"
import pro from "../../image/prof--after.svg"
import k from "../../image/k--afterC.png"
import {IoIosArrowForward} from "react-icons/io";

const AfterCourses = () => {
    return (
        <div className='afterCourses'>
            <div className="container">
                <h6>Главная / Мастер классы /Frontend разработчик</h6>
                <div className="after">
                    <div className="after--left">
                        <h1>Frontend-разработчик</h1>
                        <p>Когда нужно переходить от прокачивания личной <br/>
                            эффективности к изучению эффективности командой?</p>
                    </div>
                    <div className="after--right">
                        <h1>Прогресс по курсу</h1>
                        <input type="range"/>
                        <div className="after--right--text">
                            <div className="after--right--text--left">
                                <p>Пройдено модулей</p>
                                <span>0/3</span>
                            </div>
                            <div className="after--right--text--right">
                                <p>Пройдено материалов</p>
                                <span>4/60</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal">
                    <h5>ПРОГРАММА КУРСА </h5>
                    <div className="modal--group">
                        <div className="modal--group--left">
                            <iframe width="617" height="387" src="https://www.youtube.com/embed/hV2lhNc4tBI"
                                    title="Курс Биткоина за 10 лет. Bitcoin за $100,000  уже не фантастика! Цена Биткоина с 2010-2020"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className="modal--group--right">
                            <details>
                                <summary>
                                    <button>Модуль 1</button>
                                    <div className="rea">
                                        <h1>Reactivity</h1>
                                        <p>Пройдено материалов: 4/15</p>
                                    </div>
                                    <IoIosArrowForward/>
                                </summary>
                                <div className="groups">
                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>

                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="groups">

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>

                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    <button>Модуль 2</button>
                                    <div className="rea">
                                        <h1>Reactivity</h1>
                                        <p>Пройдено материалов: 4/15</p>
                                    </div>
                                    <IoIosArrowForward/>
                                </summary>
                                <div className="groups">
                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>

                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>
                                </div>

                                <summary>
                                    <button>Модуль 2</button>
                                    <div className="rea">
                                        <h1>Reactivity</h1>
                                        <p>Пройдено материалов: 4/15</p>
                                    </div>
                                    >
                                </summary>
                                <div className="groups">
                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>

                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    <button>Модуль 3</button>
                                    <div className="rea">
                                        <h1>Reactivity</h1>
                                        <p>Пройдено материалов: 4/15</p>
                                    </div>
                                    <IoIosArrowForward/>
                                </summary>
                                <div className="groups">
                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>
                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>

                                    <div className="video">
                                        <div className="video--left">
                                            <img src={image} alt=""/>
                                        </div>

                                        <div className="video--right">
                                            <h2>5 Reactive Streams spec</h2>
                                            <button>Урок</button>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <h1>Комментарии</h1>
                    <div className="comment--group">
                        <div className="comment--group--block">
                            <input type="text" placeholder="Ваш комментарий"/>
                            <button>Отправить</button>
                        </div>
                        <div className="comment--text">
                            <div className="comment--text--box">
                                <div className="comment--text--box--right">
                                    <img src={nurai} alt="img"/>
                                </div>
                                <div className="comment--text--box--left">
                                    <p>Осмонова Нурай <span>/  Около минуты назад</span></p>
                                    <h3>Очень понравились уроки. Все более чем понятно! </h3>
                                    <details>
                                        <summary>Ответить</summary>
                                        <div className="test">
                                            <div className="test--left">
                                                <img src={pro} alt=""/>
                                            </div>
                                            <div className="test--right">
                                                <p>Эгембердиева Кунсулуу</p>
                                                <h5>Курс является выжимкой - самым соком в вопросах построения команды.
                                                    пересмотрел свое отношение ко многим критериям, факторам и своим
                                                    действиям и взглядам по вопросам командообразования. </h5>
                                                <span>Ответить</span>
                                            </div>
                                        </div>
                                    </details>
                                </div>

                            </div>
                            <div className="comment--text--box">
                                <div className="comment--text--box--right">
                                    <img src={k} alt="img"/>

                                </div>
                                <div className="comment--text--box--left">
                                    <p>Осмонова Нурай <span>/  Около минуты назад</span></p>
                                    <h3>Очень понравились уроки. Все более чем понятно! </h3>
                                    <details>
                                        <summary>Ответить</summary>
                                        <div className="test">
                                            <div className="test--left">
                                                <img src={pro} alt=""/>
                                            </div>
                                            <div className="test--right">
                                                <p>Эгембердиева Кунсулуу</p>
                                                <h5>Курс является выжимкой - самым соком в вопросах построения команды.
                                                    пересмотрел свое отношение ко многим критериям, факторам и своим
                                                    действиям и взглядам по вопросам командообразования. </h5>
                                                <span>Ответить</span>
                                            </div>
                                        </div>
                                    </details>
                                </div>

                            </div>
                            <div className="comment--text--box">
                                <div className="comment--text--box--right">
                                    <img src={nurai} alt="img"/>

                                </div>
                                <div className="comment--text--box--left">
                                    <p>Осмонова Нурай <span>/  Около минуты назад</span></p>
                                    <h3>Очень понравились уроки. Все более чем понятно! </h3>
                                    <details>
                                        <summary>Ответить</summary>
                                        <div className="test">
                                            <div className="test--left">
                                                <img src={pro} alt=""/>
                                            </div>
                                            <div className="test--right">
                                                <p>Эгембердиева Кунсулуу</p>
                                                <h5>Курс является выжимкой - самым соком в вопросах построения команды.
                                                    пересмотрел свое отношение ко многим критериям, факторам и своим
                                                    действиям и взглядам по вопросам командообразования. </h5>
                                                <span>Ответить</span>
                                            </div>
                                        </div>
                                    </details>
                                </div>

                            </div>
                            <div className="comment--text--box">
                                <div className="comment--text--box--right">
                                    <img src={k} alt="img"/>
                                </div>
                                <div className="comment--text--box--left">
                                    <p>Осмонова Нурай <span>/  Около минуты назад</span></p>
                                    <h3>Очень понравились уроки. Все более чем понятно! </h3>
                                    <details>
                                        <summary>Ответить</summary>
                                        <div className="test">
                                            <div className="test--left">
                                                <img src={pro} alt=""/>
                                            </div>
                                            <div className="test--right">
                                                <p>Эгембердиева Кунсулуу</p>
                                                <h5>Курс является выжимкой - самым соком в вопросах построения команды.
                                                    пересмотрел свое отношение ко многим критериям, факторам и своим
                                                    действиям и взглядам по вопросам командообразования. </h5>
                                                <span>Ответить</span>
                                            </div>
                                        </div>
                                    </details>


                                    <button>Смотреть все</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FAQ">
                    <h5>FAQ</h5>
                    <h1>Остались вопросы?</h1>
                    <div className="accordion">
                        <div className="l-inner">
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Как мне начать обучение ? <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте
                                        свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс
                                        станет доступен сразу после оплаты или в день запуска.</p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Могу ли я отказаться от автопродления подписки <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Могу ли я вернуть деньги <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Какие направление в IT самые актуальные
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AfterCourses;