import {Container, Box} from '@mui/material'
import Banner from '../../molecule/Banner';
import Input from '../../atom/Input';
import {Search} from '@mui/icons-material';
import {useState, useEffect} from 'react';
import Card from '../../organism/Card';
import Typography from '../../atom/Typography';
const SearchComponent = (props:any)=>{
    // const [data, setData] = useState([]);
    const data = [
        {
            'heading': 'Trending blinks',
            'books': [
                {
                    "id": 0,
                    "name": "Being Boss",
                    "url": "assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
                {
                    "id": 1,
                    "name": "Being Boss",
                    "url": "/assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
                {
                    "id": 3,
                    "name": "Being Boss",
                    "url": "/assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
                {
                    "id": 4,
                    "name": "Being Boss",
                    "url": "/assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
                {
                    "id": 9,
                    "name": "Being Boss",
                    "url": "/assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
                {
                    "id": 7,
                    "name": "Being Boss",
                    "url": "/assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
            ]
        },
        {
            'heading': 'Just added',
            'books': [
                {
                    "id": 0,
                    "name": "Being Boss",
                    "url": "assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
                {
                    "id": 1,
                    "name": "Being Boss",
                    "url": "/assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
                {
                    "id": 3,
                    "name": "Being Boss",
                    "url": "/assets/book.png",
                    "timeRead": "13-minute read",
                    "writerName": "Jim Collins & Bill Lazier"
                },
            ]
        },
        {
            'heading': 'Featured audio blinks',
            'books': [
            {
                "id": 4,
                "name": "Being Boss",
                "url": "/assets/book.png",
                "timeRead": "13-minute read",
                "writerName": "Jim Collins & Bill Lazier"
            },
            {
                "id": 9,
                "name": "Being Boss",
                "url": "/assets/book.png",
                "timeRead": "13-minute read",
                "writerName": "Jim Collins & Bill Lazier"
            },
            {
                "id": 7,
                "name": "Being Boss",
                "url": "/assets/book.png",
                "timeRead": "13-minute read",
                "writerName": "Jim Collins & Bill Lazier"
            },
            ]
        },
    ]
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
                        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                            {
                                curr.books.map((currData:any) => {
                                    return <Card 
                                        key={currData.id}
                                        imgHeight= {300}
                                        url= {currData.url}
                                        bookName= {currData.name}
                                        writerName= {currData.writerName}
                                        timeRead= {currData.timeRead}
                                        width= {350}
                                        inLibrary= {false}
                                        progress= {currData.progress}
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