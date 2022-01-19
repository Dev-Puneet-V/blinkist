import {useState} from 'react';
import {Container, Box} from '@mui/material';
import Typography from '../../atom/Typography';
import baseTheme from '../../../theme/baseTheme';
import Tab from '../../molecule/tabs';
import Card from '../../organism/Card';
import CircularProgress from '@mui/material/CircularProgress';
const MyLibrary = ({books, setBooks, library, setLibrary}:any) =>{
    let data = library;
    // console.log(library);
    let setData = setLibrary;
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
    const handleState = (state:string) => {
        setCurrState(state);
    }

    const cards = () => {

        if(books.length == 0){
            return  <CircularProgress />
        }
        else {
            if(currState === 'reading'){
                return data.currentlyReading.map((curr:any) => {
                    let currData = books[Number.parseInt(curr.id)];
                    return currData && <Card 
                        cardId={currData.id}
                        key={currData.id}
                        imgHeight= {300}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {350}
                        inLibrary= {true}
                        progress= {curr.progress}
                    />
                })
            }else{
                return data.finishedBook.map((curr:any) => {
                    let currData = books[Number.parseInt(curr.id)];
                    return <Card 
                        cardId={currData.id}
                        key={currData.id}
                        imgHeight= {300}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {350}
                        inLibrary= {true}
                        progress= {100}
                    />
                });
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