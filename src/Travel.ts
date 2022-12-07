import { SETTINGS } from "./Settings";
import { board, travel, Position, changeTravel, valuesBoard } from "./index";
import { FallingObjects } from "./travelChildren/FallingObjects"
import { checkGameStart, destroyAround, gameEnd, gameLost, timeout } from "./functions"

export class Travel {
    event: KeyboardEvent;
    position: Position;
    isBeingHeld: boolean;
    time: number;
    constructor(event: KeyboardEvent) {
        this.event = event
        this.position = { i: 0, j: 0 };
        this.isBeingHeld = true;
        this.time = 0;

        this.msHeld();
        this.keyPress();

    }

    timeout = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    checkTime = () => {
        return this.time
    }

    msHeld = () => {
        const interval = setInterval(() => {
            this.time = this.time + 20
            if (!this.isBeingHeld) {
                clearInterval(interval)
            }
        }, 20)
    }

    keyPress = async () => {
        this.position = await board.getPosition() as Position
        switch (this.event.key) {
            case "ArrowLeft":
                this.move(0, -1);

                break;
            case "ArrowUp":
                this.move(-1, 0);

                break;
            case "ArrowDown":
                this.move(+1, 0);

                break;
            case "ArrowRight":
                this.move(0, 1);

                break;

            default:
                break;
        }
    }

    move = async (mI: number, mJ: number) => {
        let goTo = SETTINGS.board[this.position.i + mI][this.position.j + mJ]

        switch (goTo) {
            case "D":

            case "":
                SETTINGS.board[this.position.i][this.position.j] = ""
                SETTINGS.board[this.position.i + mI][this.position.j + mJ] = "X"
                this.ifKeyIsBeingHeld();

                var audio = new Audio('sounds/move.mp3');
                audio.play();
                break;
            case "p":
                valuesBoard.addPoint();
                SETTINGS.board[this.position.i][this.position.j] = ""
                SETTINGS.board[this.position.i + mI][this.position.j + mJ] = "X"
                this.ifKeyIsBeingHeld();

                var audio = new Audio('sounds/get-point.mp3');
                audio.play();
                break;
            case "s":
                if (SETTINGS.board[this.position.i][this.position.j + mJ * 2] != "")
                    return "err: can`t push stone"
                await this.timeout(1000)

                if (this.time >= 1000) {
                    if (SETTINGS.board[this.position.i + mI][this.position.j + mJ] != "s") {
                        return "err: stone disappeared"
                    }
                    SETTINGS.board[this.position.i][this.position.j] = ""
                    SETTINGS.board[this.position.i + mI][this.position.j + mJ] = "X"
                    SETTINGS.board[this.position.i][this.position.j + mJ * 2] = "s"
                    var audio = new Audio('sounds/stone-fall.mp3');
                    audio.play();
                    this.ifKeyIsBeingHeld();
                }
                else
                    return "err: pushing stone no more"
                break;
            case "w":
                return "err: you`re heading wall";
            case "b":
                return "err: you`re heading brick";
            case "e":
                return "err: exit not opened yet";
            case "o":
                SETTINGS.board[this.position.i][this.position.j] = ""
                SETTINGS.board[this.position.i + mI][this.position.j + mJ] = "X"
                gameEnd();
                valuesBoard.giveTimePoints();
                var audio = new Audio('sounds/points-flow.mp3');
                audio.play();
                console.log("wygrales gre, gratulacje");

                break;
            case "m":
                gameEnd();
                destroyAround(this.position.i, this.position.j, "p");
                destroyAround(this.position.i + mI, this.position.j + mJ, "p");
                await timeout(1500)
                
                gameLost();

                await checkGameStart()
                break;
        }

        let fallingObjects = new FallingObjects()
        await fallingObjects.check()

        await board.create();


    }

    ifKeyIsBeingHeld = async () => {

        const position = await board.getPosition() as Position
        const xClass = document.getElementById(position.i + "_" + position.j) as HTMLElement
        if (this.time >= SETTINGS.HOLD_KEY_TIME_MS && this.isBeingHeld == true) {
            changeTravel(new Travel(this.event))
        }
        else if (this.isBeingHeld == false) {
            xClass.className = "square X";
        }
        else {
            if (this.event.key == "ArrowRight" || this.event.key == "ArrowDown")
                xClass.className = "square X movingRight";
            else if (this.event.key == "ArrowUp" || this.event.key == "ArrowLeft") {
                xClass.className = "square X movingLeft";
            }
            window.requestAnimationFrame(this.ifKeyIsBeingHeld)
        }

    }
}