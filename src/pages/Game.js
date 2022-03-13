import React from "react";
import { useLocation } from "react-router";
import { executePlaceBet, executeCheckAndDistributeRewards } from "../helpers/contract.js";
import "./Game.css";

const Game = ({ setGame }) => {
  const { state: gameDetails } = useLocation();

  const [ matches, setMatches ] = React.useState([]);

  React.useEffect(() => {
    fetch(gameDetails.matchesApiUrl).then((response) => response.json()).then((matches) => setMatches(matches))
  }, []);

  return (
    <>
      <div className="gameContent">
        <div className="topBan">
          <img
            src={gameDetails.image}
            alt="gamecover"
            className="gameCover"
          ></img>
          <div className="Deets">
            <div className="title">{gameDetails.title}</div>
            <div>
              {matches && matches.length} Live Matches • {" "}
              {matches && matches.length} Total Bets
            </div>
          </div>
        </div>
        <div className="topBan">
          <div
            className="openButton"
            onClick={() =>
              window.open(
                `${gameDetails.website}`
              )
            }
          >
            Website
          </div>
        </div>
        <div className="tableHeader">
          <div className="numberHeader">Match Id</div>
          <div className="titleHeader">MATCH</div>
          <div className="titleHeader">Team A</div>
          <div className="titleHeader">Team B</div>
        </div>
        {matches.filter((match, i) => match.opponents.length == 2).map((match) => {
            return (
              <>
                <div className="tableContent">
                  <div className="numberHeader">{match.id}</div>
                  <div className="titleHeader" style={{ color: "rgb(205, 203, 203)" }}>
                    {match.name}
                    <div className="distributeButton" onClick = {() => executeCheckAndDistributeRewards(match.id)}>
                      Distribute Rewards
                    </div>
                  </div>
                  <div className="titleHeader">
                    {match.opponents[0].opponent.name}
                    <div className="betButton" onClick = {() => executePlaceBet(match.id, match.opponents[0].opponent.id, match.opponents[1].opponent.id, match.opponents[0].opponent.id)}>
                      Bet
                    </div>
                  </div>
                  <div className="titleHeader">
                    {match.opponents[1].opponent.name}
                    <div className="betButton" onClick={() => executePlaceBet(match.id, match.opponents[0].opponent.id, match.opponents[1].opponent.id, match.opponents[1].opponent.id)}>
                      Bet
                    </div>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  );
};

export default Game;
