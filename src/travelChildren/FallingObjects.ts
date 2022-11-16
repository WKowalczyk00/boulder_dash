import { SETTINGS } from "../Settings";
import { board, Position } from "../index";
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

                this.itemCheck(i + 1, j, type, SETTINGS.FALLING_STONE_TIME_MS, true)
                //po odczekaniu wykonania spadania skal nastepuje sprawdzanie czy skala nie odkryla kolejnej mozliwosci
                await this.check();
                board.create();
            }
        }

        else if (rollingStownLeft) {
            await this.timeout(SETTINGS.FALLING_STONE_TIME_MS / 2)
            if (rollingStownLeft && SETTINGS.board[i][j] == type) {
                console.log("wystepuje taka zaleznosc");
                SETTINGS.board[i][j] = ""
                SETTINGS.board[i][j - 1] = type

                this.itemCheck(i + 1, j, type, SETTINGS.FALLING_STONE_TIME_MS / 2, true)
                await this.check()
                board.create();
            }

        }
        else if (rollingStownRight) {
            await this.timeout(SETTINGS.FALLING_STONE_TIME_MS / 2)
            if (rollingStownRight && SETTINGS.board[i][j] == type) {
                console.log("wystepuje taka zaleznosc");
                SETTINGS.board[i][j] = ""
                SETTINGS.board[i][j + 1] = type

                this.itemCheck(i + 1, j, type, SETTINGS.FALLING_STONE_TIME_MS / 2, true)
                await this.check();
                board.create();
            }
        }

        //przegrana
        if (SETTINGS.board[i + 1][j] == "X" && wasFalling == true) {
            await this.timeout(SETTINGS.FALLING_STONE_TIME_MS)
            if (SETTINGS.board[i + 1][j] == "X" && SETTINGS.board[i][j] == type) {
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
    // checkItem = async (i: number, j: number, kind: string) => {
    //     //sprawdzam czy dla wspolrzednych skaly obowiazuje spadek

    //     if (SETTINGS.board[i + 1][j] == "" || (SETTINGS.board[i][j - 1] == "" && SETTINGS.board[i + 1][j - 1] == "" && (SETTINGS.board[i + 1][j] == "s" || SETTINGS.board[i + 1][j] == "p"))) {
    //         //zamieniam skale na void, a obiekt pod skala na skale
    //         await this.timeout(1000)
    //         //sprawdzam czy po timeoucie nadal obowiazuje spadek
    //         if (SETTINGS.board[i + 1][j] == "" && SETTINGS.board[i][j] == kind) {
    //             console.log("czyrazem", i, j);

    //             SETTINGS.board[i][j] = ""
    //             SETTINGS.board[i + 1][j] = kind

    //             console.log("void pod kamieniem bądź punktem" + i + "_" + j);
    //             await this.check()
    //             await board.create()
    //         }
    //         else if (SETTINGS.board[i][j - 1] == "" && SETTINGS.board[i + 1][j - 1] == "" && (SETTINGS.board[i + 1][j] == "s" || SETTINGS.board[i + 1][j] == "p")) {
    //             // console.log("lolek", i + "_" + j);
    //             console.log("czyrazem", i, j);

    //             // if ((SETTINGS.board[i + 1][j] == "s" && SETTINGS.board[i + 2][j] == "") || SETTINGS.board[i + 1][j] == "") {
    //             //     return "trust me"
    //             // }
    //             // else {
    //             SETTINGS.board[i][j] = ""
    //             SETTINGS.board[i][j - 1] = kind
    //             // }


    //         }
    //         else return "err: there is not void under stone"


    //     }
    //     //kiedy nie spada ten ziomek
    //     else {
    //         return "nothing to fall"
    //     }
    // }
