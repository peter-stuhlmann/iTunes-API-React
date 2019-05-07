import React, { Component } from 'react';

export default class TrackListItem extends Component {

    render() {

      const { results } = this.props;

      return (
        <React.Fragment>

          {results.map(songs => {

            const index = results.indexOf(songs) + 1
            songs.releaseDate = songs.releaseDate.slice(0, 10)

            if (songs.trackPrice == `-1`) {
              songs.trackPrice = "Album only"
              songs.currency = ""
            } else if (songs.trackPrice == `0`) {
              songs.trackPrice = "free"
              songs.currency = ""
            } else if (songs.trackPrice == undefined) {
              songs.trackPrice = "???"
              songs.currency = ""
            }

            return(
              <tr key={songs.trackId}>
                <td>{index}</td>
                <td>
                  <button id={"play" + songs.trackId}><span className="fas fa-play">&nbsp;</span></button>
                  <button id={"pause" + songs.trackId}><span className="fas fa-pause">&nbsp;</span></button>
                </td>
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