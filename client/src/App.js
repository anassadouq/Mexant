import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Liste from './Components/Liste/Liste';
import Create from './Components/Create/Create';
import Update from './Components/Update/Update';

import Home from './Components/Home/Home';
  
class App extends Component{
  render(){
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Admin' element={<Liste/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
          
        </Routes>
      </Router>
    )
  }
}
export default App;