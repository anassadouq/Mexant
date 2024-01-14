import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Liste from './Components/Liste/Liste';
import Create from './Components/Create/Create';
import Update from './Components/Update/Update';
  
class App extends Component{
  render(){
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
          <Route path="/Admin" element={
            <Liste/>
          }/>
          
        </Routes>
      </Router>
    )
  }
}
export default App;