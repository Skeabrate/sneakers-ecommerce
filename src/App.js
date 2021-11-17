import { GlobalStyle } from './Assets/Styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from "./Assets/Styles/theme"
import HeroPage from './Pages/HeroPage/HeroPage';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroPage />
    </ThemeProvider>
  );
}

export default App;
