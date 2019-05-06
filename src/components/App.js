import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/scss/main.scss';
import TrackList from './TrackList';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';

export default class App extends Component {
  
  render() {
    return (
      <Router>

        <Link className="site-title" to="/">Songs</Link>

        <Switch>
          <Route exact path="/" component={ TrackList } />
          <Route path="/impressum" component={ LegalNotice } />
          <Route path="/datenschutzerklaerung" component={ PrivacyPolicy } />
        </Switch>

        <Footer />

      </Router>
    );
  }
}
