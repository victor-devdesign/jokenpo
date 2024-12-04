import { useEffect } from "react";
import { Link } from "react-router-dom";

const Results = () => {
    /**
     * Captura os resultados do localStorage
     */
    let results = JSON.parse(localStorage.getItem('results')) || [];

    let playerTitle = {
        user: 'Usuário',
        enemy: 'Oponente'
    }

    useEffect(() => {
        loadPlayerResult('user');
        loadPlayerResult('enemy');
    });

    /**
     * Carrega o resultado de um dos jogadores.
     */
    const loadPlayerResult = (player) => {
        console.log(player);
    }

    // Placeholder for now, later add logic for calculating winner
    return (
        <div className="container-home">
            <div className="row">
                <div className="container-display text-center">
                    <h1>Resultados</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    </div>
                    <div className="col-12 col-md-6">
                    </div>
                </div>

                <div className="row justify-content-around">
                    {results.map((result, index) => (
                        <div key={index} className="col-12 col-md-3 mb-4">
                            <div className="card card-result">
                                <div className="card-header container-display text-center m-0">
                                    <h3 className="card-title m-0">Rodada {result.turn}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-2">
                                        <h5 className="card-text m-0 me-2">Vencedor:<span className="badge bg-success ms-2">{playerTitle[result.winner]}</span></h5>
                                    </div>
                                    <hr />
                                    <h5 className="card-title">Jogada:</h5>
                                    <div className="d-flex align-items-center mb-2">
                                        <p className="card-text m-0 me-2">Usuário:</p>
                                        <img src={`/img/weapons/${result.userMove}.png`} alt={result.userMove} width="30px" height="auto" />
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <p className="card-text m-0 me-2">Oponente:</p>
                                        <img src={`/img/weapons/${result.enemyMove}_enemy.png`} alt={result.enemyMove} width="30px" height="auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-12 text-center">
                    <Link to="/">
                        <button className="btn btn-secondary btn-large mt-4 mb-4">Play Again</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Results;
