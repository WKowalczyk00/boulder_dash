export const SETTINGS = {
    board:
        [
            ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
            ["w", "s", "D", "p", "s", "D", "", "", "p", "w"],
            ["w", "D", "X", "D", "s", "D", "D", "s", "", "w"],
            ["w", "D", "D", "D", "D", "D", "p", "D", "", "w"],
            ["w", "D", "s", "D", "s", "", "D", "s", "D", "w"],
            ["w", "D", "D", "D", "", "", "D", "D", "", "w"],
            ["w", "D", "D", "D", "D", "D", "D", "D", "e", "w"],
            ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
        ],
    boardPart: [],
    changeBoardPart: [
        [{ i: 3, j: 3 }, { i: 3, j: 5 }],
        [{ i: 5, j: 3 }, { i: 5, j: 5 }]
    ],
    FALLING_STONE_TIME_MS: 1000,
    HOLD_KEY_TIME_MS: 500,
}