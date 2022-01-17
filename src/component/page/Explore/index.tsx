import {Container, Box} from '@mui/material';
import Tab from '../../molecule/tabs';
import {useState} from 'react';
const ExploreComponent = ()=>{
    const tabData = [
        { 
          'value': 'category',
          'label': 'Explore by category',
        },
        { 
          'value': 'recent',
          'label': 'See recently added titles'
        },
        { 
            'value': 'popular',
            'label': 'See popular titles'
          }
    ]
    const [currState, setCurrState] = useState(tabData[0].value);
    const handleState = (state:string) => {
        setCurrState(state);
    }
    return (
        <Box sx={{zIndex : '1000', background: 'rgba(157, 163, 166, 0.45)', height: 'calc(100% - 100px)', width: '100vw', position: 'absolute', top: '0px', left: '0px', right: '0px'}}>
            <Box sx={{backgroundColor: '#F1F6F4', height: '398px', width: '100%'}}>
                <Container>
                    <Tab  textColor='primary' indicatorColor='primary' stateHandler={handleState} tabData={tabData}/>
                    
                </Container>
            </Box>
        </Box>
    )
}

export default ExploreComponent;