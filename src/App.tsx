import MyLibrary from './component/page/MyLibrary';
import Search from './component/page/Search';
import Header from './component/organism/Header';
import BookInfo from './component/page/BookInfo';
import Footer from './component/organism/Footer';
import {Box, Container} from '@mui/material';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
const App = () => {
  return (
    <Box sx={{position: 'relative'}}>
    <Router>
        <Header 
          url= '/assets/logo.png'
          name= 'Blinkist'
        />
        <Box sx={{position: 'relative', top: '100px'}}>
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
        </Box>
        <Footer sx={{
          height:'250px',
          width:'100%', 
          backgroundColor: '#F1F6F4',
          display: 'flex',
          position: 'sticky',
          left: '0'
          }} />
    </Router>
    </Box>
  );
}

export default App;
