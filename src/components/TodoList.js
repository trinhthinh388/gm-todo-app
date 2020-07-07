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
    
    function deleteItem(index){
        let _list = list.slice();
        delete _list[index];
        _list = [..._list.slice(0, index),... _list.slice(index + 1, _list.length)];
        console.log(_list);
        UpdateList(_list);
    }

    return(
        <div className="todo__list container">
            <div className="row flex-column justify-content-center">
                {
                    props.list.map((item, index) => {
                        return <TodoItem key={`todo-item-${index}`} index={index} deleteItem={deleteItem} UpdateItem={updateItem} content={item.content} check={item.done}/>
                    })
                }
            </div>
        </div>
    );
}