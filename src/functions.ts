import { keydown, keyup, valuesBoard } from "./index"

const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
const gameEnd = () => {
    document.removeEventListener("keydown", keydown)
    document.removeEventListener("keyup", keyup)
    clearInterval(valuesBoard.interval)
}

export { timeout, gameEnd }