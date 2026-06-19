# 🧠 Memory Card Game

A clean, interactive, and responsive Memory Card Game built with React and Vite. Test your memory by finding and matching all pairs of cards in the fewest moves possible!

## ✨ Features
- **Classic Gameplay:** Match 8 pairs of food-themed emoji cards.
- **Real-time Stats:** Tracks your current score and total moves.
- **Smooth Animations:** CSS 3D transforms for satisfying card flip effects and win states.
- **Responsive Design:** Fully playable on desktop, tablet, and mobile devices.
- **Modular Architecture:** Built with reusable React components and custom hooks for clean logic separation.

## 🚀 Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Pure CSS (CSS3 Transitions, Grid, Flexbox)

## 📂 Project Structure
- `src/components/`
  - `Card.jsx` - Individual card component with 3D flip mechanics.
  - `GameHeader.jsx` - Top bar containing the title, real-time stats, and new game button.
  - `WinMessage.jsx` - Congratulatory message displayed upon game completion.
- `src/hooks/`
  - `useGameLagic.js` - Custom React hook managing the core game state, Fisher-Yates shuffling algorithm, and match validation.

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd memory-card
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎮 How to Play

1. Click on any card to reveal its hidden emoji.
2. Click on a second card to try and find its match.
3. If the cards match, they will light up green and stay face-up. Your score will increase!
4. If they don't match, they will flip back over after a short half-second delay.
5. The game is won when all pairs are successfully matched. Try to beat it in the fewest moves possible!

## 🔀 How the Shuffle Works: Fisher-Yates Algorithm

Every time the game starts (or you click "New Game"), the 16 cards (8 emoji pairs) need to be randomized into a fresh layout. This project uses the **Fisher-Yates shuffle**, implemented inside `useGameLagic.js`, to do this fairly and efficiently.

### Why Fisher-Yates?
A naive approach — like sorting the array with a random comparator (`array.sort(() => Math.random() - 0.5)`) — seems easy but produces a **biased** shuffle, where some card orders are more likely than others. Fisher-Yates avoids this problem and guarantees that every possible arrangement of the cards is equally likely, all in a single efficient pass through the array (O(n) time complexity).

### How it works
The algorithm walks the array backwards, repeatedly swapping the current card with a randomly chosen one from the remaining unshuffled portion:

1. Start at the **last** card in the array.
2. Pick a **random index** between the start of the array and the current position (inclusive).
3. **Swap** the current card with the card at that random index.
4. Move one position to the **left** and repeat, until you reach the first card.

```js
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
```

### In the game
- The 8 emoji values are duplicated to form 16 cards, then passed through the shuffle function before the board is rendered.
- Because each card is swapped exactly once with a uniformly random earlier (or equal) position, the resulting layout has no predictable pattern — pairs are never clustered or placed in a recognizable order.
- The shuffle re-runs every time a new game is triggered, so no two playthroughs look the same.

## 📜 License
This project is open-source and available under the MIT License.