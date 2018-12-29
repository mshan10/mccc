import React, { Component } from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import History from './components/About/history'
import DeaconBoard from './components/About/deaconBoard'
import FaithStatement from './components/About/faithStatement'
import Testimonies from './components/About/testimonies'
import NewMembers from './components/About/newMembers'
import Photos from './components/Services/photos'
import BibleStudies from './components/Services/bibleStudies'
import YouthGroup from './components/Services/youthGroup'
import PrayerMeeting from './components/Services/prayerMeeting'
import EventCalendar from './components/Services/eventCalendar'
import SundaySchool from './components/Services/sundaySchool'
import Contact from './components/contact'
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Parse.initialize("FC6cpsUs8zlFdwysXMgGbxopflQdO4g2KKlnAJNp", "5T4ZMeffojFJV49trkjxsJ64jpWlDNmLQQjTMPyo")
// Parse.serverURL = "https://parseapi.back4app.com/"


export default class App extends Component {

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
                        <Route exact path="/services/photos"><Photos/></Route>
                        <Route exact path="/services/biblestudies"><BibleStudies/></Route>
                        <Route exact path="/services/youthgroup"><YouthGroup/></Route>
                        <Route exact path="/services/prayerMeeting"><PrayerMeeting/></Route>
                        <Route exact path="/services/eventCalendar"><EventCalendar/></Route>
                        <Route exact path="/services/sundaySchool"><SundaySchool/></Route>
                        <Route exact path="/contact"><Contact/></Route>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
