import { travel } from "./index";
import { SETTINGS } from "./Settings";

export class Board {
    inWhichPart: number;
    constructor() {
        this.inWhichPart = 0;
        this.create();
    }
    create = async () => {
        const BOARD = SETTINGS.board
        const boardDiv = document.getElementById("board")
        boardDiv ? boardDiv.innerHTML = "" : false
        // boardDiv?.innerHTML = ""
        for (let i = 0; i < BOARD.length; i++) {
            const tr = document.createElement("tr")
            boardDiv?.appendChild(tr)

            // tr.innerHTML = "x"
            for (let j = 0; j < BOARD[i].length; j++) {
                const td = document.createElement("td")
                tr.appendChild(td)
                td.innerHTML = i + "_" + j

                td.className = BOARD[i][j]
            }
        }
    }
    getBoardPart = () => {
        const PLAYER_POSITION = travel.getPosition()
        // if
    }
}