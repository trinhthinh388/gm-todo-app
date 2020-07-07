import React from 'react';

export default function Footer(props){
    const listReducer = (accumulator, currentValue) => accumulator + (currentValue.done === false ? 1 : 0);
    function onClearCompleteHandle(){
        props.UpdateList(props.list.filter(item =>{
            return item.done === false;
        }))
    }
    return(
        <div id="footer" className="col-lg-6 mx-auto d-flex flex-row justify-content-between align-items-center">
            <div className="footer__list-count">{
            props.list.reduce(listReducer, 0)
        } items left</div>
            <div className="footer__filter">
                <button data-filter="All" type="button" className="btn">All</button>
                <button data-filter="Active" type="button" className="btn">Active</button>
                <button data-filter="Completed" type="button" className="btn">Completed</button>
            </div>
            <div onClick={onClearCompleteHandle} className="footer__clear-btn">Clear completed</div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
        </div>
    );
}