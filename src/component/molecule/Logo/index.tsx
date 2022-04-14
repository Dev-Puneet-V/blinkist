import {Box} from '@mui/material';
import Typography from '../../atom/Typography';
import Image from '../../atom/Image'

interface Type{
    height: number;
    url: string;
    name: string;
}

const LogoComponent = ({height=26, url, name, ...props}:any) => {
    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >

            <Image height={height} {...props} alt="blinkist" component="img" src={url}/>

            <Typography 
                sx={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    display: {xs : 'none'}
                }}
            >
                {name}
            </Typography>
        </Box>
        
    );
}

export default LogoComponent;