import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static defaultProps = {
    status: '',
    created: Date.now(),
    description: 'this task is missing',
    completed: false,
    onRename: () => {},
    onDeleted: () => {},
    onDone: () => {},
  };

  static propTypes = {
    description: PropTypes.string,
    completed: PropTypes.bool,
    status: PropTypes.string,
    created: PropTypes.number,
    onRename: PropTypes.func,
    onDeleted: PropTypes.func,
    onDone: PropTypes.func,
  };

  constructor() {
    // чтоб не биндить this на функцию в рендере
    super();
    this.state = {
      editing: false,
    };

    this.turnToEdit = () => {
      this.setState({ editing: true });
    };
  }

  onSubmit = (ev) => {
    const { onRename } = this.props;
    ev.preventDefault();
    onRename(ev.target.lastChild.value);
    this.setState({ editing: false });
  };

  render() {
    let { status } = this.props;
    const { description, created, onDeleted, onDone, completed } = this.props;
    const { editing } = this.state;

    if (completed) {
      status = 'completed';
    }

    if (editing) {
      status = 'editing';
    }

    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={onDone} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{formatDistanceToNow(created, { includeSeconds: true })}</span>
          </label>
          <button aria-label="edit" type="button" className="icon icon-edit" onClick={this.turnToEdit} />
          <button aria-label="delete" type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" defaultValue={description} className="edit" />
        </form>
      </li>
    );
  }
}
