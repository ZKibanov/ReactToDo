import React from 'react';
import TasksFilter from '../TasksFilter'
const Footer = ({count}) => {
    return (
        <footer className = 'footer'>
        <span className = 'todo-count'>{count} items left</span>
        <TasksFilter />
        <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer