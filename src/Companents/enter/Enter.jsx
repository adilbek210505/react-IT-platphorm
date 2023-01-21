import React, {useContext, useState} from 'react';
import logo from '../image/logo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {BsEyeSlashFill} from "react-icons/bs";
import {FiEye} from "react-icons/fi";
import {PageContext} from "../../context";
import {useForm} from "react-hook-form";


const Enter = () => {
    const [getenter, setEnter] = useState(true)
    const [password, setPassword] = useState(false)
    const navigate = useNavigate()
    const {page, setPage} = useContext(PageContext)
    const changePassword = () => {
        setPassword(!password)
    }
    const adil = () => {
        setEnter(!getenter)
        setPage(!page)
        navigate('/')
    }
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
        <div id='follow' style={{display: getenter ? 'block' : 'none'}}>
            <div className="follow">
                <NavLink to={'/'}><img src={logo} className='hero--img' alt=""/></NavLink>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='Enter--p'>E mail*</p>
                    <input {...register('eMail', {
                        required:  'поле обьзательна к заполнению',
                        pattern: /[A-Za-z]{3}/
                    })} className='Enter--fieldset' type="text"/>
                    <div>{errors?.eMail && <p style={{color: 'red'}}>{errors?.eMail?.message || 'ERROR!'}</p>}</div>


                    <p className='Enter_password'>Пароль*</p>
                    <input {...register('password', {
                        required: 'поле обьзательна к заполнению',
                    })} className='Enter--fieldset' type={password ? 'text' : 'password'}/>
                    <div>{errors ?.password && <p style={{color: "red"}}>{errors?.password?.message || 'ERROR!'}</p>}</div>
                    <h1 onClick={changePassword} className='Enter--check'>{password ? <FiEye/> : <BsEyeSlashFill/>}</h1>
                </form>
                <div className="follow--button">
                    <button className='enter-btn' onClick={adil}>Войти</button>
                    <h4 className='enter-h4'>Забыли пароль?</h4>
                </div>
            </div>
        </div>
    );
};

export default Enter;