import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul>
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutzerklaerung">Datenschutzerklärung</Link></li>
            <li><a href="https://github.com/peter-stuhlmann"><span className="fab fa-github">&nbsp;</span>Github</a></li>
            <li><a href="https://peter-stuhlmann-webentwicklung.de/">Peter R. Stuhlmann Webentwicklung</a></li>
          </ul>
        </nav>
      </footer>
    );
  }
}