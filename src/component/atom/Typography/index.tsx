import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../../../theme/baseTheme';
const TypographyComponent = ({theme, ...props}: any) =>{
  return(
    <ThemeProvider theme={baseTheme} >
      <Typography  mb={1} mt={1} {...props}>
        {props.children}
      </Typography>
    </ThemeProvider>
  )
}

export default TypographyComponent;