import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  static defaultProps = {
    onItemAdded: () => {
      console.log('We have lost function onItemAdded somewhere in import');
    },
  };

  static propTypes = {
    onItemAdded: PropTypes.func,
  };

  onSubmit = (ev) => {
    const { onItemAdded } = this.props;
    const { label } = this.state;
    ev.preventDefault();
    onItemAdded(label);
    this.setState(() => ({ label: '' }));
  };

  onLabelChange = (ev) => {
    this.setState(() => ({ label: ev.target.value }));
  };

  render() {
    const searchText = 'What needs to be done?';
    const { label } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder={searchText}
            onChange={this.onLabelChange}
            value={label}
          />
        </form>
      </header>
    );
  }
}
