import React from 'react';
import  '../views/Main.css';
import TodoItem from '../views/TodoItem';
import todosData from '../db/todosData';

function Main() {
    const TodoItems = todosData.map( items => <TodoItem key = {todosData.id} todosData = {items} /> );
    return(
        
        <div className="todo-list">
            {TodoItems}
        </div>
    )
}

export default Main;