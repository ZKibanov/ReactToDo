import React from 'react';
import Task from '../Task'
const TaskList = ({tasks,onDeleted}) => {
   const renderedTasks = tasks.map((item)=>{
		const {id,...itemProps} = item;
		return <Task key = {id} 
		{...itemProps} 
		onDeleted = {()=> onDeleted(id)}
		/> 
	})
    return  <ul className = 'todo-list'>{[renderedTasks]}</ul>
            
}

export default TaskList
