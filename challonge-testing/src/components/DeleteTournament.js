import React, {useState} from 'react';
import Popup from "reactjs-popup"
import apiInstance from './API/apiInstance'
import "./DeleteTournament.css"

const DeleteTournament = (props) => {
  const [deleteTournament, setDeleteTournament] = useState([]);
  const onDelete = (url) =>{
    apiInstance.delete("/tournaments/"+url, {data:null})
    .then(response => setDeleteTournament(response))
    .catch(error => console.error(error));
    props.updated();
  }

  return (
    <div>
      {!props.loadingState &&
      <div className="delete-tournament">
        {props.tournaments.data.data.map((tournament) => {
          return (
            <p>
              <Popup
                trigger={<button className="delete-btn">Delete</button>} position="center"
                modal
                nested>
                {cancelDelete => (
                  <div className="delete-popup">
                      <h1>Delete Latest Tournament?</h1>
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
          )})}
        </div>
      }
    </div>
  )
}

export default DeleteTournament;
