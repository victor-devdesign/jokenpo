import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Jokenpo!</h1>
            <Link to="/play">
                <button>Start Game</button>
            </Link>
        </div>
    );
};

export default Home;
