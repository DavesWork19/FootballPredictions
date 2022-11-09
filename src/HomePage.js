import React, { useEffect } from 'react';
import './HomePage.css';
import Matchups from "./MatchupsPage"
import percentages from './percentages.json';


function NewHome()
{

  useEffect(() => {
    document.body.style.backgroundColor = "Gray";

  }, []);


  function weekHead()
  {
    const weekArray = [];

    for (const line in percentages)
    {
      if (line.includes("Week"))
      {
        weekArray.push(line);
      }
    }

    return (
      weekArray.map((week) =>
      <th className="WeekRow" key={week.toString()}>
        {week}
      </th>
      )
    )
  }

  function weekBody()
  {
    const weekArray = [];

    for (const line in percentages)
    {
      if (line.includes("Week"))
      {
        weekArray.push(line);
      }
    }

    return (
      weekArray.map((week) =>
      <td className="WeekRow" key={week.toString()}>
        {percentages[week]}%
      </td>
      )
    )
  }



  return (
    <div id="Body">

      <h1 id="header">
        Select a matchup to be predicted
      </h1>


      <div className="grid-container">

        <table className="AFCTable">
          <tbody>

            <tr>
              <th className="Conferences"> AFC: {percentages['AFC']}%</th>
            </tr>

            <tr>
              <td>
                <table className="DivisionTop3">
                  <tbody>
                    <tr>
                      <th className="Division"> North: {percentages['AFCNorth']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> Ravens: {percentages['Ravens']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Bengals: {percentages['Bengals']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Browns: {percentages['Browns']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Steelers: {percentages['Steelers']}%</td>
                    </tr>
                  </tbody>
                </table>

                <table className="DivisionTop3">
                  <tbody>
                    <tr>
                      <th className="Division"> South: {percentages['AFCSouth']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> Titans: {percentages['Titans']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Colts: {percentages['Colts']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Jaguars: {percentages['Jaguars']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Texans: {percentages['Texans']}%</td>
                    </tr>
                  </tbody>
                </table>

                <table className="DivisionTop3">
                  <tbody>
                    <tr>
                      <th className="Division"> East: {percentages['AFCEast']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> Bills: {percentages['Bills']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Jets: {percentages['Jets']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Dolphins: {percentages['Dolphins']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Patriots: {percentages['Patriots']}%</td>
                    </tr>
                  </tbody>
                </table>

                <table className="DivisionBottom">
                  <tbody>
                    <tr>
                      <th className="Division"> West: {percentages['AFCWest']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> Cheifs: {percentages['Chiefs']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Chargers: {percentages['Chargers']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Broncos: {percentages['Broncos']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Raiders: {percentages['Raiders']}%</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

          </tbody>
        </table>

        <table id="matchupTable">
          <tbody>

            <tr>
              <th >Week 10 Matchups</th>
            </tr>

            < Matchups />

          </tbody>
        </table>

        <table className="NFCTable">
          <tbody>

            <tr>
              <th className="Conferences"> NFC: {percentages['NFC']}%</th>
            </tr>

            <tr>
              <td>
                <table className="DivisionTop3">
                  <tbody>
                    <tr>
                      <th className="Division"> North: {percentages['NFCNorth']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> Vikings: {percentages['Vikings']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Packers: {percentages['Packers']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Bears: {percentages['Bears']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Lions: {percentages['Lions']}%</td>
                    </tr>

                  </tbody>
                </table>

                <table className="DivisionTop3">
                  <tbody>
                    <tr>
                      <th className="Division"> South: {percentages['NFCSouth']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> Buccaneers: {percentages['Buccaneers']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Falcons: {percentages['Falcons']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Saints: {percentages['Saints']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Panthers: {percentages['Panthers']}%</td>
                    </tr>

                  </tbody>
                </table>

                <table className="DivisionTop3">
                  <tbody>
                    <tr>
                      <th className="Division"> East: {percentages['NFCEast']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> Cowboys: {percentages['Cowboys']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Giants: {percentages['Giants']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Eagles: {percentages['Eagles']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Commanders: {percentages['Commanders']}%</td>
                    </tr>

                  </tbody>
                </table>

                <table className="DivisionBottom">
                  <tbody>
                    <tr>
                      <th className="Division"> West: {percentages['NFCWest']}%</th>
                    </tr>

                    <tr>
                      <td className="DivisionData"> 49ers: {percentages['49ers']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Rams: {percentages['Rams']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Seahawks: {percentages['Seahawks']}%</td>
                    </tr>
                    <tr>
                      <td className="DivisionData"> Cardinals: {percentages['Cardinals']}%</td>
                    </tr>

                  </tbody>
                </table>
              </td>
            </tr>

          </tbody>
        </table>

      </div>

      <table className="weekHeaders">
        <thead>
          <tr>
            {weekHead()}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weekBody()}
          </tr>
        </tbody>
      </table>


      <div id="footer">
      *Percentages represent the accuracy of the model for the 2022 season.
      </div>

    </div>
  );
}

export default NewHome;
