import { SETTINGS } from "./Settings";
import { board, travel, Position, changeTravel, keydown, keyup } from "./index";

export class ValuesBoard {
    pointsPerNextLevel: number = SETTINGS.levelClear;
    pointValue: number = SETTINGS.scoreForPoint;
    points: number = 0;
    timer: number = SETTINGS.timerStart;
    score: number = 0;

    numbersPanel: HTMLElement | null = document.getElementById("numbersPanel") as HTMLElement;
    pointsPerNextLevelDiv: HTMLElement = document.getElementById("pointsPerNextLevel") as HTMLElement;
    pointValueDiv: HTMLElement = document.getElementById("pointValue") as HTMLElement;
    pointsDiv: HTMLElement = document.getElementById("points") as HTMLElement;
    timerDiv: HTMLElement = document.getElementById("timer") as HTMLElement;
    scoreDiv: HTMLElement = document.getElementById("score") as HTMLElement;

    interval: NodeJS.Timer = setInterval(()=>{});
    constructor() {
        this.asignValues();
        this.timerChangeValue();
    }

    asignValues = () => {
        
        this.printValues();
    }

    addPoint = () => {
        this.points++;
        this.score = this.points * this.pointValue
    }

    printValues = () => {
        this.pointsPerNextLevelDiv.innerHTML = "" + this.pointsPerNextLevel + ""
        this.pointValueDiv.innerHTML = "" + this.pointValue + ""
        this.pointsDiv.innerHTML = "" + this.checkFormat(this.points, 3) + ""
        this.timerDiv.innerHTML = "" + this.checkFormat(this.timer, 3) + ""
        this.scoreDiv.innerHTML = "" + this.checkFormat(this.score, 6) + ""
    }

    checkFormat = (number: number, nODigits: number) => {
        let numStr = JSON.stringify(number)
        if (numStr.length != nODigits) {
            let howMuch0 = 0;
            howMuch0 = nODigits - numStr.length
            for (let i = 0; i < howMuch0; i++) {
                numStr = "" + 0 + "" + numStr
            }
        }
        return numStr;
    }

    timerChangeValue = () => {
        // return 0
        this.interval = setInterval(async () => {
            this.timer--;
            this.printValues();
            if (this.timer == 0) {
                clearInterval(this.interval)
                console.log("przegrana - koniec czasu");
                this.lostByTime();
            }
        }, 1000)
    }

    lostByTime = async () => {
        document.removeEventListener("keydown", keydown)
        document.removeEventListener("keyup", keyup)
        const gameLostDiv = document.getElementById("gameLost") as HTMLElement
        let position: Position;
        for (let i = 0; i < 5; i++) {
            gameLostDiv.style.display = "block"
            gameLostDiv.innerHTML = "OUT OF TIME"
            await this.timeout(1000)
            gameLostDiv.style.display = "none"
            await this.timeout(1000)
        }
        await this.timeout(500)
        position = await board.getPosition();
        this.destroyAround(position.i, position.j)
    }

    destroyAround = (i: number, j: number) => {
        SETTINGS.board[i][j] = ""
        SETTINGS.board[i + 1][j + 1] = ""
        SETTINGS.board[i + 1][j - 1] = ""
        SETTINGS.board[i + 1][j] = ""
        SETTINGS.board[i][j + 1] = ""
        SETTINGS.board[i][j - 1] = ""
        SETTINGS.board[i - 1][j + 1] = ""
        SETTINGS.board[i - 1][j - 1] = ""
        SETTINGS.board[i - 1][j] = ""

        board.create();
    }

    timeout = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

}