import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/scss/main.scss';
import Search from './Search';
import TrackList from './TrackList';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';

export default class App extends Component {
  
  constructor(props) {
    super()
    
    this.localStorage = JSON.parse(localStorage.getItem('Favourite Music'))

    this.state = {
      results: [],
      searchTerm: this.localStorage || 'Helene Fischer'
    }
  }

  componentDidMount() {
    this.searchForMusic()
  }

  onSearchInputChange = e => {
    e.persist();
    const searchTerm = e.target.value;

    localStorage.setItem("Favourite Music", JSON.stringify(searchTerm))

    this.setState({ searchTerm }, () => {
      if (searchTerm.length > 2) {
        this.searchForMusic();
      }
    });
  };

  searchForMusic = (searchTerm = this.state.searchTerm) => {
    fetch(`https://dci-fbw12-search-itunes.now.sh/?term=${searchTerm}&limit=20`)
      .then(response => response.json())
      .then(data => this.setState({ results: data.results }));
  }

  render() {

    return (
      <Router>

        <main>

          <Link className="site-title" to="/">Songs</Link>

          <Search onSearchInputChangeHandler={this.onSearchInputChange} />

          <Switch>
            <Route exact path="/" render={(props) => <TrackList {...props} results={this.state.results} searchTerm={this.state.searchTerm} />} />
            <Route path="/impressum" component={ LegalNotice } />
            <Route path="/datenschutzerklaerung" component={ PrivacyPolicy } />
          </Switch>

        </main>

        <Footer />

      </Router>
    );
  }
}