import {Box} from '@mui/material';
import theme from '../../../theme/mainTheme'
const BlankComponent = ()=>{
    return (<Box sx={{position: 'absolute', top: '80px', left: 0, right: 0, height: '100vh', overflowY: 'hidden', backgroundColor: theme.palette.textcolor.light, opacity: '0.5'}}>
    
    </Box>)
}

export default BlankComponent;