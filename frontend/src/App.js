import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/Homescreen';


const App = () => {
    return (
        <Router>
          <Header/>
          <main className="py-4">
            <Container>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/daily' component={HomeScreen} exact />
              
            </Container>
            <Footer/>
          </main>
        </Router>
    )
}

export default App
