import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import TrackListItem from './TrackListItem';
import TrackCounter from "./TrackCounter";

export default class TrackList extends Component {

    render() {
      
      return (
        <React.Fragment>

          <MetaTags>
            <title>Privacy policy | iTunes Tracklist</title>
            <link rel="shortcut icon" type="image/png" href={require("../assets/img/powered.png")} />
            <meta name="description" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
          </MetaTags>
        
          <TrackCounter tracksAmount={Object.keys(this.props.results).length} />

          <table id="searchResults">
            <colgroup>
              <col width="50" />
              <col width="100" />
              <col width="35" />
              <col width="290" />
              <col width="235" />
              <col width="150" />
              <col width="95" />
            </colgroup>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th colSpan="2">name&nbsp;<span className="fas fa-caret-down">&nbsp;</span></th>
                <th>artist&nbsp;<span className="fas fa-caret-down">&nbsp;</span></th>
                <th>release date&nbsp;<span className="fas fa-caret-down">&nbsp;</span></th>
                <th>price&nbsp;<span className="fas fa-caret-down">&nbsp;</span></th>
              </tr>
            </thead>
            <tbody className="tracklist">
              <TrackListItem results={this.props.results} />
            </tbody>
          </table>

        </React.Fragment>
    );
  }
}