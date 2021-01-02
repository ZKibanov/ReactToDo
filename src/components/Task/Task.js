import React,{Component} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {
	constructor(){ //чтоб не биндить this на функцию в рендере
		super();
		this.state = {
			editing:false
			}

		this.turnToEdit = () => {
			this.setState({editing:true})
		}
		};
		
	onSubmit =(e)=>{
		e.preventDefault();	
		this.props.onRename(e.target.lastChild.value);
		this.setState({editing:false})	
		e.target.lastChild.value = '';
		}
	
	render (){
		let {status,description,created,onDeleted,onDone,completed} = this.props;
		const {editing} = this.state;
		if (completed) {
			status += 'completed';
			}
			
		if (editing) {
		status += 'editing';
		}
		
		return (
    <li className={status}>
        <div className = 'view'>
         <input className = 'toggle' 
         type="checkbox" 
         defaultChecked = {completed}
         onClick = {onDone}></input>
         <label>
         <span className = 'description' 
         >{description}</span>
         <span className = 'created'>{formatDistanceToNow(
  created,
  {includeSeconds: true}
)}</span>
         </label>
         <button className = 'icon icon-edit'
         onClick = {this.turnToEdit}
         ></button>
         <button className = 'icon icon-destroy'
         onClick = {onDeleted}
         ></button>
        </div>
         <form 
         onSubmit = {this.onSubmit}
         ><input type = 'text' className = 'edit'></input></form>
    </li>)
		
		}

	static defaultProps = {
		status: '',
		created: Date.now()
	}

	static propTypes = {
		description: PropTypes.string,
		completed: PropTypes.bool,
		created:PropTypes.instanceOf(Date)
	}
	}

