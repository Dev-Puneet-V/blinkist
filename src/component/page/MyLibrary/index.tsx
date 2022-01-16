import {useState, useEffect} from 'react';
import {Container, Box} from '@mui/material';
import Typography from '../../atom/Typography';
import baseTheme from '../../../theme/baseTheme';
import Tab from '../../molecule/tabs';
import Card from '../../organism/Card';
import CircularProgress from '@mui/material/CircularProgress';
const MyLibrary = () =>{
    const [data, setData] = useState({
        currentlyReading : [],
        finishedBook: []
    });
    const tabData = [
        { 
          'value': 'reading',
          'label': 'Currently reading',
        },
        { 
          'value': 'finished',
          'label': 'Finished',
        }
    ]
    const [currState, setCurrState] = useState(tabData[0].value);
    useEffect(() => {
        const processor = async () => {
            let response = await fetch('/demo_data/index.json');
            let data = await response.json();
            setData(data.book);
        };
        processor();
    }, []);
    const handleState = (state:string) => {
        setCurrState(state);
    }

    const cards = () => {

        if(data == null){
            return  <CircularProgress />
        }
        else {
            if(currState === 'reading'){
                return data.currentlyReading.map((currData:any) => {
                    return <Card 
                        key={currData.id}
                        imgHeight= {300}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {350}
                        inLibrary= {true}
                        progress= {currData.progress}
                    />
                })
            }else{
                return data.finishedBook.map((currData:any) => {
                    return <Card 
                        key={currData.id}
                        imgHeight= {300}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {350}
                        inLibrary= {true}
                        progress= {currData.progress}
                        
                    />
                })
            }
        }
    }


    

    return (
        <Container>
            <Typography   variant="h5" theme={baseTheme}>
                My Library
            </Typography>
            <Tab stateHandler={handleState} tabData={tabData}/>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                { 
                    cards()
                }
            </Box>
        </Container>
    );
}

export default MyLibrary;