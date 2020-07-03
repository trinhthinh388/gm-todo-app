import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

export default function TodoInput(){
    const [todosList, setTodosList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function onInputKeyDownHandle(e){
        if(e.key === 'Enter'){
            setTodosList([...todosList, ...[inputValue]]);
            setInputValue("");
            console.log(todosList);
        }
    }

    function onChangeHandle(e){
        setInputValue(e.target.value);
    }
    return(
        <div className="app__input d-flex align-items-center col-lg-6">
            <FontAwesomeIcon className="input__toggle" icon={faChevronDown} size="2x"/>
            <input type="text" value={inputValue} onKeyDown={onInputKeyDownHandle} onChange={onChangeHandle} placeholder="What needs to be done?"></input>
        </div>
    );
}