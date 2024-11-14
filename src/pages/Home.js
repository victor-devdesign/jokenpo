import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container-home">
            <div className="row">
                <div className="col-12 d-flex justify-content-center m-2">
                    <div className="home-logo">
                        <img src="/img/logo512.png" alt="Logo" />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center m-2">
                    <Link to="/play">
                        <div className="home-btn">
                            <img src="/img/btn_start_game.png" alt="Start Button" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
