import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLagic";

const cardValues = [
  "🍕",
  "🍟",
  "🍛",
  "🍜",
  "🍔",
  "🍿",
  "🍲",
  "🌮",
  "🍕",
  "🍟",
  "🍛",
  "🍜",
  "🍔",
  "🍿",
  "🍲",
  "🌮",
]

function App() { 
  const {cards, score, moves, handleCardClick, initializeGame, isGameComplete} = useGameLogic(cardValues);
  
  return (
    <div className="app">
      {/* <p>Hello React</p> */}
      <GameHeader score={score} moves={moves} onReset={initializeGame} /> {/* add props here */}

      {isGameComplete && <WinMessage moves={moves} />}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
      {/* <p>Hello React</p> */}
    </div>

  );
}

export default App

