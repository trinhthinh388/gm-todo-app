import React from 'react';
import TodoInput from './components/TodoInput';


export default function App(){
    return(
        <div id="app" className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="app__logo">todos</h1>
            <div className="app_todo-container container">
                <div className="row">
                    <TodoInput></TodoInput>
                </div>
            </div>
        </div>
    )
}