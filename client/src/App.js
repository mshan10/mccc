import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import History from './components/About/history';
import DeaconBoard from './components/About/deaconBoard';
import FaithStatement from './components/About/faithStatement'
import Testimonies from './components/About/testimonies'
import NewMembers from './components/About/newMembers'
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Parse.initialize("FC6cpsUs8zlFdwysXMgGbxopflQdO4g2KKlnAJNp", "5T4ZMeffojFJV49trkjxsJ64jpWlDNmLQQjTMPyo")
// Parse.serverURL = "https://parseapi.back4app.com/";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route exact path="/about/history"><History/></Route>
                        <Route exact path="/about/deaconboard"><DeaconBoard/></Route>
                        <Route exact path="/about/faithstatement"><FaithStatement/></Route>
                        <Route exact path="/about/testimonies"><Testimonies/></Route>
                        <Route exact path="/about/newmembers"><NewMembers/></Route>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
