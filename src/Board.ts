import { travel, Position } from "./index";
import { SETTINGS } from "./Settings";

export class Board {
    inWhichPart: number;
    position: Position;
    constructor() {
        this.inWhichPart = 0;
        this.position = { i: 0, j: 0 }
        this.create();
    }
    create = async () => {
        this.position = await this.getPosition() as Position
        if (this.position.i!=-1)
            this.getBoardPart();
        const BOARD = SETTINGS.board
        const boardDiv = document.getElementById("board")
        boardDiv ? boardDiv.innerHTML = "" : false
        // boardDiv?.innerHTML = ""
        for (let i = 0; i < BOARD.length; i++) {
            const tr = document.createElement("div")
            tr.classList.add("row")
            boardDiv?.appendChild(tr)

            // tr.innerHTML = "x"
            for (let j = 0; j < BOARD[i].length; j++) {
                const td = document.createElement("div")
                td.classList.add("square")
                tr.appendChild(td)
                td.innerHTML = i + "_" + j
                td.className += " " + BOARD[i][j];
                // td.classList.add(BOARD[i][j])
            }
        }
    }

    getBoardPart = async () => {
        const playerPositon = await this.getPosition() as Position
        console.log(playerPositon.i);
        // zmiana e - w
        if (playerPositon.j == SETTINGS.boardPart[this.inWhichPart].j) {
            console.log("zmiana e - w");

            if (this.inWhichPart % 2 == 0) {
                console.log("na granicy zmiany pozycji w strone prawa");
                const boardDiv = document.getElementById("board") as HTMLElement
                boardDiv.style.animationName = "moveSideRight"
                if (this.inWhichPart == 0)
                    this.inWhichPart = 1
                else if (this.inWhichPart == 2)
                    this.inWhichPart = 3
            }
            else {
                console.log("na granicy zmiany pozycji w strone lewa");
                const boardDiv = document.getElementById("board") as HTMLElement
                boardDiv.style.animationName = "moveSideLeft"
                if (this.inWhichPart == 1)
                    this.inWhichPart = 0
                else if (this.inWhichPart == 3)
                    this.inWhichPart = 2
            }

        }
        // zmiana n - s
        else if (playerPositon.i == SETTINGS.boardPart[this.inWhichPart].i) {
            console.log("zmiana n - s");
            if (this.inWhichPart < 2) {
                console.log("na granicy zmiany pozycji w strone dol");
                const boardDiv = document.getElementById("board") as HTMLElement
                boardDiv.style.animationName = "moveSideBottom"
                if (this.inWhichPart == 0)
                    this.inWhichPart = 2
                else if (this.inWhichPart == 1)
                    this.inWhichPart = 3
            }
            else {
                console.log("na granicy zmiany pozycji w strone gora");
                const boardDiv = document.getElementById("board") as HTMLElement
                boardDiv.style.animationName = "moveSideTop"
                if (this.inWhichPart == 2)
                    this.inWhichPart = 0
                else if (this.inWhichPart == 3)
                    this.inWhichPart = 1
            }
        }


    }

    getPosition = async () => {
        for (let i = 0; i < SETTINGS.board.length; i++) {
            for (let j = 0; j < SETTINGS.board[i].length; j++) {
                if (SETTINGS.board[i][j] == "X") {
                    return { i: i, j: j }
                }

            }
        }
        return { i: -1, j: -1 }
    }
}