import React, { Component } from 'react';
import Navbar from './components/NavBar/navbar';
import Home from './components/Home';
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Home />
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
