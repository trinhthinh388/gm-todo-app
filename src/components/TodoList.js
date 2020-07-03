import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props){

    return(
        <div className="todo__list container">
            <div className="row flex-column justify-content-center">
                {
                    props.list.map(item => {
                        return <TodoItem content={item.content} check={item.done}/>
                    })
                }
            </div>
        </div>
    );
}