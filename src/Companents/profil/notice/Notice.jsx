import React from 'react';

const Notice = () => {
    return (
        <section id="Notice">
            <div className="container">
                <div className="notice">
                    <h1>Уведомлении</h1>
                    <div className="notice--block">
                        <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.58602 1.67285H22.3993C27.146 1.67285 28.3327 2.84618 28.3327 7.52618V18.4729C28.3327 23.1529 27.146 24.3262 22.4127 24.3262H7.58602C2.85268 24.3395 1.66602 23.1662 1.66602 18.4862V7.52618C1.66602 2.84618 2.85268 1.67285 7.58602 1.67285Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <div>
                            <h2>02.05.2022 г</h2>
                            <p>Вы оформили подписку пакет “год” </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notice;