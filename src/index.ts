import { SETTINGS } from "./Settings"
import { Board } from "./Board"
import { Travel } from "./Travel"
import { ValuesBoard } from "./ValuesBoard"
import { StartGame } from "./StartGame"
import { timeout } from "./functions"
console.table(SETTINGS.board);

type Position = { i: number, j: number }
let board: Board;
let travel: Travel;
let valuesBoard: ValuesBoard;
let startGame: StartGame;

let keyup: (e: KeyboardEvent) => void;
let keydown: (e: KeyboardEvent) => void;
window.onload = async () => {

    startGame = new StartGame();
    await timeout(5000)
    valuesBoard = new ValuesBoard();
    board = new Board();

    keydown = (e: KeyboardEvent) => {
        //is being held
        document.removeEventListener("keydown", keydown)
        travel = new Travel(e);
        document.addEventListener("keyup", keyup)
    }
    keyup = (e: KeyboardEvent) => {
        document.removeEventListener("keyup", keyup)
        travel.isBeingHeld = false
        // console.log(travel.checkTime());
        document.addEventListener("keydown", keydown)
    }
    document.addEventListener("keydown", keydown)
}

const changeTravel = (newTravel: Travel) => {
    travel = newTravel
}
export { board, travel, valuesBoard, Position, changeTravel, keydown, keyup }
