import {Box} from '@mui/material';
import Typography from '../../atom/Typography';

interface Type{
    leftIcon? : React.ReactNode;
    rightIcon? : React.ReactNode;
    label: string;
}

const NavIconComponent = (props: Type)=>{
    return(
        <Box data-testid='nav-icon' sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', width: 'auto', margin: '10px 10px 5px 0px'}} >
                {props.leftIcon ? props.leftIcon : ''}
                <Typography pl={1}>
                    {props.label}
                </Typography>
                {props.rightIcon ? props.rightIcon : ''}
        </Box>
    )
}

export default NavIconComponent;