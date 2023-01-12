import React from 'react';
import fon from "../image/Packet-fon.png"


const Packet = () => {
    return (

        <div className="container">
            <section id="hero">
                <p>Главная / <span>Пакет участия</span></p>
                <h2>Выберите свой пакет участия</h2>
                <div className="hero">
                    <div className="hero--block1">
                        <div className="hero--block1__left">
                            <h5>Месяц +</h5>
                            <h2>105,00 $</h2>
                            <button>Ежемесячно</button>
                            <p>Все статьи</p>

                        </div>
                        <button className="hero--block1__btn">Оформить подписку</button>

                    </div>

                    <div className="hero--block2">
                        <div className="hero--block2__medium">
                            <h5>Год</h5>
                            <h2>220,00 $</h2>
                            <button>Ежегодно</button>
                            <div className="hero--block2__medium--p">
                                <p>Все статьи</p>
                                <p>Все мастер классы</p>
                            </div>
                        </div>
                        <button className="hero--block2__btn">Оформить подписку</button>
                    </div>

                    <div className="hero--block3">
                        <div className="hero--block3__right">
                            <h5>Год +</h5>
                            <h2>585,00 $</h2>
                            <button>Ежегодно</button>
                            <div className="hero--block3__right--p">
                                <p>Все статьи</p>
                                <p>Все мастер классы</p>
                                <p>6 новых статей каждый месяц</p>
                                <p>Доступ к курсу “DevOps - <br/> инженер”</p>
                            </div>

                        </div>
                        <button className="hero--block3__btn">Оформить подписку</button>

                    </div>
                </div>
                <h4>
                    Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете <br/>
                    и больше списаний не будет
                </h4>
            </section>

            <section id="register">
                <div className="register">
                    <div className="register__text">
                        <h1>Оставить заявку</h1>

                        <p>Заполните краткий бриф с ключевым вопросами, <br/> и мы подготовимся к разговору с вами </p>

                    </div>
                    <div className="register__input">
                        <div className="register__input--one">
                            <p>ФИО *</p>
                            <input type="" placeholder=""/>
                        </div>
                        <div className="register__input--one">
                            <p>Номер телефон*</p>
                            <input type="" placeholder=""/>
                        </div>
                        <div className="register__input--one">
                            <p>Email*</p>
                            <input type="" placeholder=""/>
                        </div>
                        <div className="register__input--button">

                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
                <div className="register__bottom">
                    <div className="register__bottom--text">
                        <h1>ОСТАЛИСЬ <br/> ВОПРОСЫ?</h1>
                        <img src={fon} alt="/" className="img"/>
                    </div>
                    <div className="register__bottom--accord">
                        <div className="l-inner">
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Что такое зарезервированные слова в
                                    программировании?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и <br/>
                                        выражения, которые имеют предопределенные значения и не <br/>
                                        могут использоваться при написании кода для иных целей, <br/>
                                        например, для именования переменных. Примеры <br/>
                                        распространенных ключевых слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и while.
                                    </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Могу ли я отказаться от
                                    автопродления подписки
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и <br/>
                                        выражения, которые имеют предопределенные значения и не <br/>
                                        могут использоваться при написании кода для иных целей, <br/>
                                        например, для именования переменных. Примеры <br/>
                                        распространенных ключевых слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/>
                                        Вроде for и while.
                                        <span p-faq__icon></span>
                                    </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">Могу ли я вернуть деньги
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и <br/>
                                        выражения, которые имеют предопределенные значения и не <br/>
                                        могут использоваться при написании кода для иных целей, <br/>
                                        например, для именования переменных. Примеры <br/>
                                        распространенных ключевых слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/>
                                        Вроде for и while.
                                    </p>
                                </div>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Какие направление в IT самыеактуальные
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">Могу ли я вернуть деньги</p>
                                </div>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Нужно ли учить другой язык программирования, <br/> перед изучением языка С++?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">Могу ли я вернуть деньги</p>
                                </div>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">Платформа обнавляется?
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">Могу ли я вернуть деньги</p>
                                </div>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">Как я могу получить доступ ка всем
                                    курсом
                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">Могу ли я вернуть деньги</p>
                                </div>
                            </details>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Packet;