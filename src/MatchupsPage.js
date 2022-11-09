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
    const homeTeam = team.slice(0,1);

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
      return(<img className="homeLogo" src={bufLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(mia)))
    {
      return(<img className="homeLogo" src={miaLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(nwe)))
    {
      return(<img className="homeLogo" src={nweLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(nyj)))
    {
      return(<img className="homeLogo" src={nyjLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(cin)))
    {
      return(<img className="homeLogo" src={cinLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(cle)))
    {
      return(<img className="homeLogo" src={cleLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(pit)))
    {
      return(<img className="homeLogo" src={pitLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(rav)))
    {
      return(<img className="homeLogo" src={ravLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(clt)))
    {
      return(<img className="homeLogo" src={cltLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(htx)))
    {
      return(<img className="homeLogo" src={htxLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(jax)))
    {
      return(<img className="homeLogo" src={jaxLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(oti)))
    {
      return(<img className="homeLogo" src={otiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(den)))
    {
      return(<img className="homeLogo" src={denLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(kan)))
    {
      return(<img className="homeLogo" src={kanLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(rai)))
    {
      return(<img className="homeLogo" src={raiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(sdg)))
    {
      return(<img className="homeLogo" src={sdgLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(dal)))
    {
      return(<img className="homeLogo" src={dalLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(nyg)))
    {
      return(<img className="homeLogo" src={nygLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(phi)))
    {
      return(<img className="homeLogo" src={phiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(was)))
    {
      return(<img className="homeLogo" src={wasLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(chi)))
    {
      return(<img className="homeLogo" src={chiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(det)))
    {
      return(<img className="homeLogo" src={detLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(gnb)))
    {
      return(<img className="homeLogo" src={gnbLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(min)))
    {
      return(<img className="homeLogo" src={minLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(atl)))
    {
      return(<img className="homeLogo" src={atlLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(car)))
    {
      return(<img className="homeLogo" src={carLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(nor)))
    {
      return(<img className="homeLogo" src={norLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(tam)))
    {
      return(<img className="homeLogo" src={tamLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(crd)))
    {
      return(<img className="homeLogo" src={crdLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(ram)))
    {
      return(<img className="homeLogo" src={ramLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(sea)))
    {
      return(<img className="homeLogo" src={seaLogo} alt="logo" width="47" height="47"/>)
    }
    else if (homeTeam.find(a => a.includes(sfo)))
    {
      return(<img className="homeLogo" src={sfoLogo} alt="logo" width="47" height="47"/>)
    }
  }

  function setAwayTeam(team)
  {
    const awayTeam = team.slice(1);

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
      return(<img className="awayLogo" src={bufLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(mia)))
    {
      return(<img className="awayLogo" src={miaLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(nwe)))
    {
      return(<img className="awayLogo" src={nweLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(nyj)))
    {
      return(<img className="awayLogo" src={nyjLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(cin)))
    {
      return(<img className="awayLogo" src={cinLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(cle)))
    {
      return(<img className="awayLogo" src={cleLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(pit)))
    {
      return(<img className="awayLogo" src={pitLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(rav)))
    {
      return(<img className="awayLogo" src={ravLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(clt)))
    {
      return(<img className="awayLogo" src={cltLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(htx)))
    {
      return(<img className="awayLogo" src={htxLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(jax)))
    {
      return(<img className="awayLogo" src={jaxLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(oti)))
    {
      return(<img className="awayLogo" src={otiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(den)))
    {
      return(<img className="awayLogo" src={denLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(kan)))
    {
      return(<img className="awayLogo" src={kanLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(rai)))
    {
      return(<img className="awayLogo" src={raiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(sdg)))
    {
      return(<img className="awayLogo" src={sdgLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(dal)))
    {
      return(<img className="awayLogo" src={dalLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(nyg)))
    {
      return(<img className="awayLogo" src={nygLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(phi)))
    {
      return(<img className="awayLogo" src={phiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(was)))
    {
      return(<img className="awayLogo" src={wasLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(chi)))
    {
      return(<img className="awayLogo" src={chiLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(det)))
    {
      return(<img className="awayLogo" src={detLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(gnb)))
    {
      return(<img className="awayLogo" src={gnbLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(min)))
    {
      return(<img className="awayLogo" src={minLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(atl)))
    {
      return(<img className="awayLogo" src={atlLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(car)))
    {
      return(<img className="awayLogo" src={carLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(nor)))
    {
      return(<img className="awayLogo" src={norLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(tam)))
    {
      return(<img className="awayLogo" src={tamLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(crd)))
    {
      return(<img className="awayLogo" src={crdLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(ram)))
    {
      return(<img className="awayLogo" src={ramLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(sea)))
    {
      return(<img className="awayLogo" src={seaLogo} alt="logo" width="47" height="47"/>)
    }
    else if (awayTeam.find(b => b.includes(sfo)))
    {
      return(<img className="awayLogo" src={sfoLogo} alt="logo" width="47" height="47"/>)
    }
  }

  function setWeeklyMatchups()
  {
    return(
            teams.map(team =>
              <tr key={team.toString()}>
                <td>
                  <button className="homeButton" onClick={() => matchup(team)}>
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
