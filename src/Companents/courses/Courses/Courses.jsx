import React from 'react';

const Courses = () => {
    return (
        <div className='courses'>
            <div className="container">
                <h6>курсы до покупки </h6>
                <h1 className="nav-h">Зарегистрироваться на курс</h1>
                <div className="nav">

                    <div className="nav--left">
                        <h5>Курс</h5>
                        <h2>Frontend-разработчик</h2>
                        <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. </p>
                        <hr/>
                        <h5>Лектор</h5>
                        <h2>Евгений Александрович</h2>
                        <p>Frontend разработчик</p>
                        <hr/>
                        <div className="nav--left--group">
                            <div className="nav--left--group--left">
                                <h3>В курс входит </h3>
                                <h4>3 модулей 60материалов</h4>
                            </div>
                            <div className="nav--left--group--right">
                                <h3>Доступ</h3>
                                <h4>Навсегда</h4>
                            </div>
                        </div>
                        <hr/>
                        <h3>* - материалы включают уроки, тесты и задания. Некоторые материалы могут быть недоступны при самостоятельном обучении. </h3>
                    </div>
                    <div className="nav--right">
                        <p>Ф.И.О*</p>
                        <input type="text"/>
                        <p>Телефон*</p>
                        <input type="tel"/>
                        <p>E mail*</p>
                        <input type="email"/>
                        <div className="nav--right--blocks">
                            <h2>Выберите платежную карту</h2>
                            <div className="nav--right--blocks--block">
                                <button>Visa</button>
                                <button>MasterCard</button>
                            </div>
                        </div>
                        <p>Номер карты *</p>
                        <input type="text"/>
                        <div className="nav--right--group">
                            <div className="nav--right--group--left"><p>ММ/ГГ *</p><input className="nav--right--group--left--iT" type="text"/></div>
                            <div className="nav--right--group--right"><p>CVC *</p><input type="text"/></div>
                        </div>
                        <div className="nav--right--box">Оплатить 225.00$</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;