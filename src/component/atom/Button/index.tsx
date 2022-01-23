import { Button } from '@mui/material';
import baseTheme from '../../../theme/baseTheme';
import { ThemeProvider } from '@mui/material/styles';
const ButtonComponent = (props: any) =>{
  return(
    <ThemeProvider theme={baseTheme}>
      <Button {...props}>
        {props.label}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonComponent;