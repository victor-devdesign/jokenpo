import React from "react";
import { Link } from "react-router-dom";

const Results = () => {
    // Placeholder for now, later add logic for calculating winner
    return (
        <div>
            <h1>Results</h1>
            <p>Display game results here.</p>
            <Link to="/">
                <button>Play Again</button>
            </Link>
        </div>
    );
};

export default Results;
