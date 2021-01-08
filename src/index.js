import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

let elId = 100;

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          description: 'Completed task', completed: true, created: new Date(2020, 12, 24), id: 1,
        },
        {
          description: 'Editing task', completed: false, created: new Date(2020, 12, 11), id: 2,
        },
        {
          description: 'Active task', completed: false, created: new Date(2020, 10, 10), id: 3,
        },
      ],
      filterOption: 'all',
    };
  }

	findId = (arr, id) => arr.findIndex((el) => el.id === id)

	generateTaskObject = (descriptionText, completedStatus = false, createdDate, idNum) => ({
	    description: descriptionText,
	    completed: completedStatus,
	    created: createdDate,
	    id: idNum,
	  })

	markAsDone = (id) => {
	  this.setState(({ tasks }) => {
	    const idx = this.findId(tasks, id);
	        const res = [...tasks];
	    res[idx].completed = !tasks[idx].completed;
	    return res;
	  });
	};

	deleteItem = (id) => {
	  this.setState(({ tasks }) => {
	    const idx = this.findId(tasks, id);
	    const before = tasks.slice(0, idx);
	    const after = tasks.slice(idx + 1);
	    return { tasks: [...before, ...after] };
	  });
	};

	addItem = (text) => {
	  this.setState(({ tasks }) => {
		const newItemId = elId + 1;
		elId += 1;
	    const newItem = this.generateTaskObject(text, false, Date.now(), newItemId);
	    const newTasks = [...tasks, newItem];
	    return { tasks: newTasks };
	  });
	}

	renameItem = (text, id) => {
	  this.setState(({ tasks }) => {
	    const idx = this.findId(tasks, id);
	    const before = tasks.slice(0, idx);
	    const after = tasks.slice(idx + 1);
	    const newItem = this.generateTaskObject(text, false, Date.now(), id);
	    return { tasks: [...before, newItem, ...after] };
	  });
	}

     removeAllCompleted = () => {
		 const {tasks} = this.state;
		 this.setState(() => {
			 const res = tasks.filter((el) => el.completed === false);
			 return { tasks: res };
		 });
		 }

	filterTasks = (filter) => {
	 this.setState({
		 filterOption:filter,
		})
	}

	applyFilter = () => {
	  const {tasks,filterOption} = this.state;
	  const filterOpt = filterOption;
	  const res = tasks;
	  switch (filterOpt) {
	    case 'active':
	      return (res.filter((el) => el.completed === false));
	    case 'completed':
	      return (res.filter((el) => el.completed === true));
	    default:
	      return res;
 			}
	}

	render() {
	  const {tasks, filterOption} = this.state;
	  const count = tasks.filter((el) => !el.completed).length;
	  return (
        <section className = 'todoapp'>
          <NewTaskForm
          onItemAdded = {(text) => this.addItem(text)}
          />
          <section className = 'main'>
             <TaskList
             tasks = {this.applyFilter()}
             onDeleted = { this.deleteItem}
             onDone = { this.markAsDone}
             onRename = { this.renameItem }
              />
             <Footer
			 filterTasks = {this.filterTasks}
			 filterOption = {filterOption}
             count = {count}
             clearCompleted={this.removeAllCompleted}
             />
           </section>
        </section>
	  );
	}
}

ReactDOM.render(<App />,
  document.getElementById('container'));
