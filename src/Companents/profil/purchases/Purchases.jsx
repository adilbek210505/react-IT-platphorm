import React from 'react';

const Purchases = () => {
    return (
        <section id="Purchases">
            <div className="container">
                <div className="purchases">
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
    );
};

export default Purchases;