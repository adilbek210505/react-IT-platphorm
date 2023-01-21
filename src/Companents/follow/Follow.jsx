import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {PageContext} from "../../context";

const Follow = () => {
    const {page, setPage} = useContext(PageContext)
    const navigate = useNavigate()

    const afterPage = ()=>{
        setPage(!page)
        navigate('/')
    }
    return (
        <div id="hero">
            <p><span>
                <NavLink to={'/'}>Главная</NavLink></span><span>/ Оформить подписку</span></p>
            <div className="container">
                <div className="hero">
                    <h1>Год</h1>
                    <form>
                        <fieldset>
                            <input type="text"/>
                            <legend> Ф.И.О*</legend>
                        </fieldset>
                    </form>
                    <form>
                        <fieldset>
                            <legend>
                                Телефон*
                            </legend>
                            <input type="tel" placeholder="+996"/>
                        </fieldset>
                    </form>
                    <form>
                        <fieldset>
                            <input type="text"/>
                            <legend> E mail*
                            </legend>
                        </fieldset>
                    </form>
                    <form>
                        <fieldset>
                            <input type="password"/>
                            <legend> Пароль*</legend>

                        </fieldset>
                    </form>
                    <h4>Выберите платежную карту</h4>
                    <div className="hero--pay">
                        <div className="hero--pay__visa">
                            <div className="hero--pay__visa--block">
                                <input type="radio" className="hero--pay__visa--block__line"/><h4>Visa</h4>
                            </div>
                        </div>
                        <div className="hero--pay__card">
                            <div className="hero--pay__card--block"><input type="radio"
                                                                           className="hero--pay__card--block__line"/>
                                <h4>MasterCard</h4>
                            </div>
                        </div>
                    </div>
                    <fieldset>
                        <input type="text"/>
                        <legend> Номер карты *</legend>

                    </fieldset>
                    <div className="hero--service">
                        <fieldset>
                            <input type="text"/>
                            <legend>
                                ММ/ГГ *
                            </legend>
                        </fieldset>
                        <fieldset>
                            <legend> CVC *
                            </legend>
                            <input type="text"/>
                        </fieldset>
                    </div>
                    <div className="hero--agree">
                        <div className="hero--agree__click"></div>
                        <h4>Я ознакомился и согласен с Условиями оказания услуг</h4>
                    </div>
                    <div className="hero--button">
                        <button onClick={afterPage}>Оплатить 225.00$</button>
                    </div>
                    <div className="hero--text">
                        <h3>Все мастер-классы нашей школы</h3>
                        <h3>6 новых статей каждый месяц.</h3>
                        <h3>
                            Образовательная платформа доступна на <br/> условиях ежегодной подписки.
                        </h3>
                    </div>
                    <div className="hero--follow">
                        <p>Другие варианты подписки:</p>
                        <button>Год + - 585,00 $/год</button>
                        <button>Месяц - 105,00 $/год</button>
                        <h3>Отменить можно в любой момент!</h3>
                        <h3>При оплате через Fondy, с Вашей карты автоматически будут <br/> списываться 225,00 $/год,
                            которые являются стандартной <br/>
                                ценой участия.
                        </h3>
                        <h3> Вы всегда можете отменить подписку в Вашем личном <br/>
                            кабинете и больше списаний не будет.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow;