import React, {useContext} from "react";
import photo from "../image/main--photo.png"
import java from "../image/main--photo--java.png"
import {FaRegAddressBook} from "react-icons/fa";
import what from "../image/main--photo--what.png"
import main from "../image/main-photo--all.png"
import mans from "../image/mens--main.svg"
import icon1 from "../image/main--icon1.png"
import icon2 from "../image/main--icon2.png"
import icon3 from "../image/main--icon3.png"
import icon4 from "../image/main--icon4.png"
import {NavLink, useNavigate} from "react-router-dom";
import {PageContext} from "../../context";
const Main = () => {
    const {page } = useContext(PageContext)
    const navigate = useNavigate()
    return (
        <section id="Mein">
            <div className="container">
                <div className="main">
                    <div className="main--left">
                        <h1>IT образовательная <br/> платформа </h1>
                        <p>Наша образовательная платформа вам <br/>даст необходимые практические <br/>знания для
                            адаптации в IT-сфере.</p>
                    </div>
                    <div className="main--right">
                        <img src={photo} alt=""/>
                    </div>
                </div>
                <div className="articles">
                    <h1>Последние статьи</h1>
                    <div className="articles--group">
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
                            <img className="articles--group--block--image" src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div></div>
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
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
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
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
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
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
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
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
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
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
                    <NavLink to={'/allArticle'}><button>Показать больше</button></NavLink>
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
                                    Могу ли я отказаться от автопродления подписки                                    <span className="p-faq__icon"></span>
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
                                    Могу ли я вернуть деньги                                    <span className="p-faq__icon"></span>
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
                                    Какие направление в IT самые актуальные                                    <span className="p-faq__icon"></span>
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
                                    Нужно ли учить другой язык программирования, <br/> перед изучением языка С++?
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
                                    Платформа обнавляется?
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
                                    Как я могу получить доступ ка всем курсом                                    <span className="p-faq__icon"></span>
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
    );
};

export default Main;