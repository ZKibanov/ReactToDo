import React,{Component} from 'react';

export default class NewTaskForm extends Component {	
	 state = {
		 label:''
		 }	
		 
	onLabelChange = (e) => {
		this.setState((state)=>{
			return {label:e.target.value}
		});
		}
		
	onSubmit =(e)=>{
		e.preventDefault();		
		this.props.onItemAdded(this.state.label);
		this.setState((state)=>{
			return {label:''}
		})
		}
	render(){
		const searchText = "What needs to be done?";
    return (
    <header className = 'header'>
         <h1>todos</h1> 
         <form 
         onSubmit = {this.onSubmit}>
         <input type = "text" 
         className ='new-todo' 
         placeholder = {searchText}
         onChange = {this.onLabelChange}
         value = {this.state.label}
         ></input>
         </form>
    </header>)
		}
		static 	defaultProps = {
			onItemAdded: () => {console.log('We have lost function onItemAdded somewhere in import')}
		}
	}


