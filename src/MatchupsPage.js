import React, { useState, useEffect } from 'react';
import './MatchupsPage.css';
import text from './upcomingWeekData.txt';

import bufLogo from './logos/bufLogo.png';
import nweLogo from './logos/nweLogo.png';
import nyjLogo from './logos/nyjLogo.png';
import miaLogo from './logos/miaLogo.png';
import cinLogo from './logos/cinLogo.png';
import cleLogo from './logos/cleLogo.png';
import pitLogo from './logos/pitLogo.png';
import ravLogo from './logos/ravLogo.png';
import cltLogo from './logos/cltLogo.png';
import htxLogo from './logos/htxLogo.png';
import jaxLogo from './logos/jaxLogo.png';
import otiLogo from './logos/otiLogo.png';
import denLogo from './logos/denLogo.png';
import kanLogo from './logos/kanLogo.png';
import raiLogo from './logos/raiLogo.png';
import sdgLogo from './logos/sdgLogo.png';

import dalLogo from './logos/dalLogo.png';
import nygLogo from './logos/nygLogo.png';
import phiLogo from './logos/phiLogo.png';
import wasLogo from './logos/wasLogo.png';
import chiLogo from './logos/chiLogo.png';
import detLogo from './logos/detLogo.png';
import gnbLogo from './logos/gnbLogo.png';
import minLogo from './logos/minLogo.png';
import atlLogo from './logos/atlLogo.png';
import carLogo from './logos/carLogo.png';
import norLogo from './logos/norLogo.png';
import tamLogo from './logos/tamLogo.png';
import crdLogo from './logos/crdLogo.png';
import ramLogo from './logos/ramLogo.png';
import seaLogo from './logos/seaLogo.png';
import sfoLogo from './logos/sfoLogo.png';



function Matchups()
{
  const [teams, setTeams] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try
      {

        const response = await fetch(text);
        let data = await response.text();

        data = data.split("\n").slice(0, -1);
        data = data.map((dataPoints) => dataPoints.split("_"));

        setTeams(data);

      }
      catch (error)
      {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  function matchup(teams)
  {
    window.location.replace(`/${teams}`);
  }

  function setHomeTeam(team)
  {
    const homeTeam = team.slice(1);

    const buf = "Bills";
    const mia = "Dolphins";
    const nwe = "England";
    const nyj = "Jets";
    const cin = "Bengals";
    const cle = "Browns";
    const pit = "Steelers";
    const rav = "Ravens";
    const clt = "Colts";
    const htx = "Texans";
    const jax = "Jaguars";
    const oti = "Titans";
    const den = "Broncos";
    const kan = "Chiefs";
    const rai = "Raiders";
    const sdg = "Chargers";

    const dal = "Cowboys";
    const nyg = "Giants";
    const phi = "Eagles";
    const was = "Washington";
    const chi = "Bears";
    const det = "Lions";
    const gnb = "Packers";
    const min = "Vikings";
    const atl = "Falcons";
    const car = "Panthers";
    const nor = "Saints";
    const tam = "Buccaneers";
    const crd = "Cardinals";
    const ram = "Rams";
    const sea = "Seahawks";
    const sfo = "49ers";


    if (homeTeam.find(a => a.includes(buf)))
    {
      return(<img src={bufLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(mia)))
    {
      return(<img src={miaLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(nwe)))
    {
      return(<img src={nweLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(nyj)))
    {
      return(<img src={nyjLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(cin)))
    {
      return(<img src={cinLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(cle)))
    {
      return(<img src={cleLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(pit)))
    {
      return(<img src={pitLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(rav)))
    {
      return(<img src={ravLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(clt)))
    {
      return(<img src={cltLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(htx)))
    {
      return(<img src={htxLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(jax)))
    {
      return(<img src={jaxLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(oti)))
    {
      return(<img src={otiLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(den)))
    {
      return(<img src={denLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(kan)))
    {
      return(<img src={kanLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(rai)))
    {
      return(<img src={raiLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(sdg)))
    {
      return(<img src={sdgLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(dal)))
    {
      return(<img src={dalLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(nyg)))
    {
      return(<img src={nygLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(phi)))
    {
      return(<img src={phiLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(was)))
    {
      return(<img src={wasLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(chi)))
    {
      return(<img src={chiLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(det)))
    {
      return(<img src={detLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(gnb)))
    {
      return(<img src={gnbLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(min)))
    {
      return(<img src={minLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(atl)))
    {
      return(<img src={atlLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(car)))
    {
      return(<img src={carLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(nor)))
    {
      return(<img src={norLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(tam)))
    {
      return(<img src={tamLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(crd)))
    {
      return(<img src={crdLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(ram)))
    {
      return(<img src={ramLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(sea)))
    {
      return(<img src={seaLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
    else if (homeTeam.find(a => a.includes(sfo)))
    {
      return(<img src={sfoLogo} class="w-25 rounded img-fluid float-right homeTeam" alt="logo"></img>)
    }
  }

  function setAwayTeam(team)
  {
    const awayTeam = team.slice(0,1);

    const buf = "Bills";
    const mia = "Dolphins";
    const nwe = "England";
    const nyj = "Jets";
    const cin = "Bengals";
    const cle = "Browns";
    const pit = "Steelers";
    const rav = "Ravens";
    const clt = "Colts";
    const htx = "Texans";
    const jax = "Jaguars";
    const oti = "Titans";
    const den = "Broncos";
    const kan = "Chiefs";
    const rai = "Raiders";
    const sdg = "Chargers";

    const dal = "Cowboys";
    const nyg = "Giants";
    const phi = "Eagles";
    const was = "Washington";
    const chi = "Bears";
    const det = "Lions";
    const gnb = "Packers";
    const min = "Vikings";
    const atl = "Falcons";
    const car = "Panthers";
    const nor = "Saints";
    const tam = "Buccaneers";
    const crd = "Cardinals";
    const ram = "Rams";
    const sea = "Seahawks";
    const sfo = "49ers";


    if (awayTeam.find(b => b.includes(buf)))
    {
      return(<img src={bufLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(mia)))
    {
      return(<img src={miaLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(nwe)))
    {
      return(<img src={nweLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(nyj)))
    {
      return(<img src={nyjLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(cin)))
    {
      return(<img src={cinLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(cle)))
    {
      return(<img src={cleLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(pit)))
    {
      return(<img src={pitLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(rav)))
    {
      return(<img src={ravLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(clt)))
    {
      return(<img src={cltLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(htx)))
    {
      return(<img src={htxLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(jax)))
    {
      return(<img src={jaxLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(oti)))
    {
      return(<img src={otiLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(den)))
    {
      return(<img src={denLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(kan)))
    {
      return(<img src={kanLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(rai)))
    {
      return(<img src={raiLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(sdg)))
    {
      return(<img src={sdgLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(dal)))
    {
      return(<img src={dalLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(nyg)))
    {
      return(<img src={nygLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(phi)))
    {
      return(<img src={phiLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(was)))
    {
      return(<img src={wasLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(chi)))
    {
      return(<img src={chiLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(det)))
    {
      return(<img src={detLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(gnb)))
    {
      return(<img src={gnbLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(min)))
    {
      return(<img src={minLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(atl)))
    {
      return(<img src={atlLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(car)))
    {
      return(<img src={carLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(nor)))
    {
      return(<img src={norLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(tam)))
    {
      return(<img src={tamLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(crd)))
    {
      return(<img src={crdLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(ram)))
    {
      return(<img src={ramLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(sea)))
    {
      return(<img src={seaLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
    else if (awayTeam.find(b => b.includes(sfo)))
    {
      return(<img src={sfoLogo} class="w-25 rounded img-fluid float-left awayTeam" alt="logo"></img>)
    }
  }

  function setWeeklyMatchups()
  {
    return(
            teams.map(team =>
              <tr key={team.toString()}>
                <td>
                  <button class="homeButton" onClick={() => matchup(team)}>
                    {setAwayTeam(team)}@{setHomeTeam(team)}
                  </button>
                </td>
              </tr>
            )
          )
  }

  return (
    setWeeklyMatchups()
  )

}

export default Matchups;
