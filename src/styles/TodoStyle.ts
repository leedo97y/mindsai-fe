import styled from "@emotion/styled";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const TodoMain = styled.main`
  width: 70vw;
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
    padding-bottom: 15px;
    border-bottom: 1px solid #ebebeb;

    h1 {
      font-size: 25px;
    }
  }
`;
