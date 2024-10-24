import {
  ButtonSection,
  CheckBox,
  TodoListItemContainer,
} from "../styles/TodoListItemStyle";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";
import { ITodo, TEditMode } from "../types/Todo";

const TodoListItem = ({
  todo,
  mode,
  editText,
  deleteTodo,
  editMode,
  cancelMode,
  saveEditTodo,
  toggleTodo,
  setEditText,
}: {
  todo: ITodo;
  mode: TEditMode;
  editText: string;
  deleteTodo: (id: number) => void;
  editMode: (id: number) => void;
  cancelMode: (id: number) => void;
  saveEditTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <TodoListItemContainer>
        <CheckBox>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            disabled={mode.id === todo.id && mode.status === "save"}
          />
          {mode.id === todo.id && mode.status === "save" ? (
            <input
              type="text"
              onChange={(e) => setEditText(e.target.value)}
              value={editText}
            />
          ) : (
            <span className="content">{todo.title}</span>
          )}
        </CheckBox>
        <ButtonSection>
          {mode.id === todo.id && mode.status === "save" ? (
            <button className="save" onClick={() => saveEditTodo(todo.id)}>
              <BsCheckCircleFill />
            </button>
          ) : (
            <button
              className="edit"
              onClick={() => editMode(todo.id)}
              disabled={todo.completed}
            >
              <AiOutlineEdit />
            </button>
          )}
          {mode.id === todo.id && mode.status === "save" ? (
            <button className="formerMode" onClick={() => cancelMode(todo.id)}>
              <GoArrowLeft />
            </button>
          ) : (
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              <HiOutlineXMark />
            </button>
          )}
        </ButtonSection>
      </TodoListItemContainer>
    </>
  );
};

export default TodoListItem;
