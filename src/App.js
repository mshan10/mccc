import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import History from './components/About/history';
import DeaconBoard from './components/About/deaconBoard';
import FaithStatement from './components/About/faithStatement'
import NewMembers from './components/About/newMembers'
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about/history" component={History} />
                    <Route exact path="/about/deaconboard" component={DeaconBoard} />
                    <Route exact path="/about/faithstatement" component={FaithStatement} />
                    <Route exact path="/about/newmembers" component={NewMembers} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
