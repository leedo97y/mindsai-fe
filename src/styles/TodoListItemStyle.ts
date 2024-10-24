import styled from "@emotion/styled";

export const TodoListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 50px;
  padding: 0 15px;
  background-color: rgba(53, 56, 62, 0.05);
  user-select: none;
  flex-shrink: 0;
  border: 1px solid #a3a3a3;
  border-radius: 5px;
`;

export const CheckBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;

  input[type="checkbox"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid #a3a3a3;
    border-radius: 2px;
    background-color: #ffffff;

    &:checked {
      background-color: #4f4f4f;
      background-image: url("./icons.svg");
      background-repeat: no-repeat;
      background-position: center;
    }

    &:disabled {
      background-color: rgba(53, 56, 62, 0.05);
    }
  }

  input[type="text"] {
    width: 100%;
    height: 35px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    background-color: #ffffff;
    outline: none;
    padding: 8px 10px;
    font-size: 15px;
  }

  .content {
    font-size: 15px;
  }

  input[type="checkbox"]:checked + .content {
    text-decoration-line: line-through;
    color: #828282;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .edit,
  .save,
  .delete,
  .formerMode {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    padding: 2px;
    border: 1px solid #a3a3a3;
    border-radius: 3px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .edit {
    background-color: #fefefe;
  }

  .save {
    background-color: #3da5eb;

    svg {
      width: 18px;
      height: 18px;

      color: #ffffff;
    }
  }

  .formerMode {
    background-color: #4f4f4f;
    svg {
      color: #ffffff;
    }
  }

  .delete {
    background-color: #eb403d;
    svg {
      color: #ffffff;
    }
  }
`;
