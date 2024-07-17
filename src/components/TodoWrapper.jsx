import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "Задача 1", date: "2023-01-01" },
    { id: 2, title: "Задача 2", date: "2023-01-02" },
  ]);
  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };
  const handlerDeleteFn = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <FormTodo addTodo={addTodo} />
      <TodoList handlerDeleteFn={handlerDeleteFn} todo={todo} />
    </div>
  );
};

export default TodoWrapper;
