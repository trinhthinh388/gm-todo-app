import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';



export default function TodoInput(props){
    
    const [inputValue, setInputValue] = useState("");

    function onInputKeyDownHandle(e){
        if(!inputValue || inputValue === "")
            return;
        if(e.key === 'Enter'){
            let newItem = {
                content: inputValue,
                done: false,
            }
            props.UpdateList([...props.list, ...[newItem]]);
            setInputValue("");
        }
    }

    function onChangeHandle(e){
        setInputValue(e.target.value);
    }

    function onToggleButtonClick(){
        let _list = props.list.slice();
        let value = _list[0].done;
        
        _list.forEach(item =>{
            item.done = !value;
        });
        props.UpdateList(_list);
    }


    return(
        <div className="app__input d-flex align-items-center col-lg-6">
            <FontAwesomeIcon onClick={onToggleButtonClick} className="input__toggle" icon={faChevronDown} size="2x"/>
            <input type="text" value={inputValue} onKeyDown={onInputKeyDownHandle} onChange={onChangeHandle} placeholder="What needs to be done?"></input>
        </div>
    );
}