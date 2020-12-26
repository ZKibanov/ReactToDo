import React,{Component} from 'react';
import TasksFilter from '../TasksFilter';

export default class Footer extends Component {
	
	render() {
		const {count} = this.props

		return (
        <footer className = 'footer'>
        <span className = 'todo-count'>{count} items left</span>
        <TasksFilter />
        <button className="clear-completed">Clear completed</button>
        </footer>
    )}
	}
