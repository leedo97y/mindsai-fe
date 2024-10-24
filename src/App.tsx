import { Global } from "@emotion/react";
import Todo from "./components/Todo";
import { globalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Todo />
    </>
  );
}

export default App;
