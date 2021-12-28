import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import  Header from './components/Header/header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Movie  from './components/Movie';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle/>
      </Router>
    </div>
  );
}

export default App;
