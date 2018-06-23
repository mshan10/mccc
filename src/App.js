import React, { Component } from 'react';
import HeadNav from './components/head_nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeadNav />

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
