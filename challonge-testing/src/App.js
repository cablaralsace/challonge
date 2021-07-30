import React, { useEffect, useState} from "react";
import apiInstance from "./components/API/apiInstance"
import Header from "./components/Header"
import TournamentForm from "./components/TournamentForm";
import GetTournament from "./components/GetTournament"
import './App.css';


const App = () => {
  const [tournaments, setTournaments] = useState ([]);
  const [loadingState, setLoadingState] = useState(true);
  const [update, setUpdate] = useState(0);
  const updated = () => {
    setUpdate(update+1)
  }
  
  useEffect(() => {
    apiInstance.get("/tournaments", {data:null})
      .then(response => {setTournaments(response); setLoadingState(false)})
      .catch(error => console.error(error))
  }, [update])

  
  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div className="app-container">
        <div className="form-body">
          <TournamentForm/>
          
        </div>
        <div className="response-body">
          {/* <button className="btn-list" onClick={updated}> UPDATE LIST </button> */}
          <GetTournament tournaments={tournaments} updated={updated} loadingState={loadingState}/>
        </div>
      </div>
    </div>
  );
}

export default App;
