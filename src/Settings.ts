export const SETTINGS = {
    board: [
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "D", "D", "D", "D", "D", "D", "", "D", "D", "p", "D", "s", "", "D", "D", "D", "D", "D", "s", "D", "s", "D", "D", "D", "D", "D", "D", "D", "", "D", "D", "D", "D", "s", "D", "D", "D", "D", "w"],
        ["w", "D", "s", "X", "s", "D", "D", "D", "D", "D", "D", "", "D", "D", "D", "D", "D", "D", "D", "D", "D", "s", "p", "D", "D", "s", "D", "D", "D", "D", "", "D", "D", "D", "D", "D", "", "D", "D", "w"],
        ["w", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "", "D", "D", "", "D", "D", "D", "D", "D", "s", "D", "s", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "w"],
        ["w", "s", "D", "s", "s", "D", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "D", "s", "D", "D", "s", "D", "D", "D", "D", "s", "D", "D", "D", "s", "D", "D", "D", "D", "D", "w"],
        ["w", "s", "D", "", "s", "D", "D", "D", "D", "D", "D", "D", "D", "D", "s", "s", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "D", "s", "D", "s", "", "D", "w"],
        ["w", "D", "D", "D", "", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "s", "D", "", "s", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "s", "s", "D", "w"],
        ["w", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "D", "D", "D", "s", "D", "D", "s", "D", "w"],
        ["w", "D", "", "D", "D", "D", "s", "D", "D", "p", "D", "", "D", "D", "s", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "p", "D", "s", "", "D", "D", "D", "D", "D", "D", "s", "D", "w"],
        ["w", "D", "D", "p", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "", "D", "D", "D", "D", "D", "D", "D", "D", "s", "", "", "s", "D", "D", "p", "D", "D", "D", "D", "s", "D", "D", "D", "w"],
        ["w", "D", "D", "D", "s", "D", "D", "s", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "s", "s", "D", "s", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "w"],
        ["w", "D", "", "s", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "s", "s", "", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "s", "D", "p", "D", "D", "D", "D", "", "D", "w"],
        ["w", "D", "s", "D", "D", "", "D", "D", "s", "D", "", "", "D", "D", "D", "D", "D", "s", "D", "s", "p", "D", "D", "p", "D", "D", "D", "D", "s", "D", "D", "D", "s", "D", "D", "p", "D", "s", "D", "w"],
        ["w", "D", "p", "s", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "s", "s", "s", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "p", "D", "D", "D", "D", "D", "s", "w"],
        ["w", "D", "D", "D", "D", "D", "D", "D", "D", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "w"],
        ["w", "", "", "D", "D", "D", "D", "D", "D", "D", "D", "D", "", "D", "D", "D", "p", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "s", "D", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "w"],
        ["w", "s", "s", "D", "D", "D", "D", "D", "D", "D", "D", "D", "s", "s", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "D", "s", "D", "s", "", "D", "D", "e", "w"],
        ["w", "D", "s", "D", "D", "s", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "s", "D", "", "", "D", "D", "D", "D", "p", "D", "D", "D", "s", "D", "s", "s", "D", "D", "D", "w"],
        ["w", "D", "D", "D", "D", "s", "p", "D", "D", "", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "D", "s", "D", "s", "p", "D", "D", "D", "D", "D", "D", "s", "D", "D", "D", "w"],
        ["w", "D", "D", "D", "", "D", "D", "", "D", "s", "D", "D", "s", "D", "s", "s", "D", "D", "D", "D", "D", "D", "D", "D", "D", "s", "D", "s", "p", "D", "D", "D", "D", "D", "D", "s", "D", "D", "s", "w"],
        ["w", "D", "p", "D", "D", "D", "D", "s", "D", "D", "D", "D", "D", "", "D", "D", "D", "D", "D", "D", "D", "D", "D", "", "D", "s", "D", "D", "s", "D", "s", "D", "D", "D", "D", "D", "D", "s", "D", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]]
    ,
    board2: [
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "s", "D", "", "s", "D", "s", "", "p", "w"],
        ["w", "D", "X", "D", "s", "s", "s", "s", "", "w"],
        ["w", "b", "D", "D", "s", "D", "s", "D", "", "w"],
        ["w", "D", "s", "D", "s", "", "s", "s", "D", "w"],
        ["w", "D", "D", "D", "D", "", "D", "D", "", "w"],
        ["w", "D", "D", "D", "D", "", "D", "D", "e", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
    ],
    //                 TL            TR         BL         BR
    boardPart: [{ i: 14, j: 25 }, { i: 14, j: 16 }, { i: 8, j: 25 }, { i: 8, j: 16 }],
    FALLING_STONE_TIME_MS: 250, // time in which stone is falling
    HOLD_KEY_TIME_MS: 125, //time to next move while holding key
    timerStart: 150, //strart of the timer in seconds
    scoreForPoint: 10, //amount of score per point 
    levelClear:5, //amount of points needed to clear level
}