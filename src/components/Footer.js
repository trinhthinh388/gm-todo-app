import React from 'react';
import className from 'classnames';

export default function Footer(props){
    const listReducer = (accumulator, currentValue) => accumulator + (currentValue.done === false ? 1 : 0);
    function onClearCompleteHandle(){
        props.UpdateList(props.list.filter(item =>{
            return item.done === false;
        }))
    }

    function onFilterClickHandle(e){
        props.setFilterState(e.currentTarget.getAttribute("data-filter"));
    }
    return(
        <div id="footer" className="col-lg-6 mx-auto d-flex flex-row justify-content-between align-items-center">
            <div className="footer__list-count">{
            props.list.reduce(listReducer, 0)
        } items left</div>
            <div className="footer__filter">
                <button onClick={onFilterClickHandle} data-filter="All" type="button" className={className("btn", {"active": props.filterState === "All"})}>All</button>
                <button onClick={onFilterClickHandle} data-filter="Active" type="button" className={className("btn", {"active": props.filterState === "Active"})}>Active</button>
                <button onClick={onFilterClickHandle} data-filter="Completed" type="button" className={className("btn", {"active": props.filterState === "Completed"})}>Completed</button>
            </div>
            <div onClick={onClearCompleteHandle} className="footer__clear-btn">Clear completed</div>
        </div>
    );
}