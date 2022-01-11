import Image from '../../atom/Image';
import Typography from '../../atom/Typography';
import {Box, Card} from '@mui/material';
const BannerComponent = ({heading, discription, img}:any) =>{
    return (
        <Box sx={{
                backgroundColor : '#F1F6F4',
                width: 'auto',
                display: 'flex',
                padding: '4.93%',
                boxSizing: 'border-box',
                justifyContent: 'center'
            }}>

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant="h4" sx={{fontWeight: 'bold', width: '300px'}}>
                    {heading}
                </Typography>
                <Typography  sx={{ fontWeight: 'bold', color: 'gray'}}>
                    {discription}
                </Typography>
            </Box>
            <Image 
                src={img}
            />
        </Box>
    );
}

export default BannerComponent;