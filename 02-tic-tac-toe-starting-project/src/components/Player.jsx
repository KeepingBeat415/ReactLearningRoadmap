import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function editHandler() {
    //update state base on the previous state value
    setIsEditing((editing) => !isEditing);

    if(isEditing){
      onChangeName(symbol, playerName);
    }
    //setIsEditing(!isEditing);
    //it's using scheduler to update, not immediately
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {!isEditing ? (
            <span className="player-name">{playerName}</span>
          ) : (
            <input type="text" required value={ } onChange={handleChange} />
          )}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editHandler}>{!isEditing ? 'Edit' : 'Save'}</button>
      </li>
    </>
  );
}
