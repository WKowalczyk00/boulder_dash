import { SETTINGS } from "./Settings"
import { Board } from "./Board"
import { Travel } from "./Travel"
import { ValuesBoard } from "./ValuesBoard"
import { StartGame } from "./StartGame"
import { timeout } from "./functions"
import { MovingObjects } from "./MovingObjects"
console.table(SETTINGS.board);

type Position = { i: number, j: number }
let board: Board;
let travel: Travel;
let valuesBoard: ValuesBoard;
let startGame: StartGame;
let movingObjects: MovingObjects;

let keyup: (e: KeyboardEvent) => void;
let keydown: (e: KeyboardEvent) => void;

const gameStart = async () => {
    startGame = new StartGame();
    await timeout(5000)
    valuesBoard = new ValuesBoard();
    board = new Board();
    movingObjects = new MovingObjects();

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


window.onload = async () => {
    const startGameFunction = async (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            const moveLegendDiv = document.getElementById("moveLegend") as HTMLElement
            moveLegendDiv.style.display = "none"
            gameStart()
            window.removeEventListener("keydown", startGameFunction)
        }
    }
    window.addEventListener("keydown", startGameFunction)
}

const changeTravel = (newTravel: Travel) => {
    travel = newTravel
}
const changeMovingObjects = (newMovingObjects: MovingObjects) => {
    movingObjects = newMovingObjects
}
export { board, travel, valuesBoard, movingObjects, Position, changeTravel, keydown, keyup, gameStart,changeMovingObjects }
