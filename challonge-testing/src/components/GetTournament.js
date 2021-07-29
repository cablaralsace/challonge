import React from 'react'

const GetTournament = (props) => {
  // console.log(props.tournaments.data.data)
  return (
    <div>
      {props.loadingState && <div>Loading... Please Wait.</div>}
      {!props.loadingState &&
        <div>
          {props.tournaments.data.data.map((tournament) => {
            return (
              <ul className="tournaments-list">
                <li className="tournaments" key={tournament.id}>
                  <p> Tournament Name: {tournament.attributes.name} </p>
                  <p> Tournament Type: {tournament.attributes.tournamentType} </p>
                  <p> URL: {tournament.attributes.url} </p>
                </li>
              </ul>
          )})}
        </div>
      }
    </div>
  )
}

export default GetTournament;
