import React from "react";
import { useState } from "react";
import apiInstance from "./API/apiInstance";
import './TournamentForm.css'


const TournamentForm = () => {
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentType, setTournamentType] = useState("single elimination");
  const [tournamentUrl, setTournamentUrl] = useState("");
  const [startsAt, setStartsAt] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    apiInstance.post("/tournaments", {
      "data": {
        "type": "Tournaments",
        "attributes": {
          "name": tournamentName,
          "tournament_type": tournamentType,
          "url": tournamentUrl,
          "starts_at": startsAt,
        },
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      setTournamentName('');
      setTournamentUrl('');
      setTournamentType('Single Elimination');
      setStartsAt('');
  };

  return (
    <div className="createTournament-form">
      <form>
        <label className="createLabel">Create Tournament</label>
        <label className="form-label">Tournament Name</label>
        <input
          type="text"
          required
          value={tournamentName}
          onChange={(e) => {
            setTournamentName(e.target.value);
          }}
          
        />
        <label className="form-label">URL</label>
        <input
          type="text"
          required
          value={tournamentUrl}
          
          onChange={(e) => {
            setTournamentUrl(e.target.value);
          }}
        />
        <label className="form-label">Tournament Type</label>
        <select
          required
          value={tournamentType}
          onChange={(e) => {
            setTournamentType(e.target.value);
          }}
        >
          <option value="single elimination">Single Elimination</option>
          <option value="double elimination">Double Elimination</option>
        </select>
        <label className="form-label">Start Date</label>
        <input
          type="date"
          required
          value={startsAt}
          onChange={(e) => {
            setStartsAt(e.target.value);
          }}
        />
        <br/>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default TournamentForm;