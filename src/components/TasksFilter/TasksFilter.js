import React,{Component} from 'react';

export default class TasksFilter extends Component {
	
	render() {
		const {filterTasks} = this.props;
		 return (
        <ul className="filters"
        onClick = {filterTasks}
        >
            <li>
              <button data-f ="all"            
              >All</button>
            </li>

            <li>
              <button data-f = "active"            
              >Active</button>
            </li>

            <li>
              <button data-f = "completed"
              >Completed</button>
            </li>

        </ul>
    )};
  }
  
  TasksFilter.defaultProps = {
    filterTasks: () => {console.log('We have lost function filterTasks somewhere in import')}
  }
