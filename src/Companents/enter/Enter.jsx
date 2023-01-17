import React, {useContext, useState} from 'react';
import logo from '../image/logo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {BsEyeSlashFill} from "react-icons/bs";
import {FiEye} from "react-icons/fi";
import {PageContext} from "../../context";


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
    return (
        <div id='follow' style={{display: getenter ? 'block' : 'none'}}>
            <div className="follow">
                <NavLink to={'/'}><img src={logo} className='hero--img' alt=""/></NavLink>
                <form action="">
                    <p className='Enter--p'>E mail*</p>
                    <input className='Enter--fieldset' type="text"/>
                    <p className='Enter_password'>Пароль*</p>
                    <input className='Enter--fieldset' type={password ? 'text' : 'password'}/>
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