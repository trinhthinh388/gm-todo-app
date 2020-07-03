import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";

export default function TodoItem(props){
    const [check, setCheck] = useState(props.checked);

    function onClickHandle(e){
        setCheck(!check);
        console.log(check);
    }
    return(
        <div className="mx-auto list__item d-flex flex-row align-items-center col-lg-6">
            <div onClick={onClickHandle}  className={classNames("item__circle-check", {"circle--focus": check})}>
                <FontAwesomeIcon className={classNames({"check--display": check})} icon={faCheck} color="#28A745" size="2x"/>
            </div>
            <div className="item__content">{props.content}</div>
            <FontAwesomeIcon className="item__delete" icon={faTimes} color="#DC3545" size="2x"/>
        </div>
    );
}