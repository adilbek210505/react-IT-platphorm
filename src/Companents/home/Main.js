import React, {useContext, useState} from "react";
import photo from "../image/main--photo.png"
import java from "../image/main--photo--java.png"
import {FaRegAddressBook} from "react-icons/fa";
import what from "../image/main--photo--what.png"
import main from "../image/main-photo--all.png"
import {NavLink, useNavigate} from "react-router-dom";
import {PageContext} from "../../context";
import {useForm} from 'react-hook-form'
import {AiOutlineDown} from "react-icons/ai";
import Accordion from "./accordion/Accordion";
const Main = () => {
    const [active , setActive] = useState('')
    const {page } = useContext(PageContext)
    const navigate = useNavigate()
    const {
        register,
        formState :{
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"})
    const onSubmit = (data)=>{
        alert(JSON.stringify(data))
        reset()}
    return (
        <section id="Mein">
            <div className="container">
                <div className="main">
                    <div className="main--left">
                        <h1>IT образовательная <br/> платформа </h1>
                        <p>Наша образовательная платформа вам <br/>даст необходимые практические <br/>знания для
                            адаптации в IT-сфере.</p>
                    </div>
                    <div className="main--right">
                        <img className="main--right--image" src={photo} alt=""/>
                    </div>
                </div>
                <div className="articles">
                    <h1>Последние статьи</h1>
                    <div className="articles--group">
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
                            <img className="articles--group--block--image" src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div></div>
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=> navigate(page ? '/detailArticle' : '/afterArticle')} className="articles--group--block">
                            <img src={java} alt=""/>
                            <div className="articles--group--block--text">
                                <h6>Статьи</h6>
                                <p>Мы подготовили подборку самых популярных курсов по направлению <br/>Java в IBS
                                    Training Center. </p>
                                <div className="articles--group--block--text--link">
                                    <a href="#"><FaRegAddressBook/>Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to={'/allArticle'}><button>Показать больше</button></NavLink>
                </div>
                <div className="subscribe">
                    <div className="subscribe--group">
                        <div className="subscribe--group--left">
                            <h1>Подпишитесь сейчас за 19,00 $ / мес</h1>
                            <p>И получите доступ к материалам и кейсам, а также к новым <br/> мастер-классам </p>
                        </div>
                        <div className="subscribe--group--right">
                            <a href="#">
                                <button>Оформить подписку</button>
                            </a>
                            <button>Подробнее о пакетах</button>
                        </div>
                    </div>
                </div>
                <div className="question">
                    <div className="question--left">
                        <h1>Остались <br/> вопросы?</h1>
                        <img src={what} alt=""/>
                    </div>
                    <div className="question--right" style={{width : '100%', maxWidth: '700px' , margin : 'auto' , color : 'white'}}>
                        <Accordion title='Что такое зарезервированные слова в программировании?' active={active} setActive={setActive}/>
                        <Accordion title='Могу ли я отказаться от автопродления подписки' active={active} setActive={setActive}/>
                        <Accordion title='Могу ли я вернуть деньги' active={active} setActive={setActive}/>
                        <Accordion title='Какие направление в IT самые актуальные' active={active} setActive={setActive}/>
                        <Accordion title='Нужно ли учить другой язык программирования, перед изучением языка С++?' active={active} setActive={setActive}/>
                        <Accordion title='Платформа обнавляется?' active={active} setActive={setActive}/>
                        <Accordion title='Как я могу получить доступ ка всем курсом' active={active} setActive={setActive}/>
                    </div>
                </div>
                <div className="application" >
                    <div className="application--left">
                        <h1>Оставить заявку</h1>
                        <p>Заполните краткую форму с ключевым <br/> вопросами, и мы подготовимся к разговору с <br/>вами
                        </p>
                    </div>
                    <div className="application--right">
                        <form onSubmit={handleSubmit(onSubmit)} className="application--right--farm">
                            <h1>ФИО*</h1>
                            <input {...register('firstName', {
                                required: 'поле обьзательна к заполнению',
                            })} type="text"/>
                            <div>{errors ?.firstName && <p style={{color: "red"}}>{errors?.firstName?.message || 'ERROR!'}</p>}</div>


                            <h1>Номер телефон*</h1>
                            <input {...register('phoneNumber', {
                                required: 'поле обьзательна к заполнению',
                                pattern: /\d+/g,
                            })} type="text"/>
                            <div>{errors?.phoneNumber && <p style={{color: 'red'}}>{errors?.phoneNumber?.message || 'Только цифры!'}</p>}</div>

                            <h1>Email*</h1>
                            <input {...register('eMail', {
                                required:  'поле обьзательна к заполнению',
                                pattern: /[A-Za-z]{3}/
                            })} type="email"/>
                            <div>{errors?.eMail && <p style={{color: 'red'}}>{errors?.eMail?.message || 'ERROR!'}</p>}</div>
                            <button disabled={!isValid}>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Main;