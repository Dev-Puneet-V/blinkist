import { Button } from '@mui/material';
import baseTheme from '../../../theme/buttonTheme';
import { ThemeProvider } from '@mui/material/styles';

const ButtonComponent = (props: any) =>{
  return(
    <ThemeProvider theme={baseTheme}>
      <Button {...props} data-testid='button'>
        {props.label}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonComponent;