import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function editHandler() {
    //update state base on the previous state value
    setIsEditing((editing) => !isEditing);

    //setIsEditing(!isEditing);
    //it's using scheduler to update, not immediately
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li>
        <span className="player">
          {!isEditing ? (
            <span className="player-name">{playerName}</span>
          ) : (
            <input type="text" required value={playerName} onChange={handleChange} />
          )}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editHandler}>{!isEditing ? 'Edit' : 'Save'}</button>
      </li>
    </>
  );
}
