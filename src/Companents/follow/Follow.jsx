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
        <div id="follows"><p><span>
        <NavLink to={'/'}>Главная</NavLink></span><span>/ Оформить подписку</span></p>
            <div className="container">
                <div className="follows"><h1>Год</h1>
                    <div className="follows--input">
                        <form>
                            <fieldset><input type="text"/>
                                <legend> Ф.И.О*</legend>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <legend> Телефон*
                                </legend>
                                <input type="tel" placeholder="+996"/>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset><input type="text"/>
                                <legend> E mail*</legend>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset>
                                <input type="password"/>
                                <legend> Пароль*</legend>
                            </fieldset>
                        </form>
                    </div>
                    <h4 className="text">Выберите платежную карту</h4>
                    <div className="follows--pay">
                        <div className="follows--pay__visa">
                            <div className="follows--pay__visa--block">
                                <input type="radio" className="follows--pay__visa--block__line"/>
                                <h5>Visa</h5></div>
                        </div>
                        <div className="follows--pay__card">
                            <div className="follows--pay__card--block"><input type="radio"
                                                                              className="follows--pay__card--block__line"/>
                                <h5>MasterCard</h5></div>
                        </div>
                    </div>
                    <div className="follows--cards">
                        <form>
                            <fieldset><input type="text"/>
                                <legend> Номер карты *</legend>
                            </fieldset>
                        </form>
                        <div className="follows--cards__service">
                            <form>
                                <fieldset className="fieldset-one"><input type="text"/>
                                    <legend> ММ/ГГ *
                                    </legend>
                                </fieldset>
                            </form>
                            <form>
                                <fieldset className="fieldset-two">
                                    <legend> CVC *
                                    </legend>
                                    <input type="text"/>
                                </fieldset>
                            </form>
                        </div>
                        <div className="follows--cards__agree">
                            <div className="follows--cards__agree--click"></div>
                            <h4>Я ознакомился и согласен с Условиями оказания услуг</h4></div>
                    </div>
                    <div className="follows--button">
                        <button onClick={afterPage}>Оплатить 225.00$</button>
                    </div>
                    <div className="follows--text">
                        <div className="follows--text__inform"><h3>Все мастер-классы нашей школы</h3>
                            <h3>6 новых статей каждый месяц.</h3>                    <h3>
                                Образовательная платформа доступна на <br/> условиях ежегодной подписки. </h3>
                        </div>
                        <div className="follows--text__bottom">
                            <p>Другие варианты подписки:</p>
                            <div className="follows--text__bottom--btn">
                                <button>Год + - 585,00 $/год</button>
                                <button>Месяц - 105,00 $/год</button>
                            </div>
                            <h3>Отменить можно в любой момент!</h3>                    <h3>При оплате через Fondy, с
                            Вашей карты автоматически будут <br/> списываться 225,00 $/год,
                            которые являютсястандартной <br/> ценой участия.
                        </h3>                    <h3> Вы всегда можете отменить подписку в Вашем личном <br/>
                            кабинете и больше списаний не будет. </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow;