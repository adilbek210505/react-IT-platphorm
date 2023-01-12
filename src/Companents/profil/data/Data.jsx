import React from 'react';

const Data = () => {
    return (
        <section id="Comment">
            <div className="container">
                <div className="comment">
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
    );
};

export default Data;