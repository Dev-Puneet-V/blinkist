import {Input, InputAdornment} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const InputComponent = ({startIcon, endIcon, ...props}:any)=>{
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <>
            <Input
                id="standard-adornment-amount"
                {...props}
                inputProps={ariaLabel} 
                startAdornment={<InputAdornment position="start">{startIcon}</InputAdornment>}
                endAdornment={<InputAdornment position="start">{endIcon}</InputAdornment>}/>
        </>
    )
}

export default InputComponent;