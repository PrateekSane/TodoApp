import React from "react";
import "./components/css/App.css";
import Header from "./components/Header";
import TodoItemList from "./components/TodoItemList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={TodoItemList} />
      </div>
    </Router>
  );
}

export default App;
