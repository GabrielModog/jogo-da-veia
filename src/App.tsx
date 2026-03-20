
import './App.css'

import { gameObjectSymbol } from './game-rules'
import useGame from './use-game'
import { Checker } from './checker'

function App() {
  const { grid, winner, handleMarkChecker } = useGame()

  return (
  <>
    <h3 data-testid="winner-label">Winner: {winner}</h3>
    <div id="board" data-testid="board" className="grid-container">
      {grid.map((x, idx) => <Checker
        id={idx}
        key={`checker-${idx}`} 
        value={x} 
        objectSymbols={gameObjectSymbol}
        onClick={handleMarkChecker}
      />)}
    </div>
  </>
  )
}

export default App
