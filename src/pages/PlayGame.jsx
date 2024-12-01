import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Componente principal para o jogo "Pedra, Papel e Tesoura".
 */
const PlayGame = () => {
    // Obtém o nível de dificuldade
    const location = useLocation();
    const { level } = location.state;

    // Estados do jogo
    const [turn, setTurn] = useState(0); // Contador de rodadas
    const [timer, setTimer] = useState('00:00'); // Temporizador
    const [title, setTitle] = useState(null); // Título do estado atual do jogo
    const [enemyChoice, setEnemyChoice] = useState(null); // Escolha do oponente

    // Referência para o intervalo do temporizador
    const timerInterval = useRef(null);

    // Opções de jogada
    const choices = ["rock", "paper", "scissors"];

    /**
     * Inicia a configuração inicial do jogo ao montar o componente.
     */
    useEffect(() => {
        initTurn();
        return () => clearInterval(timerInterval.current); // Limpeza do intervalo ao desmontar o componente
    }, []);

    /**
     * Inicia uma nova rodada.
     */
    const initTurn = () => {
        setTurn(turn + 1); // Incrementa o número da rodada
        setTitle("Escolha sua jogada!"); // Define o título para a jogada do usuário
        resetTimer(); // Reinicia o temporizador
        setEnemyChoice(null); // Reseta a escolha do oponente
    };

    /**
     * Reinicia o temporizador para 00:00 e inicia a contagem regressiva.
     */
    const resetTimer = () => {
        setTimer('00:00');
        clearInterval(timerInterval.current);

        timerInterval.current = setInterval(() => {
            setTimer((prev) => {
                const [min, sec] = prev.split(':').map(Number);
                const newSec = sec + 1;
                const newMin = newSec >= 60 ? min + 1 : min;
                return `${newMin.toString().padStart(2, '0')}:${(newSec % 60).toString().padStart(2, '0')}`;
            });
        }, 1000);
    };

    /**
     * Lida com a escolha do usuário e inicia a jogada do oponente.
     * @param {string} choice - A escolha do usuário ("rock", "paper" ou "scissors").
     */
    const handleChoice = (choice) => {
        setTitle("Vez do oponente!");

        resetTimer();
        setTimeout(() => {
            handleEnemyChoice(choice);
        }, Math.random() * 1000 + 2000); // Simula um atraso na jogada do oponente
    };

    /**
     * Retorna o índice da jogada do oponente com base no nível de dificuldade.
     * @param {string} move - A jogada do usuário.
     * @returns {number} - Índice da jogada do oponente.
     */
    const getMoveIndex = (move) => {
        const userIndex = choices.indexOf(move);

        // Lógica para o nível "fácil"
        if (level === 'easy') {
            const random = Math.random();
            return random < 0.7 ? (userIndex + 1) % choices.length : (userIndex + 2) % choices.length;
        }

        // Lógica para o nível "normal" (escolha aleatória)
        if (level === 'normal') {
            return Math.floor(Math.random() * choices.length);
        }

        // Lógica para o nível "difícil"
        if (level === 'hard') {
            const random = Math.random();
            return random < 0.7 ? userIndex : (userIndex + 1) % choices.length;
        }
    };

    /**
     * Define a jogada do oponente e calcula o vencedor da rodada.
     * @param {string} userMove - A jogada do usuário.
     */
    const handleEnemyChoice = (userMove) => {
        const enemyMove = choices[getMoveIndex(userMove)];
        setEnemyChoice(enemyMove);

        // Determina o vencedor da rodada
        const winner = getWinner(userMove, enemyMove);
        if (winner === 'user') {
            setTitle("Você venceu!");
        } else if (winner === 'enemy') {
            setTitle("Você perdeu!");
        } else {
            setTitle("Empate!");
        }

        // Inicia uma nova rodada após um intervalo
        setTimeout(() => {
            initTurn();
        }, 3000);
    };

    /**
     * Determina o vencedor com base nas regras do jogo.
     * @param {string} userChoice - A jogada do usuário.
     * @param {string} enemyChoice - A jogada do oponente.
     * @returns {string} - "user" se o usuário vencer, "enemy" se o oponente vencer, ou "draw" se empatar.
     */
    const getWinner = (userChoice, enemyChoice) => {
        if (userChoice === enemyChoice) {
            return 'draw';
        }

        if (
            (userChoice === 'rock' && enemyChoice === 'scissors') ||
            (userChoice === 'paper' && enemyChoice === 'rock') ||
            (userChoice === 'scissors' && enemyChoice === 'paper')
        ) {
            return 'user';
        }

        return 'enemy';
    };

    // Renderização do componente
    return (
        <div className="container-home">
            <div className="row">
                <div className="col-12 d-flex justify-content-center m-5">
                    <div className="container-default">
                        <h2>{timer}</h2>
                    </div>
                </div>
                <div className="col-12">
                    <div className="container-display text-center">
                        <h1>Rodada <b>{turn}</b>:</h1>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="col-12 text-center">
                    {enemyChoice && (
                        <img src={`/img/weapons/${enemyChoice}.png`} alt={enemyChoice} />
                    )}
                </div>
                <div className="col-12 d-flex justify-content-center">
                    {choices.map((choice) => (
                        <button
                            key={choice}
                            onClick={() => handleChoice(choice)}
                            className="btn btn-weapon m-4"
                        >
                            <img src={`/img/weapons/${choice}.png`} alt={choice} />
                        </button>
                    ))}
                </div>
                <div className="col-12 text-center">
                    <Link to="/results">
                        <button className="btn btn-primary btn-large">Ver Resultados</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlayGame;
