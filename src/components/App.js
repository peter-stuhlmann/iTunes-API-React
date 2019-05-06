import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/scss/main.scss';
import TrackList from './TrackList';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';

export default class App extends Component {
  
  constructor(props) {
    super()
    
    this.state = {
    results: [],
    }
  }

  componentDidMount() {
    fetch('https://dci-fbw12-search-itunes.now.sh/?term=Silence&limit=20')
      .then(response => response.json())
      .then(data => this.setState({ results: data.results }));
  }

  render() {
    return (
      <Router>

        <Link className="site-title" to="/">Songs</Link>

        <Switch>
          <Route exact path="/" render={(props) => <TrackList {...props} results={this.state.results} />} />
          <Route path="/impressum" component={ LegalNotice } />
          <Route path="/datenschutzerklaerung" component={ PrivacyPolicy } />
        </Switch>

        <Footer />

      </Router>
    );
  }
}
