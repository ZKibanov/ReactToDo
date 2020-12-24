import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer'
const tasks = [
    {description:'Completed task', status:'completed',created:'created 17 seconds ago',id:1},
    {description:'Editing task',status:'editing',id:2},
    {description:'Active task',created:'created 5 minutes ago',id:3}
]
const count = 1;
const App = () => {
    return (
        <section className = 'todoapp'>
          <NewTaskForm />
          <section className = 'main'>
             <TaskList tasks = {tasks} />
             <Footer count = {count} />
           </section>
        </section>
    )
}
ReactDOM.render(<App />, 
    document.getElementById('container'))