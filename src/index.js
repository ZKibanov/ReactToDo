import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const count = 1;
let elId = 100;

class App extends Component {
	constructor(){
		super();
		this.state = {
		tasks:[
    {description:'Completed task',status:'completed',created:new Date(2020, 12, 24),id:1},
    {description:'Editing task',completed:false,created:new Date(2020, 12, 11),id:2},
    {description:'Active task',completed:false,created:new Date(2020, 10, 10),id:3}
    ]
		}
		};
		
	deleteItem = (id) => {
		this.setState (({tasks})=>{
			const idx = tasks.findIndex((el)=> el.id === id)
			const before = tasks.slice(0,idx);
			const after = tasks.slice(idx+1);
			return {tasks:[...before,...after]}
		})
	};
	
	addItem = (e) => {
		if (e.code === 'Enter'){
			this.setState(({tasks})=>{
				const text = e.target.value;
				const newItemId = elId++;
				const newItem = [...tasks,{
					description:text,
					created:Date.now(),
					id:newItemId
					}]
                console.log(newItem)
                return {tasks:newItem}
				})
				}
			}

	
	render () {
		return (
        <section className = 'todoapp'>
          <NewTaskForm 
          onItemAdded = {this.addItem}
          addTaskOnEnterKeydown  = { (text) => this.addItem(text) }
          />
          <section className = 'main'>
             <TaskList tasks = {this.state.tasks}
             onDeleted = { (id) => this.deleteItem(id)}
              />
             <Footer count = {count} />
           </section>
        </section>
    )}
	}

ReactDOM.render(<App />, 
    document.getElementById('container'))
