import React from 'react';
import Task from '../Task'
const TaskList = ({tasks}) => {
   const renderedTasks = tasks.map((item)=>{
		const {id,...itemProps} = item;
		return <Task key = {id} {...itemProps} /> 
	})
    return  <ul className = 'todo-list'>{[renderedTasks]}</ul>
            
}

export default TaskList