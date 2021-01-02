import React from 'react';
import Task from '../Task';
import PropTypes from 'prop-types';

const TaskList = ({tasks,onDeleted,onDone, onRename}) => {
   const renderedTasks = tasks.map((item)=>{
		const {id,...itemProps} = item;
		return <Task key = {id} 
		{...itemProps} 
		 onDeleted = {()=> onDeleted(id)}
		 onDone = {()=> onDone(id)}
		 onRename = {(text) => onRename(text,id)}
		/> 
	})
    return  <ul className = 'todo-list'>{[renderedTasks]}</ul>
            
}

TaskList.defaultProps = {
onDeleted: () => {console.log('We have lost function onDeleted somewhere in import')},
onDone: () => {console.log('We have lost function onDone somewhere in import')},
onRename: () => {console.log('We have lost function onRename somewhere in import')},
tasks: [
	{description:'Program didn\'t recieved data - that\'s why you see this message',completed:false,created:new Date(Date.now()),id:1}
]
}

TaskList.propTypes = {
tasks:PropTypes.arrayOf(PropTypes.object),
onDone: PropTypes.func
}

export default TaskList
