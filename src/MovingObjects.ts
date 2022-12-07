import { Position } from "./index";
import { MovingEntity } from "./movingObjectsChildren/MovingEntity";
import { SETTINGS } from "./Settings";

export class MovingObjects {
    entity!: MovingEntity;
    constructor() {
        // this.entity
        this.findObject();
    }
    findObject = () => {
        for (let i = 0; i < SETTINGS.board.length; i++) {
            for (let j = 0; j < SETTINGS.board[i].length; j++) {
                if (SETTINGS.board[i][j] == "m") {
                    this.objectMove(SETTINGS.board[i][j], { i: i, j: j });
                }
            }
        }
    }
    objectMove = (type: string, position: Position) => {
        this.entity = new MovingEntity(type, position);
    }
}