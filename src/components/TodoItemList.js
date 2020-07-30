import React, { Component } from "react";
import "./css/ItemList.css";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default class TodoItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/todo/get")
      .then((res) => {
        this.setState({ todos: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    axios
      .get("http://localhost:5000/todo/get")
      .then((res) => {
        this.setState({ todos: res.data });
      })
      .catch((err) => console.log(err));
  }

  TodoItems() {
    return this.state.todos.map((item) => (
      <TodoItem key={item._id} item={item.title} completed={item.completed} />
    ));
  }

  render() {
    return (
      <div>
        <br />
        {this.TodoItems()}
        <br />
        <AddTodo />
      </div>
    );
  }
}
