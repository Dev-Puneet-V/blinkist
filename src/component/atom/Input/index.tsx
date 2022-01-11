import {Input, InputAdornment} from '@mui/material';
const InputComponent = ({icon, ...props}:any)=>{
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <>
            <Input
                id="standard-adornment-amount"
                {...props}
                inputProps={ariaLabel} 
                startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
            />
        </>
    )
}

export default InputComponent;