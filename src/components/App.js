import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/scss/main.scss';
import AudioPlayer from './AudioPlayer';
import Search from './Search';
import TrackList from './TrackList';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';

export default class App extends Component {
  
  constructor(props) {
    super()
    
    this.localStorage = JSON.parse(localStorage.getItem('Favourite Music'))

    this.playerRef = React.createRef()

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

  onPlay = (previewUrl) => {
    const player = this.playerRef;
    player.current.src = previewUrl;
    player.current.play();
  }

  onPause = () => {
    const player = this.playerRef;
    player.current.pause();
    player.current.src = "";
  }

  render() {

    return (
      <Router>

        <main>

          <Link className="site-title" to="/">Songs</Link>

          <Search onSearchInputChangeHandler={this.onSearchInputChange} />

          <Switch>
            <Route exact path="/" render={(props) => <React.Fragment><TrackList {...props} results={this.state.results} searchTerm={this.state.searchTerm} onPlay={this.onPlay} onPause={this.onPause} /><AudioPlayer playerRef={this.playerRef} /></React.Fragment>} />
            <Route path="/impressum" component={ LegalNotice } />
            <Route path="/datenschutzerklaerung" component={ PrivacyPolicy } />
          </Switch>

        </main>

        <Footer />

      </Router>
    );
  }
}