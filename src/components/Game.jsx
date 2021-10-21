import React, {useState} from 'react';
import {calculateWinner} from '../winner';
import Field from './Field';
import "./Game.css"

var count1 = 0
var count2 = 0

const Game = (props) => {

    // стейт для игрового поля
    const [field, setField] = useState(Array(9).fill(null))

    // стейт для определения хода Х ? 0
    const [xIsNext, setXIsNext] = useState(true)

    // определить победителя
    const isWinner = calculateWinner(field)

    // функция, которая отвечает за клик по ячейке
    const handleClick = (index) => {
        const fieldCopy = [...field]

        // определить был ли клик по ячейке, или игра закончена
        if (isWinner || fieldCopy[index]) {
            return
        }
        // определить чей ход X ? 0
        fieldCopy[index] = xIsNext ? "X" : "O"
        // Обновить стейт
        setField(fieldCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className="start__btn"
                onClick={() => setField(Array(9).fill(null))}>
                RESET
            </button>
        )
    }



    return (
        <div className="wrapper">
            <div>
                {startNewGame()}
                <Field cells={field} click={handleClick} />
                {isWinner ? (!xIsNext ? count1 += 0.5 : count2 += 0.5) :
                    "Сейчас ходит : " + (xIsNext ? "Player1" : "Player2")}
            </div>
            <div className="score">
                <div>Score</div>
                <div>Player1 : {count1}</div>
                <div>Player2 : {count2}</div>
            </div>
        </div>
    );
}

export default Game;
