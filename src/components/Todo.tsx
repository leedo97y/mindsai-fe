import { useState } from "react";
import { TodoContainer, TodoMain } from "../styles/TodoStyle";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { ITodo } from "../types/Todo";

const Todo = () => {
  const [data, setData] = useState<ITodo[]>([]);

  return (
    <TodoContainer>
      <TodoMain>
        <section id="todoTitle">
          <h1>Todo List App</h1>
          {/* 등록 */}
          <TodoEditor data={data} setData={setData} />
        </section>
        {/* 목록 */}
        <TodoList data={data} setData={setData} />
      </TodoMain>
    </TodoContainer>
  );
};

export default Todo;
