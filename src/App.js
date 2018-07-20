import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Home />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
