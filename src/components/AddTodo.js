import React, { Component } from "react";
import axios from "axios";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const todo = {
      title: this.state.title,
      completed: this.state.completed,
    };
    axios
      .post("http://localhost:5000/todo/", todo)
      .then((res) => console.log(res.data))
      .then(this.setState({ title: "", completed: false }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="AddTextBox"
              placeholder="Add Item"
            />
            <br></br>
            <input
              value="Add Todo Item"
              type="submit"
              className="submitButton"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
