import React, { useState } from "react";
import Input from "./UI/Input";
import { Button } from "@mui/material";

const FormTodo = ({ addTodo }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handlerTitle = (e) => setTitle(e.target.value);
  const handlerDate = (e) => setDate(e.target.value);

  const handlerSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Math.floor(Math.random() * 1000),
      title,
      date,
    });
    setTitle("");
    setDate("");
  };
  const togleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <Button variant="contained" onClick={togleModal}>
        {" "}
        {!modal === true ? "Add Book" : "Close"}
      </Button>
      {modal && (
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <label htmlFor="">
            Title
            <Input
              type="text"
              onChange={handlerTitle}
              value={title}
              placeholder="Text"
            />
          </label>

          <label htmlFor="">
            Date
            <Input type="date" onChange={handlerDate} value={date} />
          </label>
          <Button variant="outlined" type="submit">
            add
          </Button>
        </div>
      )}
    </form>
  );
};

export default FormTodo;
