const Router = require("express").Router();
let todoItem = require("../models/todoModel");

Router.route("/get").get((req, res) => {
  todoItem
    .find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error" + err));
});

Router.route("/").post((req, res) => {
  const title = req.body.title;
  //const date = Date.parse(req.body.date);

  const newTodo = new todoItem({ title });

  newTodo
    .save()
    .then(() => res.json("todo added"))
    .catch((err) => res.status(400).json("error" + err));
});

Router.route("/:id").get((req, res) => {
  todoItem
    .findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("error" + err));
});

Router.route("/:id").delete((req, res) => {
  todoItem
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted"))
    .catch((err) => res.status(400).json("error" + err));
});

Router.route("/update/:id").post((req, res) => {
  todoItem
    .findById(req.params.id)
    .then((todo) => {
      todo.title = req.body.title;

      todo
        .save()
        .then((todo) => res.json("updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("error" + err));
});

module.exports = Router;
