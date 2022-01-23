import Template from './component/template/Template';
import theme from './theme/mainTheme';
import {ThemeProvider, CssBaseline} from '@mui/material';
const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Template />
    </ThemeProvider>
  );
}

export default App;
