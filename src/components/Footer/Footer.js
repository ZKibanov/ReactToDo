import React,{Component} from 'react';
import TasksFilter from '../TasksFilter';
import PropTypes from 'prop-types';

export default class Footer extends Component {
	
	render() {
		const {count,clearCompleted,filterTasks} = this.props;

		return (

        <footer className = 'footer'>
        <span className = 'todo-count'>{count} items left</span>
        <TasksFilter
        filterTasks = {(e)=>{
			const elem = e.target
			const siblings = Array.from(elem.parentNode.parentNode.querySelectorAll(`button`));
			siblings.forEach(el => el.className = '');
			e.target.className = 'selected';
			filterTasks(e.target)
			}}
        />
        <button className="clear-completed"
        onClick = {clearCompleted}
        >Clear completed</button>
        </footer>
    )}

    static defaultProps = {
        count: 0,
        filterTasks: () => {console.log('We have lost function filterTasks somewhere in import')},
        clearCompleted: ()=>{console.log('We have lost function clearCompleted somewhere in import')}     
    }

    static propTypes = {
        count:PropTypes.number,
        filterTasks: PropTypes.func,
        clearCompleted: PropTypes.func
    }
    }
    
 


