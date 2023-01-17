import React from 'react';
import chip from "../../image/chip--cart.svg"
import anten from "../../image/chip--cart--anten.svg"
import visa from "../../image/chip--cart--visa.svg"
const Cart = () => {
    return (
        <section id="Cart">
            <div className="container">
                <div className="cart">
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
                        <h3>Для проверки карты будет снята минимальная сумма в размере 1$. Сумма будет <br/> возвращена
                            вам а течении 48 часов</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cart;