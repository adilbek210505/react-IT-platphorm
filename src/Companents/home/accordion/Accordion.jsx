import React from 'react';
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";

const Accordion = ({title , active , setActive}) => {
    return (
        <div className='container'>
            <div className="accordion" style={{margin: '10px 0 30px 0'}}>
                <div className="accordionHeading" style={{display : 'flex', alignItems:"center",justifyContent:"space-between"}}>
                    <p>{title}</p>
                    <span onClick={() => setActive(title)}>
                        {active === title ? <AiOutlineUp className="icon"/>: <AiOutlineDown className="icon"/>}
                    </span>
                </div>
                <div className={(active === title ? 'show' : '') + 'accordionContent'} >
                    <p>Зарезервированные или ключевые слова – это слова и выражения,
                        которые имеют предопределенные значения и не могут использоваться
                        при написании кода для иных целей, например, для именования переменных.
                        Примеры распространенных ключевых слов в языках программирования – это конструкции
                        if/then/else или различные варианты циклов. Вроде for и while.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;