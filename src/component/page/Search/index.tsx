import {Container, Box} from '@mui/material'
import Banner from '../../molecule/Banner';
import Input from '../../atom/Input';
import {Search} from '@mui/icons-material';
import {useState, useEffect} from 'react';
const SearchComponent = (props:any)=>{
    // const [data, setData] = useState([]);
    const data = [
        {
            'heading': 'Trending blinks',
            'books': [
                {'id': 0},
                {'id' : 1},
                {'id': 2},
                {'id': 3},
                {'id': 4},
                {'id': 5},
            ]
        },
        {
            'heading': 'Just added',
            'books': [
                {'id': 6},
                {'id' : 7},
                {'id': 8}
            ]
        },
        {
            'heading': 'Featured audio blinks',
            'books': [
                {'id': 10},
                {'id' : 11},
                {'id': 12}
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
                
            </Box>
        </Container>
    );
}

export default SearchComponent;