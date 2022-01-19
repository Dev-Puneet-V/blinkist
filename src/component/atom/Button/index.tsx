import { Button } from '@mui/material';
import baseTheme from '../../../theme/baseTheme';
import { ThemeProvider } from '@mui/material/styles';
const ButtonComponent = ({libraryStatusHandler, ...props}: any) =>{
  return(
    <ThemeProvider theme={baseTheme}>
      <Button {...props} onClick={libraryStatusHandler}>
        {props.label}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonComponent;