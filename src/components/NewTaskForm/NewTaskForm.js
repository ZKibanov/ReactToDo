import React,{Component} from 'react';

export default class NewTaskForm extends Component {		
	render(){
		const searchText = "What needs to be done?";
    return (
    <header className = 'header'>
         <h1>todos</h1> 
         <input className ='new-todo' placeholder = {searchText}
         onKeyDown = {(e)=>this.props.onItemAdded(e)}
         ></input>
    </header>)
		}
	}
