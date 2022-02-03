import Template from './component/template/Template';
import {ThemeProvider, CssBaseline} from '@mui/material';
import theme from './theme/mainTheme';
import { useAuth0 } from "@auth0/auth0-react";
import Button from './component/atom/Button';
import CircularProgress from '@mui/material/CircularProgress';
const App = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  if (isLoading) {
    return <CircularProgress sx={{position: 'absolute', top: '48vh', left: '48vw'}}/>;
  }
  return(
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isAuthenticated && <Button
                           size='medium' 
                           label="Log in" 
                           variant='contained'
                           color='success'
                           onClick={() => loginWithRedirect()} 
                           
                           sx={{position: 'absolute', top: '48vh', left: '48vw'}}/>}

      {isAuthenticated && <Template />}
    </ThemeProvider>
  );
}

export default App;
