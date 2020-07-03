import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

export default function TodoInput(props){
    
    const [inputValue, setInputValue] = useState("");

    function onInputKeyDownHandle(e){
        if(e.key === 'Enter'){
            let newItem = {
                content: inputValue,
                done: false,
            }
            props.UpdateList([...props.list, ...[newItem]]);
            setInputValue("");
            console.log(props.list);
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