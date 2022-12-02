function updatePlayerChoiceInMatrix(place) {
    const sign = turn % 2 ? 0 : 1;
    const i = (place - 1) % 3;
    let j;

    switch (true) {
        case place <= 3:
            j = 0;
            break;
        case place <= 6:
            j = 1;
            break;
        default:
            j = 2;
    }
    gameMatrix[j][i] = sign;

    turn++;
    isFinishedGame = isGameOver();
}

function isGameOver() {
    if (isWinnerByRow()) return true;

    if (isWinnerByColumn()) return true;

    if (isWinnerBySlant()) return true;

    return turn < 10 ? false : true;
}
