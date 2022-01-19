import { LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../../../theme/baseTheme';
const ProgressBarComponent = ({value = 0, theme, ...props}:any) => {
    return (
        <ThemeProvider theme={baseTheme}>
            <LinearProgress value={value} {...props} sx={{height: '20px', opacity: '0.5', borderRadius: '0px 0px 10px 10px', backgroundColor: '#DFE8F6'}} variant="determinate" />
        </ThemeProvider>
    )
}

export default ProgressBarComponent;