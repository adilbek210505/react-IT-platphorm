import React from 'react';
import logo from "../../image/chip--cart--logo.svg"
const Comment = () => {
    return (
        <section id="Comment">
            <div className="container">
                <div className="comment">
                    <h1>Коментарии</h1>
                    <div className="comment--block">
                        <img src={logo} alt=""/>
                        <div className="comment--block--box">
                            <h2>Осмонова Нурай</h2>
                            <h3>Урок супер</h3>
                            <p>Редактировать <span>Удалить</span> </p>
                        </div>
                    </div>
                    <div className="comment--block">
                        <img src={logo} alt=""/>
                        <div className="comment--block--box">
                            <h2>Осмонова Нурай</h2>
                            <h3>Было классно.Все понятно и досканально описано каждая деталь. Я вообще не желею что купила эти курсы \</h3>
                            <p>Редактировать <span>Удалить</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comment;