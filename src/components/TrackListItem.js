import React, { Component } from 'react';

export default class TrackListItem extends Component {

    render() {

      const { results } = this.props;

      return (
        <React.Fragment>

          {results.map(songs => {

            const index = results.indexOf(songs) + 1
            songs.releaseDate = songs.releaseDate.slice(0, 10)
            
            return(
              <tr>
                <td>{index}</td>
                <td></td>
                <td><img alt={songs.collectionName} title={songs.collectionName} src={songs.artworkUrl30} /></td>
                <td>{songs.trackName}</td>
                <td>{songs.artistName}</td>
                <td className="nowrap">{songs.releaseDate}</td>
                <td><a title="Redirect to iTunes" target="_blanc" href={songs.trackViewUrl}>{songs.trackPrice}&nbsp;{songs.currency === 'USD' ? '$' : songs.currency}</a></td>
              </tr>
            )
          })}

        </React.Fragment>
    );
  }
}