import styled from "@emotion/styled";

export const TodoEditorForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    width: 60%;
    height: 40px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    padding: 10px 15px;
    outline: none;
    font-size: 15px;

    &::placeholder {
      color: #acacac;
    }

    @media (max-width: 700px) {
      height: 30px;
      font-size: 12px;
    }
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-color: #4f4f4f;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 700px) {
      width: 30px;
      height: 30px;
    }

    svg {
      width: 20px;
      height: 20px;

      @media (max-width: 700px) {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
