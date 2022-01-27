import { LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme/mainTheme'


const style = {
    progressBar: {
        backgroundColor: ''
    }
}
const ProgressBarComponent = ({value = 0, theme, ...props}:any) => {
    return (
        <LinearProgress value={value} {...props} sx={{height: '15px', opacity: '0.5', borderRadius: '0px 0px 10px 10px', backgroundColor: '#DFE8F6'}} variant="determinate" data-testid='progress-bar'/>
    )
}

export default ProgressBarComponent;