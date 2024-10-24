import { TodoContainer, TodoMain } from "../styles/TodoStyle";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <TodoContainer>
      <TodoMain>
        <section id="todoTitle">
          <h1>Todo List App</h1>
        </section>
        {/* 등록 */}
        <TodoEditor />
        {/* 목록 */}
        <TodoList />
      </TodoMain>
    </TodoContainer>
  );
};

export default Todo;
