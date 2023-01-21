import React, {useContext, useState, useEffect,useRef} from 'react';
import program from "../../image/program-left--images.png"
import book from "../../image/detailsCourses--mast--image.png"
import star from "../../image/detailsCourses--mast--image--star.png"
import data from "../../image/detailsCourses--mast--image--data.png"
import vladim from "../../image/detailsCourses--mast--image--vladimir.png"
import {PageContext} from "../../../context";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import sliderImg from "../../image/AboutSchool-slider--img.svg";
import slideri from "../../image/AboutSchool-slider-three--img.svg";
import sliderImage from "../../image/AboutSchool-slider-two--img.svg";

const DetailCoureses = () => {



    const {page} = useContext(PageContext)
    const navigate = useNavigate()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }

            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={'detailCourses '}>
            <div className="container">
                <h6>Главная / Наши курсы / Frontend- разработчик</h6>
                <div className="title">
                    <div className="title--left">
                        <h1>Frontend-разработчик</h1>
                        <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                            популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на
                            конференции </p>
                        <button onClick={()=> navigate('/courses')}>Купить курс за 46 $</button>
                    </div>
                    <div className="title--right">
                        <div className="title--right--top">
                            <h2>Доступ:</h2>
                            <h3>Навсегда</h3>
                        </div>
                        <div className="title--right--bottom">
                            <h2>В курс входит:
                            </h2>
                            <h3>3 модулей <br/> 60материалов</h3>
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    <h1>Что, как и почему</h1>
                    <div className="subtitle--group">
                        <div className="subtitle--group--left">
                            <h2>О КУРСЕ</h2>
                            <p>Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки,
                                анимации и даже бесячая реклама.
                                <br/>
                                <br/>
                                Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.
                                <br/>
                                <br/>

                                В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании. Это
                                также одно из самых популярных направлений для фриланса и удаленной работы. Все потому,
                                что в современном мире сайт нужен каждому</p>
                        </div>
                        <div className="subtitle--group--right">
                            <div className="subtitle--group--right--top">
                                <h2>Доступ:</h2>
                                <h3>Навсегда</h3>
                            </div>
                            <div className="subtitle--group--right--bottom">
                                <h2>В курс входит:
                                </h2>
                                <h3>3 модулей <br/> 60материалов</h3>
                            </div>
                        </div>
                    </div>
                    <div className="subtitle--block">
                        <h5>Для кого это </h5>
                        <ul>
                            <li>Для людей с математическим складом ума.</li>
                        </ul>
                        <h5>Вы изучтие</h5>
                        <div className="subtitle--block--text">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Soft skills. Нетехнические навыки</li>
                            </ul>

                            <ul>
                                <li>Кроссплатформенность и кроссбраузерность</li>
                                <li>Управление версиями</li>
                                <li>Тестирование и отладка</li>
                            </ul>
                        </div>

                        <h5>К каким результатам вас может привести этот курс?</h5>
                        <p>С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши мечты и
                            цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы живете той
                            жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы сами для себя
                            создали.
                            <br/>
                            <br/>

                            Ваш новый навык планирования изменит вашу жизнь и| поможет отточить умение выстраивать дела
                            в правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на
                            месяц, потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен
                            позволит вам правильно планировать правильные вещи и увеличить степень контроля над своей
                            жизнью, чтобы сделать её счастливой и успешной.</p>

                        <h5>Учитесь, применяйте полученные на курсе знания и будьте счастливы!</h5>
                        <div className="subtitle--block--btn">
                            <button>Купить курс</button>
                            <button>Смотреть программу</button>
                        </div>


                    </div>
                </div>
                <div className="program">
                    <div className="program--left">
                        <h1>ПРОГРАММА КУРСА</h1>

                        <button>Модуль 1 <p>Reactivity</p></button>
                        <button>Модуль 2 <p>Reactive approach</p></button>
                        <button>Модуль 3 <p>Observable example</p></button>
                        <button>Модуль 4 <p>Implementing and subscribing to an observer
                        </p></button>
                        <button>Модуль 5 <p>Reactive Streams spec</p></button>
                        <button>Модуль 6 <p>Reactive Streams spec</p></button>
                        <div className="program--left--btn">Зарегистрироваться</div>
                    </div>
                    <img src={program} alt=""/>
                </div>
                <div className="masterClass">
                    <div className="masterClass--top">
                        <div className="masterClass--top--block">
                            <img src={book} alt=""/>
                            <h1>100 материалов</h1>
                            <p>Только полезная информация, никакой воды. Применяйте эти знания первыми!</p>
                        </div>
                        <div className="masterClass--top--block">
                            <img src={star} alt=""/>
                            <h1>100% эксклюзив
                            </h1>
                            <p>Курс записан эксклюзивно для нашей платформы</p>
                        </div>
                        <div className="masterClass--top--block">
                            <img src={data} alt=""/>
                            <h1>В любое время, в любом месте</h1>
                            <p>Занимайтесь как вам удобно и где угодно, на своем мобильном или компьютере</p>
                        </div>
                    </div>
                    <div className="masterClass--center">
                        <img src={vladim} alt=""/>
                        <h4>Мастер класс ведет</h4>
                        <h2>Евгений Александрович</h2>
                        <h4> Frontend developer </h4>
                    </div>
                    <div className="masterClass--bottom">
                        <h1>Процесс обучения</h1>
                        <div className="masterClass--bottom--group">

                            <div className="masterClass--bottom--group--block">
                                <h4>1</h4>
                                <h2>Мастер-класс</h2>
                                <h3>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                    материалам</h3>
                            </div>
                            <div className="masterClass--bottom--group--block">
                                <h4>2</h4>
                                <h2>Своё расписание
                                </h2>
                                <h3>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                    материалам</h3>
                            </div>
                            <div className="masterClass--bottom--group--block">
                                <h4>3</h4>
                                <h2>Сообщество
                                </h2>
                                <h3>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                    материалам</h3>
                            </div>
                            <div className="masterClass--bottom--group--block">
                                <h4>4</h4>
                                <h2>Доступ</h2>
                                <h3>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                    материалам</h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="slider">
                    <h1 className="slider--h">Отзывы о нашей школе</h1>
                    <Slider {...settings}>
                        <div className="slider--block">
                            <img src={sliderImg} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                                рекомендую и благодарю!</p>
                            <h4>23.02.2022 г</h4>
                        </div>
                        <div className="slider--block">
                            <img src={slideri} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                                рекомендую и благодарю!</p>
                            <h4>23.02.2022 г</h4>
                        </div>
                        <div className="slider--block">
                            <img src={sliderImage} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                                рекомендую и благодарю!</p>
                            <h4>23.02.2022 г</h4>
                        </div>
                        <div className="slider--block">
                            <img src={sliderImg} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески
                                рекомендую и благодарю!</p>
                            <h4>23.02.2022 г</h4>
                        </div>

                    </Slider>

                </div>
                <div className="FAQ">
                    <h5>FAQ</h5>
                    <h1>Остались вопросы?</h1>
                    <div className="accordion">
                        <div className="l-inner">
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Как мне начать обучение ?                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.</p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Могу ли я отказаться от автопродления подписки                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Могу ли я вернуть деньги                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                            <details className="p-section-faq__item p-faq js-faq-details">
                                <summary className="p-faq__question js-faq-question">
                                    Какие направление в IT самые актуальные                                    <span className="p-faq__icon"></span>
                                </summary>
                                <div className="p-faq__answer js-faq-answer">
                                    <p className="p-faq__answer-inner">
                                        Зарезервированные или ключевые слова – это слова и
                                        выражения, которые имеют предопределенные значения и не могут
                                        использоваться при написании кода для иных целей,
                                        например, для именования переменных. Примеры  распространенных ключевых
                                        слов в языках программирования <br/>
                                        – это конструкции if/then/else или различные варианты циклов. <br/> Вроде for и
                                        while. </p>
                                </div>
                                <hr/>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCoureses;