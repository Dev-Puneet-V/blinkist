import {Box} from '@mui/material';
import Typography from '../../atom/Typography';
import Image from '../../atom/Image'
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
                    fontSize: '18px'
                }}
            >
                {name}
            </Typography>
        </Box>
        
    );
}

export default LogoComponent;