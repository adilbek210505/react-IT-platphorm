import React from "react";
import photo from "../image/main--photo.png"
import java from "../image/main--photo--java.png"
import {FaRegAddressBook} from "react-icons/fa";
import what from "../image/main--photo--what.png"

const Main = () => {
    return (
<<<<<<< HEAD
        <></>
=======
        <section id="Mein">
            <div className="container">
                <div className="main">
                    <div className="main--left">
                        <h1>IT образовательная <br/> платформа </h1>
                        <p>Наша образовательная платформа вам <br/>даст необходимые практические <br/>знания для
                            адаптации в IT-сфере.</p>
                    </div>
                    <div className="main--right">
                        <img className="main--right--image" src={photo} alt=""/>
                    </div>
                </div>
                <div className="articles">
                    <h1>Последние статьи</h1>
                    <div className="articles--group">
                        <div className="articles--group--block">
                            <img className="articles--group--block--image" src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>Показать больше</button>
                </div>
                <div className="subscribe">
                    <div className="subscribe--group">
                        <div className="subscribe--group--left">
                            <h1>Подпишитесь сейчас за 19,00 $ / мес</h1>
                            <p>И получите доступ к материалам и кейсам, а также к новым <br/> мастер-классам </p>
                        </div>
                        <div className="subscribe--group--right">
                            <a href="#">
                                <button>Оформить подписку</button>
                            </a>
                            <button>Подробнее о пакетах</button>
                        </div>
                    </div>
                </div>
                <div className="question">
                    <div className="question--left">
                        <h1>Остались <br/> вопросы?</h1>
                        <img src={what} alt=""/>
                    </div>
                    <div className="question--right">
                        <div className="l-inner">
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                        </div>
                    </div>
                </div>
                <div className="application">
                    <div className="application--left">
                        <h1>Оставить заявку</h1>
                        <p>Заполните краткую форму с ключевым <br/> вопросами, и мы подготовимся к разговору с <br/>вами
                        </p>
                    </div>
                    <div className="application--right">
                        <form className="application--right--farm">
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
>>>>>>> 1a1c2689aa89497d46a97bf710505437af39633d
    );
};

export default Main;