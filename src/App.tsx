import MyLibrary from './component/page/MyLibrary';
import Search from './component/page/Search';
import Header from './component/organism/Header';
import BookInfo from './component/page/BookInfo';
import Footer from './component/organism/Footer';
import {Box, Container} from '@mui/material';
import Explore from './component/page/Explore';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
const App = () => {
  const [exploreOption, setExploreOption] = useState(false);
  const handleExploreMenu = (event:any) => {
    setExploreOption(!exploreOption);
  };
  const [books, setBooks] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [library, setLibrary] = useState<any>(null);
  useEffect(() => {
    const processor = async () => {
        let response = await fetch('http://localhost:3004/extra');
        let data = await response.json();
        setData(data); 
        response = await fetch('http://localhost:3004/library');
        let library = await response.json();
        setLibrary(library);
        response = await fetch('http://localhost:3004/books');
        let books = await response.json();
        setBooks(books);
    };
    processor();
  }, []);
  return (
    (!data || !library || !books) 
    ?
    <Container sx={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
      <CircularProgress /> 
    </Container>
    :
    <Box sx={{position: 'relative', height: '100vh'}}>
      <Router>
          <Header 
            url= '/assets/logo.png'
            name= 'Blinkist'
            handleExploreMenu={handleExploreMenu}
            exploreOption={exploreOption}
          />
          <Box sx={{position: 'absolute', top: '100px', width: '100%'}}>
            <Routes >
                <Route path="/" element={<MyLibrary books={books} setBooks={setBooks} library={library} setLibrary={setLibrary}/>} />
                <Route path="book-info/:bookId" element={<BookInfo library={library} setLibrary={setLibrary}/>} />
                <Route path="search" element={ <Search books={books} setBooks={setBooks} data={data} setData={setData} library={library} setLibrary={setLibrary} /> }/>
                <Route
                    path="*"
                    element={
                        <div style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </div>
                    }
                  />
            </Routes>
            <Footer sx={{
              height:'367px',
              width:'100%', 
              backgroundColor: '#F1F6F4',
              display: 'flex',
              position: 'sticky',
              top: '100vh'
              }} />
            {exploreOption ? <Explore /> : ''}
          </Box>
      </Router>
    </Box>
  );
}

export default App;
