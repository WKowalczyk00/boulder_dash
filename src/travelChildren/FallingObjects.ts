import { SETTINGS } from "../Settings";
import { board, Position, keydown, keyup, valuesBoard } from "../index";
import { gameEnd } from "../functions";
export class FallingObjects {
    itemPosition: Position;
    itemType: string;
    // fallingTime: number;
    constructor() {
        this.itemPosition = { i: 0, j: 0 }
        this.itemType = ""
    }
    timeout = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    check = async () => {
        for (let i = SETTINGS.board.length - 1; i >= 0; i--) {
            for (let j = SETTINGS.board[i].length - 1; j >= 0; j--) {
                //znajduje wszystkie skaly i punkty
                if (SETTINGS.board[i][j] == "s" || SETTINGS.board[i][j] == "p") {
                    //dla kazdej skaly przesylam jej wspolrzedne
                    // this.checkItem(i, j, SETTINGS.board[i][j])
                    this.itemCheck(i, j, SETTINGS.board[i][j], SETTINGS.FALLING_STONE_TIME_MS, false)

                }
            }
        }
    }
    itemCheck = async (i: number, j: number, type: string, nextTimeout: number, wasFalling: boolean) => {
        const rollingStownLeft: boolean = SETTINGS.board[i][j - 1] == "" && SETTINGS.board[i + 1][j - 1] == "" && (SETTINGS.board[i + 1][j] == "s" || SETTINGS.board[i + 1][j] == "p")
        const rollingStownRight: boolean = SETTINGS.board[i][j + 1] == "" && SETTINGS.board[i + 1][j + 1] == "" && (SETTINGS.board[i + 1][j] == "s" || SETTINGS.board[i + 1][j] == "p")

        // if (SETTINGS.board[i + 1][j] == "" || rollingStownSideways) {
        // console.log(i, j);



        if (SETTINGS.board[i + 1][j] == "") {
            await this.timeout(nextTimeout)
            if (SETTINGS.board[i + 1][j] == "" && SETTINGS.board[i][j] == type) {
                SETTINGS.board[i][j] = ""
                SETTINGS.board[i + 1][j] = type

                if (SETTINGS.board[i + 2][j] != "" && type == "s") {
                    await this.timeout(SETTINGS.FALLING_STONE_TIME_MS / 2)
                    var audio = new Audio('sounds/stone-fall.mp3');
                    audio.play();
                }
                else if (SETTINGS.board[i + 2][j] != "" && type == "p") { 
                    // await this.timeout(SETTINGS.FALLING_STONE_TIME_MS / 2)
                    var audio = new Audio('sounds/point-fall.mp3');
                    audio.play();
                }

                this.itemCheck(i + 1, j, type, SETTINGS.FALLING_STONE_TIME_MS, true)
                this.check();
                board.create();
            }
        }

        else if (rollingStownLeft) {
            await this.timeout(SETTINGS.FALLING_STONE_TIME_MS / 2)
            console.table(SETTINGS.board)
            if (SETTINGS.board[i][j - 1] == "" && SETTINGS.board[i + 1][j - 1] == "" && (SETTINGS.board[i + 1][j] == "s" || SETTINGS.board[i + 1][j] == "p") && SETTINGS.board[i][j] == type) {
                console.log("rolling left");
                SETTINGS.board[i][j] = ""
                SETTINGS.board[i][j - 1] = type


                this.itemCheck(i + 1, j, type, SETTINGS.FALLING_STONE_TIME_MS / 2, true)
                await this.check()
                board.create();
            }
            else {
                console.log("blad l");

            }

        }
        else if (rollingStownRight) {
            await this.timeout(SETTINGS.FALLING_STONE_TIME_MS / 2)
            if (SETTINGS.board[i][j + 1] == "" && SETTINGS.board[i + 1][j + 1] == "" && (SETTINGS.board[i + 1][j] == "s" || SETTINGS.board[i + 1][j] == "p") && SETTINGS.board[i][j] == type) {
                console.log("rolling right");
                SETTINGS.board[i][j] = ""
                SETTINGS.board[i][j + 1] = type


                this.itemCheck(i + 1, j, type, SETTINGS.FALLING_STONE_TIME_MS / 2, true)
                await this.check();
                board.create();
            }
            else {
                console.log("blad r");

            }
        }


        //przegrana spadek na leb
        if (SETTINGS.board[i + 1][j] == "X" && wasFalling == true) {
            await this.timeout(SETTINGS.FALLING_STONE_TIME_MS)
            if (SETTINGS.board[i + 1][j] == "X" && SETTINGS.board[i][j] == type) {
                gameEnd();
                SETTINGS.board[i + 1][j] = ""
                SETTINGS.board[i + 2][j + 1] = ""
                SETTINGS.board[i + 2][j - 1] = ""
                SETTINGS.board[i + 2][j] = ""
                SETTINGS.board[i + 1][j + 1] = ""
                SETTINGS.board[i + 1][j - 1] = ""
                SETTINGS.board[i][j + 1] = ""
                SETTINGS.board[i][j - 1] = ""
                SETTINGS.board[i][j] = ""
                this.check();
                board.create();
                console.log("przegrales/as n00bku");

            }

        }

    }
}
