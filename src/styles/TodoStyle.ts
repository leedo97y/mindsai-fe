import styled from "@emotion/styled";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const TodoMain = styled.main`
  width: 60vw;
  height: auto;
  margin: 0 auto;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 20px;

  #todoTitle {
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #292929;
    padding-bottom: 20px;
    border-bottom: 1px solid #ebebeb;
  }
`;
