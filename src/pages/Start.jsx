import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div className="container-Start">
            <div className="row">
                <div className="col-12 d-flex justify-content-center m-4">
                    <div className="Start-logo">
                        <h1>Escolha a dificuldade</h1>
                    </div>
                </div>
                <div className="col-12 m-2">
                    <Link to="/play" state={{ level: "easy" }}>
                        <button className="btn btn-secondary btn-lg w-100">
                            Fácil
                        </button>
                    </Link>
                </div>
                <div className="col-12 m-2">
                    <Link to="/play" state={{ level: "normal" }}>
                        <button className="btn btn-secondary btn-lg w-100">
                            Normal
                        </button>
                    </Link>
                </div>
                <div className="col-12 m-2">
                    <Link to="/play" state={{ level: "hard" }}>
                        <button className="btn btn-secondary btn-lg w-100">
                            Difícil
                        </button>
                    </Link>
                </div >
            </div >
        </div >
    );
};

export default Start;
