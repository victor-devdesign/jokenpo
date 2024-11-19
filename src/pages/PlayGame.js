import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PlayGame = () => {
    const location = useLocation();
    const { level } = location.state;
    const [userChoice, setUserChoice] = useState(null);

    const choices = ["rock", "paper", "scissors"];

    const handleChoice = (choice) => {
        setUserChoice(choice);
        // Save user choice to context/state for results page (implement later)
    };
    console.log(level);

    return (
        <div className="container-home">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center m-5">
                            <div className="container-default">
                                <h2>00:00</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8 mb-5 mt-5 d-flex justify-content-center">
                            <div className="container-display">
                                <h1>Escolha sua jogada!</h1>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-5 mt-5">
                            <div className="container-default w-100">
                                <img src="/img/enemy.png" alt="Enemy" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-start">
                            {choices.map((choice) => (
                                <button key={choice} onClick={() => handleChoice(choice)} className="btn btn-weapon m-4">
                                    <img src={`/img/weapons/${choice}.png`} alt={choice} />
                                </button>
                            ))}
                        </div>
                        <Link to="/results">
                            <button>See Results</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayGame;