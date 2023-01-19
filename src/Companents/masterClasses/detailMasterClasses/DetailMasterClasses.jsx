import React from 'react';
import programm from '../../image/programm.detail.png'
import person from '../../image/person.detail.png'

const DetailMasterClasses = () => {
    return (
        <div className='detailMasterClasses'>
            <div className='container'>
            {/*мастер классы до подписки*/}
            <section id='detail'>
                <div className='detail'>
                    <div className='class'>
                    <p>Главная / Мастер классы  <span>/ Реактивное программирование на Java</span></p>
                    </div>
                    <div className='java'>
                        <div className='program'>
                            <h2>Реактивное программирование на Java : как, зачем и стоит ли?  Часть 1 </h2>
                            <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции </p>
                            <button>Купить мастер-класс за 46$</button>
                        </div>
                        <div className='access'>
                           <div className='access--6'>
                               <p>Доступ: </p>
                               <span>6 недель</span>
                           </div>
                            <div className='access--5'>
                                <p>В мастер-класс входит: </p>
                                <span>5 уроков</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='global'>
                <div className='dd'>
                <div className="dd--which">
                 <p>Что, как и почему</p>
                 </div>
                <div className="dd--mode">
                    <div className='week'>
                        <div className="week--titles">
                            <h1>О МАСТЕР-КЛАССЕ</h1>
                            <p>В режиме мастер-класса он продемонстрировал, почему так важен неблокирующий ввод-вывод, в чем минусы классической многопоточности, в каких ситуациях нужна реактивность, и что она может дать. А еще описал недостатки реактивного подхода.</p>
                            <button>Купить мастер-класс </button>
                        </div>
                      <div className='repeat'>
                    <div className='repeat--all'>
                        <p>Доступ: </p>
                        <span>6 недель</span>
                    </div>
                    <div className='repeat--all'>
                        <p>Доступ: </p>
                        <span>6 недель</span>
                    </div>
                      </div>
                    </div>

                    <div className="texts">
                        <h5>Переходите к видеоурокам, что бы научится: </h5>
                        <div className="texts--p">
                            <div className="dote"></div>
                            <p>Чтению  файла (blocked on reading file);
                            </p>
                        </div>
                    </div>
                    <div className="btn1">
                        <button>Купить мастер-класс </button>
                        <button>Смотреть программу</button>
                    </div>
                </div>
                </div>
            </section>

            <section id="program">
                <div className='reactivity'>
                        <div className='example'>
                            <h1>ПРОГРАММА МАСТЕР-КЛАССА</h1>
                            <button className='blocks'><p>1</p> <span>Reactivity</span></button>
                            <button className='blocks'><p>2</p> <span>Reactive approach</span></button>
                            <button className='blocks'><p>3</p> <span>Observable example</span></button>
                            <button className='blocks'><p>4</p> <span>Implementing and subscribing to an observer</span></button>
                            <button className='blocks'><p>5</p> <span>Reactive Streams spec</span></button>
                            <div className='buy'>
                                <button>Купить мастер-класс </button>
                            </div>
                        </div>
                        <img src={programm} alt="" className='programmer'/>
                    </div>

            </section>

            <section id='front'>
                <div className='front'>
                    <img src="{person}" alt="" className='human'/>
                    <div className='title'>
                        <p>Мастер класс ведет</p>
                        <h3>Евгений Александрович</h3>
                        <span> Frontend developer / Аратор </span>
                    </div>
                </div>
            </section>

                <section id='process'>
                    <div className="process">
                   <div className="education">
                       <h2>Процесс обучения</h2>
                       <p>Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем проходить мастер-класс последовательно, урок за уроком</p>
                   </div>
                       <div className='main'>
                           <div className='react'>
                               <div className='reactive'>
                                   <div className='timetable'>
                                       <div className='block'>
                                           <h3>1</h3>
                                           <h6>Мастер-класс</h6>
                                           <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                                       </div>
                                   </div>
                               </div>
                               <div className='reactive'>
                                   <div className='timetable'>
                                       <div className='block'>
                                           <h3>1</h3>
                                           <h6>Мастер-класс</h6>
                                           <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                                       </div>
                                   </div>
                               </div>
                               <div className='reactive'>
                                   <div className='timetable'>
                                       <div className='block'>
                                           <h3>1</h3>
                                           <h6>Мастер-класс</h6>
                                           <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                                       </div>
                                   </div>
                               </div>
                               <div className='reactive'>
                                   <div className='timetable'>
                                       <div className='block'>
                                           <h3>1</h3>
                                           <h6>Мастер-класс</h6>
                                           <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className='blocks'>
                               <div className='part'>
                                   <h5>Мастер-класс “Реактивное программирование на Java : как, зачем и стоит ли? Часть 1”</h5>
                                   <h2>46,00 $</h2>
                               </div>
                           </div>
                       </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default DetailMasterClasses;