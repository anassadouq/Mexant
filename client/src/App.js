import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './Authentification/Register';
import Login from './Authentification/Login';
import AuthGuard from './Authentification/AuthGuard';

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Liste from './Components/Liste/Liste';
import Create from './Components/Create/Create';
import Update from './Components/Update/Update';
  
class App extends Component{
  render(){
    return (
      <Router>
        <Routes>
          {/* Auth */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Update/:id' element={<Update/>}/>

          <Route path="/Admin" element={
            <AuthGuard>
              <Liste/>
            </AuthGuard>
          }/>

        </Routes>
      </Router>
    )
  }
}
export default App;