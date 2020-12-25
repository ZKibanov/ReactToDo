import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer'
const tasks = [
    {description:'Completed task', status:'completed',created:new Date(2020, 12, 24),id:1},
    {description:'Editing task',status:'editing',created:new Date(2020, 12, 11),id:2},
    {description:'Active task',created:new Date(2020, 10, 10),id:3}
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
