import {Paper, Box} from '@mui/material';
import Image from '../../atom/Image';
import {AccessAlarm, MoreHoriz} from '@mui/icons-material'
import Typography from '../../atom/Typography';
import ProgressBar from '../../atom/ProgressBar';
import Icon from '../../atom/Icon';
import AddIcon from '@mui/icons-material/Add';
import {NavLink, Link} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {useState} from 'react';
  
const CardComponent = ({imgHeight, url, bookName, writerName, timeRead = "0-minute read", progress, width, inLibrary, libraryHandler, ...props}: any) => {
    const [hoverState, setHoverState] = useState(false);
    const [bookLibraryStatus, setBookLibraryStatus] = useState(inLibrary);
    const  hoverStateHandler = ()=>{
        setHoverState(!hoverState)
    }
    return(
        <Paper elevation={1} sx={{borderRadius: '10px', width: `${width}px`, margin: "10px", position: 'relative'}} onMouseEnter={hoverStateHandler} onMouseLeave={hoverStateHandler}>
            <Link to={`/book-info/${props.cardId}`}>
                <Image sx={{borderRadius: '10px 10px 0px 0px'}} height={imgHeight} width={width} alt="blinkist" component="img"  src={url}/>
            </Link>
            <Box sx={{
                padding: '5px',
                backgroundColor: `${!inLibrary && hoverState ? '#F1F6F4' : 'white'}`
                }} 
            >
                <Typography variant="h6" sx={{fontWeight: 'bold'}}>
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
                {bookLibraryStatus ? <Icon  icon={<MoreHoriz sx={{padding: '6px'}}/>} /> : ''}
                </Box>
            </Box>
            <Box sx={{ position: 'relative'}}>
                {bookLibraryStatus ? 
                    <ProgressBar sx={{borderRadius: '0px 0px 10px 10px'}} width={100} value={progress} color="success"/> 
                    :
                    <Box onClick={e => 
                        libraryHandler(props.cardId, setBookLibraryStatus)
                    } 
                    sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        color: `${!hoverState ? '#0365F2' : 'white'}`,
                        backgroundColor: `${hoverState ? '#0365F2' : 'white'}`,
                        height: '60px',
                        borderTop: '1px solid lightGrey', 
                        borderRadius: '0px 0px 10px 10px',
                        width: '100%'
                    }}>
                        <Icon variant="h4" icon={<AddIcon sx={{fontWeight: 'bold', fontSize: '35px'}}/>} />
                        <Typography  variant="h6" sx={{fontWeight: 'bold'}}>
                            Add to library 
                        </Typography>
                    </Box>
                }
            </Box>
        </Paper>
    );
}

export default CardComponent; 