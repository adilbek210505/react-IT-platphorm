import React, {useState} from 'react';
import people from "../image/Profil--img--man.svg"
import {BsFillBasket2Fill, BsFillPeopleFill} from "react-icons/bs";
import {CiWallet} from "react-icons/ci";
import {AiOutlineCreditCard} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {BiExit} from "react-icons/bi";
import chip from "../image/chip--cart.svg"
import anten from "../image/chip--cart--anten.svg"
import visa from "../image/chip--cart--visa.svg"
import logo from "../image/chip--cart--logo.svg"
import {NavLink} from "react-router-dom";

// import {IoPeopleSharp} from "react-icons/io";
// import {IoPeopleSharp} from "react-icons/io";


const Profil = () => {

    const [toggleState, setToggleState] = useState(1)
    const [name, setName] = useState('Личные данные')
    const [profil, setProfil] = useState('')

    const toggleTab = (index) => {
        setToggleState(index)
        console.log(index)
    }

    const handleProfil = (event)=>{
        let {value} = event.target
        if (value === 'Личные данные'){
            setProfil('a')
        }else if(value === 'платежные карты'){
            setProfil('b')
        }else if (value === 'кoментарии'){
            setProfil('c')
        }else if( value === 'мои покупки'){
            setProfil('d')
        }else if(value === 'подписки'){
            setProfil('e')
        }
    }
    return (
        <div className='container' >
            <div  className="all-content" >
                {/*responsive profil*/}
                <select onChange={(e)=> handleProfil(e)} name="" id="select">
                    <option  value="Личные данные">Личные данные</option>
                    <option  value="платежные карты">платежные карты</option>
                    <option  value="кoментарии">коментарии</option>
                    <option  value="мои покупки">мои покупки</option>
                    <option  value="подписки">подписки</option>
                </select>

                <section id="Profil" >
                    <h1 style={{padding: '20px 0', fontWeight: 'normal', fontSize: '15px'}} className='road'><NavLink to={'/'}><span
                        style={{color: 'white'}}>Главная</span></NavLink> <NavLink to={'/Profile'}><span
                        style={{color: 'white'}}>/  Профиль</span></NavLink> <span
                        style={{color: 'white'}}>/ {name}</span></h1>
                    <div className="container">
                        <div className="profil">
                            <div className="profil--left">

                                <div className="profil--left--block">
                                    <img src={people} alt=""/>
                                    <button>Добавить фото</button>
                                    <div className="profil--left--block--menu" >

                                        <div className="profil--left--block--menu--personal"
                                             onClick={() => setName('Личные данные')}>
                                            <BsFillPeopleFill className="icons"/>
                                            <h1 onClick={() => toggleTab(1)}
                                                className={toggleState === 1 ? ' active-tabs' : ' active-tabs'}>Личные
                                                данные</h1>
                                        </div>
                                        <hr/>
                                        <div className="profil--left--block--menu--personal"
                                             onClick={() => setName('платежные карты')}>
                                            <CiWallet className="icons"/>
                                            <h1 onClick={() => toggleTab(2)}
                                                className={toggleState === 2 ? ' active-tabs' : ' active-tabs'}>Платежные
                                                карты</h1>
                                        </div>
                                        <hr/>
                                        <div className="profil--left--block--menu--personal"
                                             onClick={() => setName('Подписки')}>
                                            <AiOutlineCreditCard className="icons"/>
                                            <h1 onClick={() => toggleTab(3)}
                                                className={toggleState === 3 ? 'active-tabs' : ' active-tabs'}>Подписки</h1>
                                        </div>
                                        <hr/>
                                        <div className="profil--left--block--menu--personal"
                                             onClick={() => setName('Комментарии')}>
                                            <FaRegComment className="icons"/>
                                            <h1 onClick={() => toggleTab(4)}
                                                className={toggleState === 4 ? 'active-tabs' : ' active-tabs'}>Комментарии</h1>
                                        </div>
                                        <hr/>
                                        <div className="profil--left--block--menu--personal"
                                             onClick={() => setName('Мои покупки')}>
                                            <BsFillBasket2Fill className="icons"/>
                                            <h1 onClick={() => toggleTab(5)}
                                                className={toggleState === 5 ? 'active-tabs' : 'active-tabs'}>Мои
                                                покупки</h1>
                                        </div>
                                        <hr/>
                                        <div className="profil--left--block--menu--personal">
                                            <BiExit className="icons"/>
                                            <NavLink to={'/'}><h1>Выйти</h1></NavLink>
                                        </div>
                                        <hr/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>



                <div className="tabs_content">
                    {/*личные данные*/}
                    <section id="Comment" className={toggleState === 1 ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="comment" >
                                <h1>Личные данные</h1>
                                <div className="comment--input">
                                    <div className="comment--input--left">
                                        <p>Личные данные</p>
                                        <input type="text" placeholder="Осмонова Нурай"/>
                                        <p>Номер телефон</p>
                                        <input type="tel" placeholder="+996  500 99 80 88"/>
                                        <p>Email</p>
                                        <input type="email" placeholder="osmonovanurai05@gmail.com"/>
                                        <p>Пол</p>
                                        <div className="comment--input--left--block">
                                            <button><input type="checkbox"/>Мужской</button>
                                            <button><input type="checkbox"/>Женский</button>
                                        </div>
                                    </div>
                                    <div className="comment--input--right">
                                        <div className="comment--input--right--sel">
                                            <p>Дата рождения</p>
                                            <select>
                                                <option>
                                                    <p>31</p>
                                                </option>
                                            </select>
                                            <select>
                                                <option>
                                                    <p>Август</p>
                                                </option>
                                            </select>
                                            <select>
                                                <option>
                                                    <p>2006</p>
                                                </option>
                                            </select>
                                        </div>
                                        <p>Страна</p>
                                        <div className="comment--input--right--option">
                                            <select>
                                                <option>
                                                    <p>Киргизия</p>
                                                </option>
                                            </select>
                                            <p>Город</p>
                                            <select>
                                                <option>
                                                    <p>Бишкек</p>
                                                </option>
                                            </select>
                                            <p>Род деятельности</p>
                                            <select>
                                                <option>
                                                    <h3>Студент</h3>
                                                </option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*платежные карты*/}
                    <section id="Cart" className={toggleState === 2 ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="cart" >
                                <h1>Платежные карты</h1>
                                <div className="cart--block">
                                    <div className="cart--block--left">
                                        <h2>Visa Classic</h2>
                                        <div className="cart--block--left--visa">
                                            <img src={chip} alt=""/>
                                            <img src={anten} alt=""/>
                                        </div>
                                        <p>4000 1234 5678 9010</p>
                                        <h6>12/34</h6>
                                        <img className="cart--block--left--image" src={visa} alt=""/>
                                    </div>
                                    <div className="cart--block--left">
                                        <h2>Visa Classic</h2>
                                        <div className="cart--block--left--visa">
                                            <img src={chip} alt=""/>
                                            <img src={anten} alt=""/>
                                        </div>
                                        <p>4000 1234 5678 9010</p>
                                        <h6>12/34</h6>
                                        <img className="cart--block--left--image" src={visa} alt=""/>
                                    </div>
                                </div>
                                <div className="cart--box">
                                    <h1>Добавить карту</h1>
                                    <p>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручну</p>

                                    <button>Добавить карту</button>
                                    <h3>Для проверки карты будет снята минимальная сумма в размере 1$. Сумма
                                        будет <br/> возвращена
                                        вам а течении 48 часов</h3>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/*коментарии*/}
                    <section id="Comment" className={toggleState === 4 ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="comment" >
                                <h1>Коментарии</h1>
                                <div className="comment--block">
                                    <img src={logo} alt=""/>
                                    <div className="comment--block--box">
                                        <h2>Осмонова Нурай</h2>
                                        <h3>Урок супер</h3>
                                        <p>Редактировать <span>Удалить</span></p>
                                    </div>
                                </div>
                                <div className="comment--block">
                                    <img src={logo} alt=""/>
                                    <div className="comment--block--box">
                                        <h2>Осмонова Нурай</h2>
                                        <h3>Было классно.Все понятно и досканально описано каждая деталь. Я вообще не
                                            желею что купила эти курсы \</h3>
                                        <p>Редактировать <span>Удалить</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*мои покупки*/}
                    <section id="Purchases" className={toggleState === 5 ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="purchases" >
                                <h1>Мои покупки</h1>
                                <div className="purchases--block">
                                    <p>Дата </p>
                                    <p>Описание</p>
                                    <p>Цена</p>
                                </div>
                                <hr/>

                                <div className="purchases--block">
                                    <p>02.05.2022 г. </p>
                                    <p>Год</p>
                                    <p>545 $</p>
                                </div>
                                <hr/>

                                <div className="purchases--block">
                                    <p>Дата </p>
                                    <p>Описание</p>
                                    <p>Цена</p>
                                </div>
                                <hr/>

                            </div>
                        </div>
                    </section>
                    {/*подписки*/}
                    <section id="Subscriptions" className={toggleState === 3 ? ' active-content' : 'content'}  >
                        <div className="container">
                            <div className="subscriptions">
                                <h1>Подписки</h1>
                                <div className="subscriptions--text">
                                    <div className="subscriptions--text--left">
                                        <h2>Тариф: </h2>
                                        <h2>Статус :</h2>
                                        <h2>Карта :</h2>
                                        <h2>Действует до :</h2>
                                    </div>
                                    <div className="subscriptions--text--right">
                                        <h3>Год </h3>
                                        <h3>Начальная</h3>
                                        <h3>220.00 $</h3>
                                        <h3>5106 21 ХХ ХХХХ 4186</h3>
                                        <h3>30 . 09. 2022 г</h3>
                                    </div>
                                </div>
                                <h1>Другие тарифы</h1>
                                <div className="subscriptions--block">
                                    <div className="subscriptions--block--left">
                                        <h6>Месяц +</h6>
                                        <h2>105,00 $</h2>
                                        <div className="subscriptions--block--left--in">Ежемесячно</div>
                                        <p>&#10004; Все статьи</p>
                                        <button>Оформить подписку</button>
                                    </div>
                                    <div className="subscriptions--block--left">
                                        <h6>Год +</h6>
                                        <h2>585,00 $</h2>
                                        <div className="subscriptions--block--left--in">Ежегодно</div>
                                        <p>&#10004; Все статьи</p>
                                        <p>&#10004; Все мастер классы</p>
                                        <p>&#10004; 6 новых статей каждый месяц</p>
                                        <p>&#10004; Доступ к курсу “DevOps - инженер”</p>
                                        <button>Оформить подписку</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/*личные данные*/}
                    <section id="Comment" className={profil === 'a' ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="comment" >
                                <h1>Личные данные</h1>
                                <div className="comment--input">
                                    <div className="comment--input--left">
                                        <p>Личные данные</p>
                                        <input type="text" placeholder="Осмонова Нурай"/>
                                        <p>Номер телефон</p>
                                        <input type="tel" placeholder="+996  500 99 80 88"/>
                                        <p>Email</p>
                                        <input type="email" placeholder="osmonovanurai05@gmail.com"/>
                                        <p>Пол</p>
                                        <div className="comment--input--left--block">
                                            <button><input type="checkbox"/>Мужской</button>
                                            <button><input type="checkbox"/>Женский</button>
                                        </div>
                                    </div>
                                    <div className="comment--input--right">
                                        <div className="comment--input--right--sel">
                                            <p>Дата рождения</p>
                                            <select>
                                                <option>
                                                    <p>31</p>
                                                </option>
                                            </select>
                                            <select>
                                                <option>
                                                    <p>Август</p>
                                                </option>
                                            </select>
                                            <select>
                                                <option>
                                                    <p>2006</p>
                                                </option>
                                            </select>
                                        </div>
                                        <p>Страна</p>
                                        <div className="comment--input--right--option">
                                            <select>
                                                <option>
                                                    <p>Киргизия</p>
                                                </option>
                                            </select>
                                            <p>Город</p>
                                            <select>
                                                <option>
                                                    <p>Бишкек</p>
                                                </option>
                                            </select>
                                            <p>Род деятельности</p>
                                            <select>
                                                <option>
                                                    <h3>Студент</h3>
                                                </option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*платежные карты*/}
                    <section id="Cart" className={profil === 'b' ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="cart" >
                                <h1>Платежные карты</h1>
                                <div className="cart--block">
                                    <div className="cart--block--left">
                                        <h2>Visa Classic</h2>
                                        <div className="cart--block--left--visa">
                                            <img src={chip} alt=""/>
                                            <img src={anten} alt=""/>
                                        </div>
                                        <p>4000 1234 5678 9010</p>
                                        <h6>12/34</h6>
                                        <img className="cart--block--left--image" src={visa} alt=""/>
                                    </div>
                                    <div className="cart--block--left">
                                        <h2>Visa Classic</h2>
                                        <div className="cart--block--left--visa">
                                            <img src={chip} alt=""/>
                                            <img src={anten} alt=""/>
                                        </div>
                                        <p>4000 1234 5678 9010</p>
                                        <h6>12/34</h6>
                                        <img className="cart--block--left--image" src={visa} alt=""/>
                                    </div>
                                </div>
                                <div className="cart--box">
                                    <h1>Добавить карту</h1>
                                    <p>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручну</p>

                                    <button>Добавить карту</button>
                                    <h3>Для проверки карты будет снята минимальная сумма в размере 1$. Сумма
                                        будет <br/> возвращена
                                        вам а течении 48 часов</h3>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/*коментарии*/}
                    <section id="Comment" className={profil === 'c' ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="comment" >
                                <h1>Коментарии</h1>
                                <div className="comment--block">
                                    <img src={logo} alt=""/>
                                    <div className="comment--block--box">
                                        <h2>Осмонова Нурай</h2>
                                        <h3>Урок супер</h3>
                                        <p>Редактировать <span>Удалить</span></p>
                                    </div>
                                </div>
                                <div className="comment--block">
                                    <img src={logo} alt=""/>
                                    <div className="comment--block--box">
                                        <h2>Осмонова Нурай</h2>
                                        <h3>Было классно.Все понятно и досканально описано каждая деталь. Я вообще не
                                            желею что купила эти курсы \</h3>
                                        <p>Редактировать <span>Удалить</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*мои покупки*/}
                    <section id="Purchases" className={profil === 'd' ? ' active-content' : 'content'} >
                        <div className="container">
                            <div className="purchases" >
                                <h1>Мои покупки</h1>
                                <div className="purchases--block">
                                    <p>Дата </p>
                                    <p>Описание</p>
                                    <p>Цена</p>
                                </div>
                                <hr/>

                                <div className="purchases--block">
                                    <p>02.05.2022 г. </p>
                                    <p>Год</p>
                                    <p>545 $</p>
                                </div>
                                <hr/>

                                <div className="purchases--block">
                                    <p>Дата </p>
                                    <p>Описание</p>
                                    <p>Цена</p>
                                </div>
                                <hr/>

                            </div>
                        </div>
                    </section>
                    {/*подписки*/}
                    <section id="Subscriptions" className={profil === 'e' ? ' active-content' : 'content'}  >
                        <div className="container">
                            <div className="subscriptions">
                                <h1>Подписки</h1>
                                <div className="subscriptions--text">
                                    <div className="subscriptions--text--left">
                                        <h2>Тариф: </h2>
                                        <h2>Статус :</h2>
                                        <h2>Карта :</h2>
                                        <h2>Действует до :</h2>
                                    </div>
                                    <div className="subscriptions--text--right">
                                        <h3>Год </h3>
                                        <h3>Начальная</h3>
                                        <h3>220.00 $</h3>
                                        <h3>5106 21 ХХ ХХХХ 4186</h3>
                                        <h3>30 . 09. 2022 г</h3>
                                    </div>
                                </div>
                                <h1>Другие тарифы</h1>
                                <div className="subscriptions--block">
                                    <div className="subscriptions--block--left">
                                        <h6>Месяц +</h6>
                                        <h2>105,00 $</h2>
                                        <div className="subscriptions--block--left--in">Ежемесячно</div>
                                        <p>&#10004; Все статьи</p>
                                        <button>Оформить подписку</button>
                                    </div>
                                    <div className="subscriptions--block--left">
                                        <h6>Год +</h6>
                                        <h2>585,00 $</h2>
                                        <div className="subscriptions--block--left--in">Ежегодно</div>
                                        <p>&#10004; Все статьи</p>
                                        <p>&#10004; Все мастер классы</p>
                                        <p>&#10004; 6 новых статей каждый месяц</p>
                                        <p>&#10004; Доступ к курсу “DevOps - инженер”</p>
                                        <button>Оформить подписку</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                </div>
            </div>
        </div>


    );
};

export default Profil;