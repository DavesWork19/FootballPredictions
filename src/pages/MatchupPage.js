import React, { useState, useEffect } from 'react';
import './MatchupPage.css'


function MatchupPage()
{
  const [winner, setWinner] = useState('');
  const [loser, setLoser] = useState('');


  useEffect(() => {
    const url = `/home/${window.location.pathname}`;


    const fetchData = async () => {
      try
      {
        const response = await fetch(url);
        const data = await response.json();


        setWinner(data[0]);
        setLoser(data[1]);
      }
      catch (error)
      {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  function goHome()
  {
    window.location.replace("/");
  }

  const currentURL = window.location.pathname;
  const teams = currentURL.split(",")

  let homeTeam = teams[0].split("%20");
  homeTeam = homeTeam.join(' ');
  homeTeam = homeTeam.slice(1)

  let awayTeam = teams[1].split("%20");
  awayTeam = awayTeam.join(' ')

  return (
    <>
    <h1>
      {awayTeam} @ {homeTeam}
    </h1>

    <table>
      <tbody>

        <tr>
          <td className="Winner">Winner: {winner}</td>
        </tr>

        <tr>
          <td className="Loser">Loser: {loser}</td>
        </tr>

      </tbody>
    </table>
    <div>
      <button className="matchupButton" onClick={goHome}>
        Back To Home Page
      </button>
    </div>
    </>
  );
}

export default MatchupPage;
