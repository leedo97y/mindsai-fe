import { useState } from "react";
import { TodoEditorForm } from "../styles/TodoEditorStyle";
import { HiOutlinePlus } from "react-icons/hi2";
import { ITodo } from "../types/Todo";

const TodoEditor = ({
  data,
  setData,
}: {
  data: ITodo[];
  setData: React.Dispatch<React.SetStateAction<ITodo[]>>;
}) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTodo.trim() === "") return;

    setData([
      ...data,
      { userId: 1, id: new Date().getTime(), title: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  return (
    <TodoEditorForm onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Enter Todo List"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />

      <button type="submit">
        <HiOutlinePlus />
      </button>
    </TodoEditorForm>
  );
};

export default TodoEditor;
