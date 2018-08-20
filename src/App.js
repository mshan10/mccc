import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import History from './components/About/history';
import Deacon from './components/About/deacon';
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
                    <Route exact path="/about/deaconboard" component={Deacon} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
