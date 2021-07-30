import React, {useState}from 'react'
import "./GetTournament.css"
import Popup from "reactjs-popup"
import apiInstance from './API/apiInstance'

const GetTournament = (props) => {
  // console.log(props.tournaments.data.data)
  const [deleteTournament, setDeleteTournament] = useState([]);
  const onDelete = (url) =>{
    apiInstance.delete("/tournaments/"+url, {data:null})
    .then(response => setDeleteTournament(response))
    .catch(error => console.error(error));
    props.updated();
  }
  return (
    <div className="get-tournament">
      {props.loadingState && <div className="loading"><h3>Loading... Please Wait.</h3></div>}
      {!props.loadingState &&
        <div>
          {props.tournaments.data.data.map((tournament) => {
            return (
              <ul className="tournaments-list">
                <li className="tournaments" key={tournament.id}>
                  <h2> {tournament.attributes.name} </h2>
                    <div className="tournamentDetails">
                      <p className="details">
                        <span className="detail-header">Tournament Type: </span>
                          &nbsp; {tournament.attributes.tournamentType}
                      </p>
                      <p className="details">
                        <span className="detail-header">Custom URL: </span>
                          &nbsp; https://challonge.com/{tournament.attributes.url}
                      </p>
                      <p>
                        <Popup
                          trigger={<button className="delete-btn">Delete</button>} position="center"
                          modal
                          nested>
                          {cancelDelete => (
                            <div className="delete-popup">
                                <h1>Delete This Tournament?</h1>
                                <button onClick={()=>{onDelete(tournament.attributes.url)}}>
                                  Yes
                                </button>             
                                <button className="cancel-btn" onClick={cancelDelete}>
                                  Cancel
                                </button>
                              </div>
                            )}
                        </Popup>
                      </p>
                    </div>
                </li>
              </ul>
          )})}
        </div>
      }
    </div>
  )
}

export default GetTournament;
