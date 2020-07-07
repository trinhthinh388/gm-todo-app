import React from 'react';
import TodoItem from './TodoItem';
import generateHash from 'random-hash';

export default function TodoList(props){

    const {list, UpdateList} = props;

    function updateItem(content, done, index){
        let _list = list.slice();
        _list.forEach((item, _index) =>{
            if(_index === index){
                if(content)
                    item.content = content;
                item.done = done;
                return;
            }
        });
        UpdateList(_list);
    }
    
    function deleteItem(content, index){

    }

    return(
        <div className="todo__list container">
            <div className="row flex-column justify-content-center">
                {
                    props.list.map((item, index) => {
                        return <TodoItem key={`todo-item-${index}`} index={index} UpdateItem={updateItem} content={item.content} check={item.done}/>
                    })
                }
            </div>
        </div>
    );
}