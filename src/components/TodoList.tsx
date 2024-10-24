import { useEffect, useState } from "react";
import { TodoListSection } from "../styles/TodoListStyle";
import TodoListItem from "./TodoListItem";
import { ITodo, TEditMode } from "../types/Todo";
import axios from "axios";

const TodoList = ({
  data,
  setData,
}: {
  data: ITodo[];
  setData: React.Dispatch<React.SetStateAction<ITodo[]>>;
}) => {
  const [editTodo, setEditTodo] = useState<TEditMode>({
    id: 0,
    status: "edit",
  });
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const setTodoInitData = async () => {
      try {
        const todoList = localStorage.getItem("todos");
        if (todoList && todoList.length > 0) {
          setData(JSON.parse(todoList));
        } else {
          const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=5`,
          );
          setData(res.data);
        }
      } catch (error: any) {
        console.error(error);
      }
    };

    setTodoInitData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("todos", JSON.stringify(data));
    }
  }, [data]);

  const deleteTodo = (id: number) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // edit 버튼 - 모드 변경 (save)
  const editMode = (id: number) => {
    setEditTodo({ id: id, status: "save" });
    const initText = data.filter((todo) => todo.id === id)[0];
    setEditText(initText.title);
  };

  // cancel 버튼 - 모드 변경 (edit)
  const cancelMode = (id: number) => {
    setEditTodo({ id: id, status: "edit" });
  };

  // 저장 로직
  const saveEditTodo = (id: number) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, title: editText } : todo,
      ),
    );
    setEditTodo({ id: id, status: "edit" });
    setEditText("");
  };

  return (
    <>
      <TodoListSection>
        {data.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            saveEditTodo={saveEditTodo}
            mode={editTodo}
            editMode={editMode}
            cancelMode={cancelMode}
            editText={editText}
            setEditText={setEditText}
          />
        ))}
      </TodoListSection>
    </>
  );
};

export default TodoList;
