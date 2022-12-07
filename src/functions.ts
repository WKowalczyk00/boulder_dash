import { keydown, keyup, valuesBoard, gameStart, travel, movingObjects, board } from "./index"
import { SETTINGS } from "./Settings"

const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
const gameEnd = () => {
    if (travel)
        travel.isBeingHeld = false;
    // movingObjects.entity.lost = true;
    movingObjects.entity.forEach(e => {
        console.log("delete entity");

        e.lost = true
    })
    movingObjects.entity = []
    document.removeEventListener("keydown", keydown)
    document.removeEventListener("keyup", keyup)
    clearInterval(valuesBoard.interval)
}
const gameLost = () => {
    console.log("game lost");
    
    SETTINGS.lives--;
    SETTINGS.board = Array(SETTINGS.boardBackup.length).fill(null).map((_, i) => [...SETTINGS.boardBackup[i]])
}
const checkGameStart = async () => {
    if (SETTINGS.lives > 0) {
        await gameStart();
    }
    else {
        const gameLostDiv = document.getElementById("gameLost") as HTMLElement

        gameLostDiv.style.display = "block"
        gameLostDiv.innerHTML = "NO MORE LIVES"
    }
}
const destroyAround = (i: number, j: number, type: string) => {
    var audio = new Audio('sounds/stone-fall.mp3');
    audio.play();
    if (SETTINGS.board[i][j] != "w" && SETTINGS.board[i][j] != "b" && SETTINGS.board[i][j] != "X")
        SETTINGS.board[i][j] = type
    if (SETTINGS.board[i + 1][j + 1] != "w" && SETTINGS.board[i + 1][j + 1] != "b" && SETTINGS.board[i + 1][j + 1] != "X")
        SETTINGS.board[i + 1][j + 1] = type
    if (SETTINGS.board[i + 1][j - 1] != "w" && SETTINGS.board[i + 1][j - 1] != "b" && SETTINGS.board[i + 1][j - 1] != "X")
        SETTINGS.board[i + 1][j - 1] = type
    if (SETTINGS.board[i + 1][j] != "w" && SETTINGS.board[i + 1][j] != "b" && SETTINGS.board[i + 1][j] != "X")
        SETTINGS.board[i + 1][j] = type
    if (SETTINGS.board[i][j + 1] != "w" && SETTINGS.board[i][j + 1] != "b" && SETTINGS.board[i][j + 1] != "X")
        SETTINGS.board[i][j + 1] = type
    if (SETTINGS.board[i][j - 1] != "w" && SETTINGS.board[i][j - 1] != "b" && SETTINGS.board[i][j - 1] != "X")
        SETTINGS.board[i][j - 1] = type
    if (SETTINGS.board[i - 1][j + 1] != "w" && SETTINGS.board[i - 1][j + 1] != "b" && SETTINGS.board[i - 1][j + 1] != "X")
        SETTINGS.board[i - 1][j + 1] = type
    if (SETTINGS.board[i - 1][j - 1] != "w" && SETTINGS.board[i - 1][j - 1] != "b" && SETTINGS.board[i - 1][j - 1] != "X")
        SETTINGS.board[i - 1][j - 1] = type
    if (SETTINGS.board[i - 1][j] != "w" && SETTINGS.board[i - 1][j] != "b" && SETTINGS.board[i - 1][j] != "X")
        SETTINGS.board[i - 1][j] = type

    board.create();
}

export { timeout, gameEnd, gameLost, checkGameStart, destroyAround }