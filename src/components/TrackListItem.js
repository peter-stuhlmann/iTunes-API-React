import React, { Component } from 'react';

export default class TrackListItem extends Component {

    render() {

      const { results } = this.props;

      return (
        <React.Fragment>

          {results.map(songs =>
            <tr>
              <td>{songs.index}</td>
              <td></td>
              <td><img alt={songs.collectionName} title={songs.collectionName} src={songs.artworkUrl30} /></td>
              <td>{songs.trackName}</td>
              <td>{songs.artistName}</td>
              <td className="nowrap">{songs.releaseDate}</td>
              <td><a title="Redirect to iTunes" target="_blanc" href={songs.trackViewUrl}>{songs.trackPrice}&nbsp;{songs.currency}</a></td>
            </tr>
        )}

        </React.Fragment>
    );
  }
}