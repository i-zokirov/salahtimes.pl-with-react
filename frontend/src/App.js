import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/Homescreen';
import ContactScreen from './screens/ContactScreen';

const App = () => {
    return (
        <Router>
          <Header/>
          
          <main style={{maxWidth: "850px"}} className="py-4 container-sm">
            <Container>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/prayer_times' component={HomeScreen} exact />
              <Route path='/contact' component={ContactScreen} exact />     
            </Container>
          </main>
          <Footer/>
        </Router>
    )
}

export default App
