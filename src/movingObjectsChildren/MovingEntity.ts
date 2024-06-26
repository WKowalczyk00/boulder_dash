import { checkGameStart, destroyAround, gameEnd, gameLost } from "../functions";
import { board, Position } from "../index";
import { SETTINGS } from "../Settings";
import { FallingObjects } from "../travelChildren/FallingObjects";

export class MovingEntity {
    type: string;
    position: Position;
    direction: Position;

    top: Position;
    left: Position;
    bottom: Position;
    right: Position;

    lost: boolean;
    constructor(type: string, position: Position) {
        this.type = type;
        this.position = position;
        this.direction = { i: -1, j: 0 }//top
        this.top = { i: -1, j: 0 }
        this.left = { i: 0, j: -1 }
        this.bottom = { i: 1, j: 0 }
        this.right = { i: 0, j: 1 }
        this.lost = false

        this.checkEntityMove();


        // this.moveEntity();
    }
    timeout = async (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    checkEntityMove = async () => {
        // console.log(this.left);
        if (this.lost == true) {
            return 0;
        }

        let tb = 1
        if ((this.direction.i == this.left.i && this.direction.j == this.left.j) || (this.direction.i == this.right.i && this.direction.j == this.right.j)) {
            // console.log("left|right");
            tb = -1
        }

        if (SETTINGS.board[this.position.i + this.direction.j * tb][this.position.j + this.direction.i * tb] == "" || SETTINGS.board[this.position.i + this.direction.j * tb][this.position.j + this.direction.i * tb] == "X") {
            await this.moveEntity(this.position.i + this.direction.j * tb, this.position.j + this.direction.i * tb)

        }
        else if (SETTINGS.board[this.position.i + this.direction.i][this.position.j + this.direction.j] == "" || SETTINGS.board[this.position.i + this.direction.i][this.position.j + this.direction.j] == "X") {
            await this.moveEntity(this.position.i + this.direction.i, this.position.j + this.direction.j)
        }
        else if (SETTINGS.board[this.position.i - this.direction.j * tb][this.position.j - this.direction.i * tb] == "" || SETTINGS.board[this.position.i - this.direction.j * tb][this.position.j - this.direction.i * tb] == "X") {
            await this.moveEntity(this.position.i - this.direction.j * tb, this.position.j - this.direction.i * tb)
        }
        else if (SETTINGS.board[this.position.i - this.direction.i][this.position.j - this.direction.j] == "" || SETTINGS.board[this.position.i - this.direction.i][this.position.j - this.direction.j] == "X") {
            await this.moveEntity(this.position.i - this.direction.i, this.position.j - this.direction.j)
        }

        

        await this.timeout(SETTINGS.butterflyMoveTime)
        await this.checkEntityMove();
    }
    moveEntity = async (mI: number, mJ: number) => {
        // await this.timeout(500);
        if (SETTINGS.board[mI][mJ] == "" || SETTINGS.board[mI][mJ] == "X") {
            if (SETTINGS.board[mI][mJ] == "X") {
                //przegrana

                console.log("lolek");

                gameEnd();
                if (this.type == "m") {
                    SETTINGS.board[mI][mJ] = "p"
                    destroyAround(this.position.i, this.position.j, "p")
                    destroyAround(mI, mJ, "p")
                }
                else {
                    SETTINGS.board[mI][mJ] = ""
                    destroyAround(this.position.i, this.position.j, "")
                    destroyAround(mI, mJ, "")
                }
                this.lost = true;
                await this.timeout(1500)
                gameLost();
                await checkGameStart()
            }
            else {
                await this.changeDirection(mI, mJ);

                SETTINGS.board[mI][mJ] = this.type
                SETTINGS.board[this.position.i][this.position.j] = ""

                this.position = { i: mI, j: mJ }
                let fallingObjects = new FallingObjects
                fallingObjects.check();
                board.create();
            }


        }

    }
    changeDirection = async (mI: number, mJ: number) => {
        //top
        // const oldDirection = this.direction
        if (mI < this.position.i) {
            // console.log("top");
            this.direction = { i: -1, j: 0 }

        }
        //bottom
        else if (mI > this.position.i) {
            // console.log("bottom");

            this.direction = { i: 1, j: 0 }

        }
        //right
        else if (mJ > this.position.j) {
            // console.log("right");
            this.direction = { i: 0, j: 1 }
            // if()

        }
        //left
        else if (mJ < this.position.j) {
            // console.log("left");

            this.direction = { i: 0, j: -1 }

        }
    }

}