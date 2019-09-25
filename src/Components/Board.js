import React, { Component } from 'react';
import Square from './Square';
import AI from './AI';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Squares: [null, null, null, null, null, null, null, null, null],
            winner: false,
            step: 0,
            sure: false
        }
    }

    updateSquare(i) {
        var Click = this.state.Squares;
        Click[i] = 'X'
        this.setState({ Squares: Click })

        this.setState({ step: this.state.step + 1 })
        this.AItrigger(i)
    }

    AItrigger() {
        setTimeout(() => {
            if (this.state.winner === false) {
                this.AI()
            }
        }, 10);
    }

    AI(i) {
        const key = AI(this.state.Squares, this.state.step)
        var Board = this.state.Squares
        Board[key] = 'O'
        this.setState({ Squares: Board })
        this.calculateWinner()
    }

    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        var squares = this.state.Squares;

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                this.setState({ winner: squares[a] })
            }
        }
    }

    renderSquare(i) {
        var Board = this.state.Squares;
        return <Square win={this.state.winner} Value={Board[i]} onClickTrigger={() => this.updateSquare(i)} />
    }

    reset() {
        this.setState({
            Squares: [null, null, null, null, null, null, null, null, null],
            winner: false,
            step: 0,
            name: null
        })
    }

    storeName() {
        var name = prompt("Enter Your Name")
        this.setState({ name: name })
    }

    areYouSure() {
        var ans = false
        var ans = window.confirm("Are you sure? It's impossible to win")
        if (ans) {
            this.reset()
        }
    }

    render() {

        return (
            <div className={'table'}>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>


                {(this.state.winner === 'X' || this.state.winner === 'O') ? <div className={'winner'}> Winner is: {this.state.winner}

                    <button className={'reset'} onClick={() => this.areYouSure()}>
                        Try Again
                </button>

                </div> : null}

                {this.state.step < 5 && this.state.winner === false ? <div className={'winner'}> Next Player is: X </div> : null}

                {(this.state.step === 5 && this.state.winner === false) ? <div className={'winner2'}> No one Wins!

                <button className={'reset'} onClick={() => this.areYouSure()}>
                        Try Again
                </button>


                </div> : null}




            </div>

        )
    }
}
