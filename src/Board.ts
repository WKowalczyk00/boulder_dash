import { travel, Position } from "./index";
import { SETTINGS } from "./Settings";

export class Board {
    inWhichPart: Position;
    constructor() {
        this.inWhichPart = { i: 0, j: 0 };
        this.create();
    }
    create = async () => {
        if (await this.getPosition() != false)
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
                td.className += " "+BOARD[i][j];
                // td.classList.add(BOARD[i][j])
            }
        }
    }

    getBoardPart = async () => {
        const playerPositon = await this.getPosition() as Position
        console.log(playerPositon.i);
        // if (playerPositon.i == SETTINGS.changeBoardPart[this.inWhichPart.i][this.inWhichPart.j].i || playerPositon.j == SETTINGS.changeBoardPart[this.inWhichPart.i][this.inWhichPart.j].j) {

        // }


    }

    getPosition = async () => {
        for (let i = 0; i < SETTINGS.board.length; i++) {
            for (let j = 0; j < SETTINGS.board[i].length; j++) {
                if (SETTINGS.board[i][j] == "X") {
                    return { i: i, j: j }
                }

            }
        }
        return false
    }
}