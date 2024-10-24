import { ThemeProvider, Global } from "@emotion/react";
import Todo from "./components/Todo";
import theme from "./styles/Theme";
import { globalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Todo />
      </ThemeProvider>
    </>
  );
}

export default App;
