import React, { Component } from 'react';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

let elId = Date.now() + 1;

export default class App extends Component {
  constructor() {
    super();
    let tasks;
    if (!localStorage.getItem('tasks')) {
      tasks = [
        {
          description: 'Completed task',
          completed: true,
          created: 1608843600000,
          id: 1,
        },
        {
          description: 'Editing task',
          completed: false,
          created: 1608411600000,
          id: 2,
        },
        {
          description: 'Active task',
          completed: false,
          created: 1577836800000,
          id: 3,
        },
      ];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    this.state = {
      tasks,
      filterOption: 'all',
    };
  }

  findId = (arr, id) => arr.findIndex((el) => el.id === id);

  generateTaskObject = (descriptionText, completedStatus = false, createdDate, idNum) => ({
    description: descriptionText,
    completed: completedStatus,
    created: createdDate,
    id: idNum,
  });

  markAsDone = (id) => {
    this.setState(({ tasks }) => {
      const idx = this.findId(tasks, id);
      const tasksArray = [...tasks];
      tasksArray[idx].completed = !tasks[idx].completed;
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      return tasksArray;
    });
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const idx = this.findId(tasks, id);
      const before = tasks.slice(0, idx);
      const after = tasks.slice(idx + 1);
      const tasksArray = [...before, ...after];
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      return { tasks: tasksArray };
    });
  };

  addItem = (text) => {
    if (!text) return;
    this.setState(({ tasks }) => {
      const newItemId = elId + 1;
      elId += 1;
      const newItem = this.generateTaskObject(text.trim(), false, Date.now(), newItemId);
      const tasksArray = [...tasks, newItem];
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      return { tasks: tasksArray };
    });
  };

  renameItem = (text, id) => {
    if (!text) return;
    this.setState(({ tasks }) => {
      const idx = this.findId(tasks, id);
      const before = tasks.slice(0, idx);
      const after = tasks.slice(idx + 1);
      const newItem = this.generateTaskObject(text.trim(), false, Date.now(), id);
      const tasksArray = [...before, newItem, ...after];
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      return { tasks: tasksArray };
    });
  };

  removeAllCompleted = () => {
    const { tasks } = this.state;
    this.setState(() => {
      const tasksArray = tasks.filter((el) => el.completed === false);
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      return { tasks: tasksArray };
    });
  };

  filterTasks = (filter) => {
    this.setState({
      filterOption: filter,
    });
  };

  applyFilter = () => {
    const { tasks, filterOption } = this.state;
    const filterOpt = filterOption;
    const res = tasks;
    switch (filterOpt) {
      case 'active':
        return res.filter((el) => el.completed === false);
      case 'completed':
        return res.filter((el) => el.completed === true);
      default:
        return res;
    }
  };

  render() {
    const { tasks, filterOption } = this.state;
    const count = tasks.filter((el) => !el.completed).length;
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={(text) => this.addItem(text)} />
        <section className="main">
          <TaskList
            tasks={this.applyFilter()}
            onDeleted={this.deleteItem}
            onDone={this.markAsDone}
            onRename={this.renameItem}
          />
          <Footer
            filterTasks={this.filterTasks}
            filterOption={filterOption}
            count={count}
            clearCompleted={this.removeAllCompleted}
          />
        </section>
      </section>
    );
  }
}
