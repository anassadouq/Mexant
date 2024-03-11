import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './Authentification/Register';
import Login from './Authentification/Login';
import AuthGuard from './Authentification/AuthGuard';

import Home from './Components/Home/Home';
import Liste from './Components/Liste/Liste';
import Create from './Components/Create/Create';

import Services from './Components/Services/Services';
import About from './Components/About/About';
import BusinessSolution from './Components/BusinessSolution/BusinessSolution';
import Footer from './Components/Footer/Footer';

class App extends Component{
  render(){
    return (
      <Router>
        <Routes>
          {/* Auth */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

          <Route path="/" element={
            <>
              <Home/>
              <Services/>
              <BusinessSolution/><br/><br/>
              <About/><br/><br/>
              <Footer/>
            </>
          }/>

          <Route path="/create" element={
            <AuthGuard>
              <Create/>
            </AuthGuard>
          }/>

          <Route path="/admin" element={
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