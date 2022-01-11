import {Paper, Box} from '@mui/material';
import Image from '../../atom/Image';
import {AccessAlarm, MoreHoriz} from '@mui/icons-material'
import Typography from '../../atom/Typography';
import ProgressBar from '../../atom/ProgressBar';
import Icon from '../../atom/Icon';
import AddIcon from '@mui/icons-material/Add';
const CardComponent = ({imgHeight, url, bookName, writerName, timeRead = "0-minute read", progress, width, inLibrary }: any) => {
    return(
        <Paper elevation={1} sx={{borderRadius: '10px', width: `${width}px`, margin: "10px"}}>
            <Image sx={{borderRadius: '10px 10px 0px 0px'}} height={imgHeight} width={width} alt="blinkist" component="img"  src={url}/>
            <Box sx={{padding: '5px'}}>
                <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                    {bookName}
                </Typography>
                <Typography variant="h6" sx={{fontWeight: '800', color: 'gray'}}>
                    {writerName}
                </Typography>
                <Box 
                    sx={{display: 'flex',
                    alignItems: 'center'
                    }}
                >
                    <Icon sx={{padding: '6px'}} icon={<AccessAlarm />} />
                    <Typography sx={{color: "gray", fontSize: "16px" }} variant="body">
                        {timeRead}
                    </Typography>
                </Box>
                <Box 
                    sx={{display: 'flex',
                        justifyContent: 'end'
                    }}
                >
                    <Icon sx={{padding: '6px'}} icon={<MoreHoriz />} />
                </Box>
            </Box>
            {inLibrary ? 
                <ProgressBar sx={{borderRadius: '0px 0px 10px 10px'}} width={100} value={progress} color="success"/> :
                <Box sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    color: "#0365F2",
                    height: '60px',
                    borderTop: '1px solid lightGrey'
                }}>
                    <Icon variant="h4" icon={<AddIcon sx={{fontWeight: 'bold', fontSize: '35px'}}/>} />
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                        Add to library 
                    </Typography>
                </Box>
            }
        </Paper>
    );
}

export default CardComponent; 