import { SETTINGS } from "./Settings"
import { Board } from "./Board"
import { Travel } from "./Travel"
import { ValuesBoard } from "./ValuesBoard"
console.table(SETTINGS.board);

type Position = { i: number, j: number }
let board: Board;
let travel: Travel;
let valuesBoard: ValuesBoard;

let keyup: (e: KeyboardEvent) => void;
let keydown: (e: KeyboardEvent) => void;
window.onload = async () => {
    //stworzanie obiektu dla klasy board do ktorego mozna sie odwolac w innych plikach 

    valuesBoard = new ValuesBoard();
    board = new Board();
    //tworzenie 

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
