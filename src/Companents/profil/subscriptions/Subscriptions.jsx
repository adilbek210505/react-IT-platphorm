import React from 'react';

const Subscriptions = () => {
    return (
        <section id="Subscriptions">
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
                            <h3>30 . 09.  2022 г</h3>
                        </div>
                    </div>
                    <h1>Другие тарифы</h1>
                    <div className="subscriptions--block">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscriptions;