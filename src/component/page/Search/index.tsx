import {Container, Box} from '@mui/material'
import Banner from '../../molecule/Banner';
import Input from '../../atom/Input';
import {Search} from '@mui/icons-material';
import Card from '../../organism/Card';
import Typography from '../../atom/Typography';
import CircularProgress from '@mui/material/CircularProgress';
const SearchComponent = ({books, setBooks, data, setData, library, setLibrary, ...props}:any)=>{
    const checkInLibrary = (bookId:any)=>{
        let checker = (curr:any) => {
            for(let currData of curr){
                if(currData.id === bookId){
                    return {status: true, progress : currData.progress};
                }
            }
            return {status: false};
        }
        return checker(library.currentlyReading) || checker(library.finishedBook);
    }

    const libraryHandler = async (bookId:any, setBookStatus:any) => {
        try {
            library.currentlyReading.push({
                "id" : bookId,
                "progress" : 0
            });
            setLibrary(library);
            setBookStatus(true);
            let res = await  fetch("http://localhost:3004/library/", {
              method: "PUT",
              body: JSON.stringify(library),
              headers: {
                "Content-Type": "application/json"
              }
            });
            return await res.json();
          } catch (err) {
                setBookStatus(false);
                setLibrary(library.currentlyReading.filter((currData:any) => currData.id !== bookId));
                return err;
          }
    }
    return (
        <Container>
            <Banner
                heading='Explore Books on entrepreneurship'
                discription='Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.'
                img='/assets/banner.png'
            />
            <Input sx={{
                   margin: '30px 0px',
                   height: '46px',
                   width: '100%',
                   maxWidth: '658px',
                   fontWeight: 'bold',
                   fontSize: '20px'
                }} icon={<Search />} placeholder="Search by title or author" />
            <Box>
                {
                data.map((curr:any)=>{
                    return <Box>
                        <Typography sx={{fontWeight: 'bold', fontSize: '25px', marginTop: '75px'}}>
                            {curr.heading}
                        </Typography>
                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                            {  
                                !library ?
                                 <CircularProgress /> :
                                    curr.books.map((currData:any) => {
                                        currData = books[currData.id];
                                        const inLibrary = checkInLibrary(currData.id)
                                        return <Card 
                                            cardId={currData.id}
                                            key={currData.id}
                                            imgHeight= {300}
                                            url= {currData.url}
                                            bookName= {currData.name}
                                            writerName= {currData.writerName}
                                            timeRead= {currData.timeRead}
                                            width= {350}
                                            inLibrary= {inLibrary.status}
                                            progress={inLibrary.progress}
                                            libraryHandler={libraryHandler}
                                        />
                                    })
                            }
                        </Box>
                    </Box>
                })
            }
            </Box>
        </Container>
    );
}

export default SearchComponent;