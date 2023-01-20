import React from 'react';
import article from "../../image/article-img.png"
import comment from "../../image/comment--img.svg"
import commentOne from "../../image/comment--k.svg"
import {FaRegAddressBook} from "react-icons/fa";


const AfterArticle = () => {
    return (
        <div id="afterArticle">
            <div className="container">
                <div className="afterArticle">
                    <p>Главная / <span>Статья / Мы подготовили...</span></p>
                    <h6>11.09.2022</h6>
                    <h3>Мы подготовили подборку самых популярных <br/>
                        курсов по направлению Java в IBS Training Center.
                    </h3>
                    <h6>
                        Когда-то ни один крупный проект не обходился без применения <br/>
                        функционального и асинхронного программирования. Эти подходы до сих пор <br/>
                        популярны за счет своих преимуществ: они помогают выдерживать большие <br/>
                        нагрузки и писать эффективный код, не теряя в скорости разработки.
                    </h6>
                    <img src={article} alt=""/>
                    <div className="afterArticle--inform">
                        <h5>
                            <hr/>
                            Какие существуют конфигурации для Spring Framework 5;
                        </h5>
                        <h5>
                            <hr/>
                            Как работать с REST-сервисами и документацией при помощи Swagger.
                        </h5>
                        <h5>
                            <hr/>
                            Что такое бины и как с ними работать;
                        </h5>
                        <h5>
                            <hr/>
                            Что такое Концепция IoC;
                        </h5>
                        <h5>
                            <hr/>
                            Примеры использования AOP;
                        </h5>
                    </div>
                    <h4>
                        Ищите способы ускорить проектирование приложений? Используйте Spring Framework 5. Этот <br/>
                        легковесный каркас с открытыми исходными текстами не связан с конкретной моделью <br/>
                        программирования и поэтому универсален. Его можно использовать не только для крупных <br/>
                        корпоративных кейсов, но и для небольших проектов.
                    </h4>
                    <h4>
                        Интересно? Присоединяйтесь к нашему курсу и узнайте об основных модулях этого <br/>
                        фреймворка, вариантах их использования и как Spring Framework работает совместно <br/>
                        с другими технологиями.
                    </h4>
                    <h4>
                        Если вы уже знакомы с Spring Framework 5 и хотите углубить свои знания, то этот курс для вас!
                        Вместе с <br/>
                        IBS Training Center вы изучите темы, необходимые для профессионального применения Spring <br/>
                        Framework на практике. Вы познакомитесь со Spring REST, HATEOAS и CORS, научитесь
                        использовать <br/>
                        сериализацию и ограничение данных, освоите тонкости применения аннотации @Transactional <br/>
                        и оптимистических транзакций.
                    </h4>
                    <h4>
                        Также вас ждет много практики, разбор реальных кейсов и другие <br/>
                        важные темы:
                    </h4>
                    <div className="afterArticle--inform">
                        <h5>
                            <hr/>
                            JWT-авторизация;
                        </h5>
                        <h5>
                            <hr/>
                            Практическое применение реактивного программирования с использованием WebFlux;
                        </h5>
                        <h5>
                            <hr/>
                            Тестирование Spring-сервисов
                        </h5>
                        <h5>
                            <hr/>
                            Планировщик задач и Actuator
                        </h5>
                    </div>
                    <h1>Комментарии</h1>

                    <div className="afterArticle--block">
                        <div className="afterArticle--block__comment">
                            <input type="text" placeholder="Ваш комментарий" className="afterArticle--block__input"/>

                        </div>
                        <button>Отправить</button>
                    </div>

                    <div className="afterArticle--comments">

                        <div className="afterArticle--comments__one">
                            <img src={comment} alt=""/>
                            <div className="afterArticle--comments__one--text">
                                <h4>Осмонова Нурай <span>   /  Около минуты назад</span></h4>
                                <h5>Очень понравились уроки. Все более чем понятно! </h5>
                                <h6>Ответить </h6>
                            </div>

                        </div>
                        <div className="afterArticle--comments__two">
                            <img src={commentOne} alt=""/>
                            <div className="afterArticle--comments__two--text">
                                <h4>Эгембердиева Кунсулуу <span>  /  24.10.2021</span></h4>
                                <h5>
                                    Классный урок, первый раз вижу такое подробное <br/>
                                    объяснение всего происходящего
                                </h5>
                                <h6>Ответить </h6>
                            </div>

                        </div>
                        <div className="afterArticle--comments__three">
                            <div className="afterArticle--comments__three--circle">T</div>
                            <div className="afterArticle--comments__three--text">
                                <h4>Таалай Бирдемке<span> /  24.10.2021</span></h4>
                                <h5>Как мне кажется, в конце видео, необходимо было сказать о том, <br/>
                                    что информация - это то(в данном случае число) с помощью чего <br/>
                                    можно устранить некую неопределенность(неизвестность) А так <br/>
                                    вроде все замечательно.
                                </h5>
                                <h6>Ответить </h6>
                            </div>

                        </div>
                        <div className="afterArticle--comments__one">
                            <img src={comment} alt=""/>
                            <div className="afterArticle--comments__one--text">
                                <h4>Осмонова Нурай <span>   /  Около минуты назад</span></h4>
                                <h5>Мой первый день в мире программирования ✨ Первый <br/>
                                    ролик 😊 Вы просто гениально объясняете, продолжаю <br/>
                                    смотреть 😉 Спасибо!
                                </h5>
                                <h6>Ответить </h6>
                            </div>

                        </div>

                        <button>Смотреть все</button>

                    </div>

                    <h1>Другие статьи </h1>

                    <div className="afterArticle--group">
                        <div className="afterArticle--group__right">
                            <h6>Статьи</h6>
                            <p className="java">Мы подготовили подборку <br/>
                                самых популярных курсов <br/>
                                по направлению Java в IBS <br/>
                                Training Center.
                            </p>
                            <div className="afterArticle--group__right--link">
                                <a href="#"><FaRegAddressBook/>Читать</a>
                                <a href="#">01.02.2022</a>
                            </div>
                        </div>
                        <div className="afterArticle--group__right">
                            <h6>Статьи</h6>
                            <p className="java">Мы подготовили подборку <br/>
                                самых популярных курсов <br/>
                                по направлению Java в IBS <br/>
                                Training Center.
                            </p>
                            <div className="afterArticle--group__right--link">
                                <a href="#"><FaRegAddressBook/>Читать</a>
                                <a href="#">01.02.2022</a>
                            </div>
                        </div>
                        <div className="afterArticle--group__right">
                            <h6>Статьи</h6>
                            <p className="java">Мы подготовили подборку <br/>
                                самых популярных курсов <br/>
                                по направлению Java в IBS <br/>
                                Training Center.
                            </p>
                            <div className="afterArticle--group__right--link">
                                <a href="#"><FaRegAddressBook/>Читать</a>
                                <a href="#">01.02.2022</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AfterArticle;