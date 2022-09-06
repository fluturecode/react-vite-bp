import { ContextWrapper } from "./Context";
import { Main } from "./pages/Main";

export const App = () => {
  return (
    <ContextWrapper>
      <Main />
    </ContextWrapper>
  );
};

export default App;
