import React, { useState , useCallback} from "react";

const Board = () => {
  const [spaces, setSpaces] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);

  const handleSpaceClick = useCallback((index) => {
    if (spaces[index] === "") {
      const newSpaces = [...spaces];
      newSpaces[index] = isXNext ? "X" : "O";
      setSpaces(newSpaces);
      setIsXNext(!isXNext);
    }
  });

  const checkPlay = () => {
    for (let i = 0; i < spaces.length - 2; i++) {
        if (spaces[i] === "X" && spaces[i + 1] === "X" && spaces[i + 2] === "X") {
            alert("Winner is X");
        } else if (spaces[i] === "O" && spaces[i + 1] === "O" && spaces[i + 2] === "O") {
            alert("Winner is O");
        }
    }

    for (let a = 0; a < spaces.length - 2; a++) {
        if (spaces[a] === "X" && spaces[a + 1] === "X" && spaces[a + 2] === "X") {
            alert("Winner is X");
        } else if (spaces[a] === "O" && spaces[a + 1] === "O" && spaces[a + 2] === "O") {
            alert("Winner is O");
        }
    }

  
    if (spaces[0] === "X" && spaces[4] === "X" && spaces[8] === "X") {
        alert("Winner is X");
    } else if (spaces[0] === "O" && spaces[4] === "O" && spaces[8] === "O") {
        alert("Winner is O");
    }


    if (spaces[2] === "X" && spaces[4] === "X" && spaces[6] === "X") {
        alert("Winner is X");
    } else if (spaces[2] === "O" && spaces[4] === "O" && spaces[6] === "O") {
        alert("Winner is O");
    }
};

  return (
    <div className="Board">
      {spaces.map((space, index) => (
        <button
          key={index}
          className="boardPart"
          onClick={() => handleSpaceClick(index)}>
          {space}
        </button>
      ))}
      <div>
      <button onClick={checkPlay}>Check</button>
      </div>
    </div>
  );
};

export default Board;