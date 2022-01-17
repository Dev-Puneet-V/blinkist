import MyLibrary from './component/page/MyLibrary';
import Search from './component/page/Search';
import Header from './component/organism/Header';
import BookInfo from './component/page/BookInfo';
import Footer from './component/organism/Footer';
import {Box, Container} from '@mui/material';
import Explore from './component/page/Explore';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
const App = () => {
  const [exploreOption, setExploreOption] = useState(false);
  const handleExploreMenu = (event:any) => {
    setExploreOption(!exploreOption);
  };
  return (
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
                <Route path="/" element={<MyLibrary />} />
                {/* <Route path="projects" element={<Projects />} >
                    <Route path=":projectId" element={<ProjectInfo />} />
                </Route> */}
                <Route path="search" element={ <Search />} />
                <Route path="book-info" element={<BookInfo />} />
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
