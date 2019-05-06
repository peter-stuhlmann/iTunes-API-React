import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrackList from './TrackList';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';

export default class App extends Component {
  
  render() {
    return (
      <Router>

        <span className="site-title">Songs</span>

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
