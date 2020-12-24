import React from 'react';
const NewTaskForm = () => {
    const searchText = "What needs to be done?";
    return (
    <header className = 'header'>
         <h1>todos</h1> 
         <input className ='new-todo' placeholder = {searchText}></input>
    </header>)
}

export default NewTaskForm