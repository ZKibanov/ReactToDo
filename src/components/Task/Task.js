import React,{Component} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
	constructor(){ //чтоб не биндить this на функцию в рендере
		super();
		this.state = {
			completed:false,
			editing:false
			}
		this.changeClassOnLabelClick=()=>{
			this.setState(({completed})=>{return {completed:!completed}})
		}
		this.turnToEdit = () => {
			this.setState({editing:true})
		}
		};
	

	render (){
		let {status=null,description,created = null,onDeleted} = this.props;
		const {completed} = this.state;
		const {editing} = this.state;
		if (completed) {
			status = 'completed';
			console.log(status);
			}
		if (editing) {
		status = 'editing';
		}
		return (
    <li className={status}>
        <div className = 'view'>
         <input className = 'toggle' type="checkbox"></input>
         <label>
         <span className = 'description' 
         onClick = {this.changeClassOnLabelClick}>{description}</span>
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
        <input className = 'edit'></input>
    </li>)
		
		}
	}

