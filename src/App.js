import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardDetails from './components/CardDetails'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/:id' element={<CardDetails/>}/>

        </Routes>
        
      </div>

    </Router>
  );
}

export default App;
