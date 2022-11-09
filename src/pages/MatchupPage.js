import React, { useState, useEffect } from 'react';
import './MatchupPage.css';
import predictions from './results.txt';


function MatchupPage()
{
  const [winner, setWinner] = useState('');
  const [loser, setLoser] = useState('');
  const [percent, setPercent] = useState('');


  useEffect(() => {
    
    const fetchData = async () => {
      try
      {

        const response = await fetch(predictions);
        let data = await response.text();
        data = data.split("\n");
        data = data.map((dataPoints) => dataPoints.split(","));
        data = data.slice(0, -1);

        const url = window.location.pathname.split(",");
        let name = url[0];
        name = name.slice(1);


        let results = []

        for (let i = 0; i < data.length; i++)
        {
          const dataPoint = data[i];
          if ((dataPoint[0].includes(name)) || (dataPoint[1].includes(name)) || (dataPoint[2].includes(name)))
          {
            results = dataPoint;
            break;
          }
        }

        setWinner(results[0]);
        setLoser(results[1]);
        setPercent(results[2]);


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

  let homeTeam = teams[0];
  homeTeam = homeTeam.slice(1)

  let awayTeam = teams[1];

  return (
    <>
    <h1>
      {awayTeam} @ {homeTeam}
    </h1>

    <table>
      <tbody>

        <tr>
          <td className="Winner">{percent}% chance of {winner} winning</td>
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
