import {Container, Box} from '@mui/material';
import Typography from '../../atom/Typography';
import Icon from '../../atom/Icon';
import {AccessAlarm, ArrowForward} from '@mui/icons-material';
import Button from '../../atom/Button';
import Image from '../../atom/Image';
import Tab from '../../molecule/tabs';
import {useState} from 'react';
const BookInfoComponent = (props:any)=>{
    const tabData = [
        { 
          'value': 'synopsis',
          'label': 'Synopsis',
        },
        { 
          'value': 'audience',
          'label': 'Who is it for?'
        },
        { 
            'value': 'author',
            'label': 'About the author'
          }
    ]
    const [currState, setCurrState] = useState(tabData[0].value);
    const handleState = (state:string) => {
        setCurrState(state);
    }

    const moreInfo = ()=>{
        if(currState === tabData[0].value){
            return(
                <Typography>
                    Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
                </Typography>
            )
        }else if(currState === tabData[1].value){
            return(
                <Typography>
                    For you    
                </Typography>
            )
        }else if(currState === tabData[2].value){
            return(
                <Typography>
                    Author       
                </Typography>
            )
        }
    }

    return(
        <Container>
            <Typography sx={{margin: '20px 0px'}}>
                Get the key ideas from
            </Typography>
            <Box sx={{display: 'flex',justifyContent: 'space-between', marginBottom: '40px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography variant='h4' sx={{fontWeight: 'bold',marginBottom: '20px'}}>
                            Beyond Entrepreneurship 2.0
                        </Typography>
                        <Typography sx={{marginBottom: '20px'}}>
                            Turning Your Business into an Enduring Great Company
                        </Typography>
                        <Typography sx={{color: 'gray', fontWeight: 'bold', marginBottom: '20px'}}>
                            By Jim Collins and Bill Lazier
                        </Typography>
                        <Box 
                            sx={{display: 'flex',
                            alignItems: 'center'
                            }}
                        >
                            <Icon icon={<AccessAlarm sx={{padding: '0px 5px 0px 0px'}}/>} />
                            <Typography sx={{color: "gray", fontSize: "16px" }} variant="body">
                                13-minuter read
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{fontWeight: '700', display: 'flex'}}>
                        <Button label='Read now' size='medium' variant='outlined' color='success' sx={{margin: '12px 24px 12px 0px'}}/>
                        <Button label='Finished Reading' size='medium' variant='contained' color='success' sx={{margin: '12px 24px 12px 0px'}}/>
                        <Button label='Send to Kindle' size='medium' sx={{color:'gray', margin: '12px 24px 12px 0px'}} endIcon={<ArrowForward />}/>
                    </Box>
                </Box>
                <Box>
                    <Image height='300' width='280' src= '/assets/book.png'/>
                </Box>
            </Box>
            <Box sx={{marginBottom: '260px', borderBottom: '1px solid lightGrey', padding: '20px 0px'}}>
                <Tab stateHandler={handleState} tabData={tabData}/>
                <Box sx={{height: '100px'}}>
                    {moreInfo()}
                </Box>
            </Box>
        </Container>
    );
}

export default BookInfoComponent;