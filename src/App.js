import { GlobalStyle } from './Assets/Styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from "./Assets/Styles/theme"
import MainView from './Pages/MainView/MainView';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainView />
    </ThemeProvider>
  );
}

export default App;
