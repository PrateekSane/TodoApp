import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.item,
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      completed: !this.state.completed,
    });
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          className="CheckboxStyle"
          onChange={this.handleChange}
        />
        <label>{this.state.title}</label>
      </div>
    );
  }
}

export default TodoItem;
