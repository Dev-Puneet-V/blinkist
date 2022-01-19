import {Container, Box} from '@mui/material';
import Typography from '../../atom/Typography';
import Icon from '../../atom/Icon';
import {AccessAlarm, ArrowForward, LibraryAddTwoTone} from '@mui/icons-material';
import Button from '../../atom/Button';
import Image from '../../atom/Image';
import Tab from '../../molecule/tabs';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
const BookInfoComponent = ({library, setLibrary}:any)=>{
    const { bookId } = useParams();
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
    const [bookData, setBookData] = useState<any>(null);
    const [currentlyReadingStatus, setcurrentlyReadingStatus] = useState<boolean>(true);
    const handleState = (state:any) => {
        setCurrState(state);
    }
    const checkInLibrary = ()=>{
        for(let curr of library.currentlyReading){
            console.log(curr.id,bookId)
            if(curr.id == bookId){
                setcurrentlyReadingStatus(true)
                return;
            }
        }
        setcurrentlyReadingStatus(false);
    }
    useEffect(() =>{
        const processor = async (bookId: any) => {
            let response = await fetch(`http://localhost:3004/books/${bookId}`);
            const bookData = await response.json();
            setBookData(bookData);
        }
        checkInLibrary();
        processor(bookId);
    }, []);
    const libraryStatusHandler = async (event:any) => {
        console.log("hello")
        try{
            let index = library.currentlyReading.findIndex((curr:any) => curr.id == bookId);
            let currData = library.currentlyReading[index];
            library.currentlyReading.splice(index, 1);
            library.finishedBook[index] = {"id" : currData.id};
            setLibrary(library);
            let res = await  fetch("http://localhost:3004/library/", {
                method: "PUT",
                body: JSON.stringify(library),
                headers: {
                "Content-Type": "application/json"
                }
            });
            checkInLibrary();
            return await res.json();
        }catch(err){
            setLibrary(library);
        }
    }
    const moreInfo = ()=>{
        if(currState === tabData[0].value){
            return(
                <Typography>
                    {bookData.synopics}
                </Typography>
            )
        }else if(currState === tabData[1].value){
            return(
                <Typography>
                    {bookData.for}  
                </Typography>
            )
        }else if(currState === tabData[2].value){
            return(
                <Typography>
                    {bookData.about_author}       
                </Typography>
            )
        }
    }

    return(
        !bookData 
                ?
        <CircularProgress />
            :
        <Container>
            <Typography sx={{margin: '20px 0px'}}>
                Get the key ideas from
            </Typography>
            <Box sx={{display: 'flex',justifyContent: 'space-between', marginBottom: '40px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography variant='h4' sx={{fontWeight: 'bold',marginBottom: '20px'}}>
                            {bookData.name}
                        </Typography>
                        <Typography sx={{marginBottom: '20px'}}>
                            {bookData.aim}
                        </Typography>
                        <Typography sx={{color: 'gray', fontWeight: 'bold', marginBottom: '20px'}}>
                            {bookData.writerName}
                        </Typography>
                        <Box 
                            sx={{display: 'flex',
                            alignItems: 'center'
                            }}
                        >
                            <Icon icon={<AccessAlarm sx={{padding: '0px 5px 0px 0px'}}/>} />
                            <Typography sx={{color: "gray", fontSize: "16px" }} variant="body">
                                {bookData.timeRead}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{fontWeight: '700', display: 'flex'}}>
                        <Button label='Read now' size='medium' variant='outlined' color='success' sx={{margin: '12px 24px 12px 0px'}} />
                        {currentlyReadingStatus 
                            ?
                            <Button label= 'Finished Reading' size='medium' variant='contained' color='success' libraryStatusHandler={libraryStatusHandler} sx={{margin: '12px 24px 12px 0px'}}/>
                            :
                            '.'
                        }
                        <Button label='Send to Kindle' size='medium' sx={{color:'gray', margin: '12px 24px 12px 0px'}} endIcon={<ArrowForward />}/>
                    </Box>
                </Box>
                <Box>
                    <Image height='300' width='280' src= {bookData.url}/>
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