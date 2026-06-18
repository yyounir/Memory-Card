import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";

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
  const [cards, setCards] = useState([])

  const initializeGame = () => {
    // SHUFFLE THE CARDS
    
    // Loops the card values and sets the values
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }
    ))

    

    // setCards state set to finalCards value which has the information given
    setCards(finalCards)
  };

  

  // Hooks / Callback Function
  useEffect(() => {
    initializeGame();
  },[])

  const handleCardClick = (card) => {
    // Dont allow click, if the card is already clicked
    if(card.isFlipped || card.isMatched) {
      return;
    }

    // Update card-flipped state
    const newCards = cards.map((c) => {
      if(c.id === card.id) {
        return {...c, isFlipped: true};
      }
      else{
        return c;
      }
    });

    setCards(newCards);

  };
  
  return (
    <div className="app">
      {/* <p>Hello React</p> */}
      <GameHeader score={3} moves={10} /> {/* add props here */}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick}/>
        ))}
      </div>
      {/* <p>Hello React</p> */}
    </div>

  );
}

export default App

