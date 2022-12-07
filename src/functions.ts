import { keydown, keyup, valuesBoard, gameStart, travel } from "./index"
import { SETTINGS } from "./Settings"

const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
const gameEnd = () => {
    travel.isBeingHeld = false;
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

export { timeout, gameEnd, gameLost, checkGameStart }