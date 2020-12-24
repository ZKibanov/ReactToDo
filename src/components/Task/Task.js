import React from 'react';
const Task = ({status=null,description,created}) => {
    return (
    <li className={status}>
        <div className = 'view'>
         <input className = 'toggle' type="checkbox"></input>
         <label>
         <span className = 'description'>{description}</span>
         <span className = 'created'>{created}</span>
         </label>
         <button className = 'icon icon-edit'></button>
         <button className = 'icon icon-destroy'></button>
        </div>
        <input className = 'edit'></input>
    </li>)
}

export default Task