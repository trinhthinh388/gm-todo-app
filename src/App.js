import React, {useState, useEffect} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default function App(){
    const [todosList, setTodosList] = useState([]);

    function UpdateList(newList){
        setTodosList(newList);
    }
    return(
        <div id="app" className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="app__logo">todos</h1>
            <div className="app_todo-container container">
                <div className="row flex-column">
                    <TodoInput list={todosList} UpdateList={UpdateList}></TodoInput>
                    <TodoList list={todosList} UpdateList={UpdateList}/>
                    <Footer list={todosList} UpdateList={UpdateList}/>
                </div>
            </div>
        </div>
    )
}