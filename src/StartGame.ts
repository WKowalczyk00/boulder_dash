import { SETTINGS } from "./Settings"
import { Position } from "./index";
import { timeout } from "./functions";

export class StartGame {
    gameLostDiv: HTMLElement = document.getElementById("gameLost") as HTMLElement;
    boardDiv: HTMLElement = document.getElementById("board") as HTMLElement;

    constructor() {
        this.pickRandom()
    }
    createBoard = async (array: Position[]) => {
        const BOARD = SETTINGS.board
        const boardDiv = document.getElementById("board")
        boardDiv ? boardDiv.innerHTML = "" : false
        let counter = 0
        for (let i = 0; i < BOARD.length; i++) {
            const tr = document.createElement("div")
            tr.classList.add("row")
            boardDiv?.appendChild(tr)

            for (let j = 0; j < BOARD[i].length; j++) {
                const td = document.createElement("div")
                td.id = i + "_" + j
                td.classList.add("square")
                tr.appendChild(td)

                counter++;
            }
        }

        let x: Position;
        let xDiv!: HTMLElement;
        for (let i = 0; i < SETTINGS.board.length; i++) {
            for (let j = 0; j < SETTINGS.board[i].length; j++) {
                if (SETTINGS.board[i][j] == "X") {
                    x = { i: i, j: j }
                    SETTINGS.board[i][j] = ""
                    xDiv = document.getElementById(i + "_" + j) as HTMLElement
                }

            }
        }

        this.startAnimation()
        array.forEach(async (e, i) => {
            (function (index) {
                setTimeout(function () {
                    const td = document.getElementById(e.i + "_" + e.j) as HTMLElement
                    td.className += " " + SETTINGS.board[e.i][e.j];
                }, i * 3);
            })(i);
        });
        await this.walkingGuy(xDiv);


    }
    startAnimation = async () => {
        this.gameLostDiv.style.display = "block"
        this.gameLostDiv.style.color = "white"
        this.gameLostDiv.innerHTML = "Player1, 3 men ,cave A/1"
        this.boardDiv.style.animationName = "startGame"

    }
    pickRandom = async () => {
        let arr = []
        for (let i = 0; i < SETTINGS.board.length; i++) {
            for (let j = 0; j < SETTINGS.board[i].length; j++) {
                arr.push({ i: i, j: j })
            }
        }
        this.shuffle(arr)
        await this.createBoard(arr)

    }
    walkingGuy = async (xDiv: HTMLElement) => {
        for (let i = 0; i < 8; i++) {
            (function (index) {
                setTimeout(function () {
                    if (i % 2 == 0)
                        xDiv.className = "square w";
                    else
                        xDiv.className = "square";
                }, i * 500);
            })(i);
        }
        await timeout(4000)

        xDiv.className = "square boom1"
        console.log("boom1");

        await timeout(300)
        xDiv.className = "square boom2"
        console.log("boom2");
        await timeout(300)
        // xDiv.className = "square X";
        SETTINGS.board = SETTINGS.boardBackup
        
    }
    shuffle = (array: Position[]) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

}