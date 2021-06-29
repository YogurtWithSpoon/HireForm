import { GlobalStyles } from "./globalStyles";
import { Registration } from './features/registration';
import { AppContainer } from './AppContainer.styled';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Registration />
      </AppContainer>
    </Router>
  );
}

export default App;
