import React, { useEffect, useState} from "react";
import apiInstance from "./components/API/apiInstance"
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
        <h1> HEADER </h1>
      </div>
      <div className="app-menu">
        <h1> MENU </h1>
        <button className="btn-list" onClick={updated}> LIST </button>
      </div>
      <div className="response-body">
        <h1> RESPONSE BODY </h1>
        <GetTournament tournaments={tournaments} updated={updated} loadingState={loadingState}/>
      </div>
    </div>
  );
}

export default App;
