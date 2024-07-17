import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const TodoContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const TodoItem = styled.div`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #fff;
`;

const TodoTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const TodoDate = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 4px 0;
`;

const DeleteButton = styled(Button)`
  margin-top: 8px;
`;

const TodoList = ({ todo, handlerDeleteFn }) => {
  return (
    <TodoContainer>
      {todo?.map((item) => (
        <TodoItem key={item.id}>
          <TodoTitle>{item.title}</TodoTitle>
          <TodoDate>{item.date}</TodoDate>
          <DeleteButton
            onClick={() => handlerDeleteFn(item.id)}
            variant="outlined"
            color="secondary"
          >
            Удалить
          </DeleteButton>
        </TodoItem>
      ))}
    </TodoContainer>
  );
};

export default TodoList;
