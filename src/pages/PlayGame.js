import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlayGame = () => {
    const [userChoice, setUserChoice] = useState(null);

    const choices = ["Rock", "Paper", "Scissors"];

    const handleChoice = (choice) => {
        setUserChoice(choice);
        // Save user choice to context/state for results page (implement later)
    };

    return (
        <div>
            <h1>Choose your weapon!</h1>
            {choices.map((choice) => (
                <button key={choice} onClick={() => handleChoice(choice)}>
                    {choice}
                </button>
            ))}
            <Link to="/results">
                <button>See Results</button>
            </Link>
        </div>
    );
};

export default PlayGame;
