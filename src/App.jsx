import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";
import { useState } from "react";

import runGame from "./game/main";

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameBoard = styled.div`
  background-color: #3b4141;
  width: 102.4rem;
  height: 48rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  justify-self: center;
`;

const OptionCard = styled.div`
  background-color: #def;
  color: #3b4141;
  width: 30rem;
  height: 30rem;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24rem;
`;

const icons = {
  rock: <FaRegHandRock />,
  paper: <FaRegHandPaper />,
  scissors: <FaRegHandScissors />,
};

export default function App() {
  const [flavorText, setFlavorText] = useState("Hurry up and play already");
  const [playerMove, setPlayerMove] = useState(null);
  const [botMove, setBotMove] = useState(null);
  const [botThinking, setBotThinking] = useState(false);

  function handleGame(choice) {
    setPlayerMove(choice);
    setBotMove(null);

    new Audio('assets/drum-roll.mp3').play();
    setFlavorText("The bot's cooking rn hold on");
    setBotThinking(true);

    setTimeout(() => {
      const { winner, botMove: computedBotMove } = runGame(choice);
      setBotMove(computedBotMove);

      console.log(winner);
      switch (winner) {
        case "player":
          setFlavorText("You won. Good job");
          break;
        case "bot":
          setFlavorText("You lost big l");
          break;
        default:
          setFlavorText("Uh, have another go");
      }

      new Audio("assets/boom.mp3").play();
      
      setBotThinking(false);
    }, 2000);
  }

  return (
    <>
      <GlobalStyles />
      <Main>
        <GameBoard>
          <OptionCard>{icons[playerMove]}</OptionCard>

          <OptionCard>{icons[botMove]}</OptionCard>
        </GameBoard>

        <p>{flavorText}</p>
        <div>
          <button onClick={() => handleGame("rock")} disabled={botThinking}>
            <FaRegHandRock />
          </button>
          <button onClick={() => handleGame("paper")} disabled={botThinking}>
            <FaRegHandPaper />
          </button>
          <button onClick={() => handleGame("scissors")} disabled={botThinking}>
            <FaRegHandScissors />
          </button>
        </div>

        {/* <FaRegHandScissors /> */}
      </Main>
    </>
  );
}
