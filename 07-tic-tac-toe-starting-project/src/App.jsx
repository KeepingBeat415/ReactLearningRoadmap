import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function deriveActivePlayer(gameTurns) {
  const activePlayer = deriveActivePlayer(gameTurns);

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  //const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns];
    });

    return updatedTurns;
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="hightlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
