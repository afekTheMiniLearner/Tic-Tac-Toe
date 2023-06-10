function isGameOver() {
    const matrixWinnerItems =
        getMatrixWinnersByRow() ||
        getMatrixWinnersByColumn() ||
        getMatrixWinnersBySlant();

    const boardButtons = getAllBoardButtons();
    const matrixNotFull = boardButtons.some((button) => !button.sign);
    if (matrixWinnerItems) {
        playSound('win');
        matrixWinnerItems.forEach((item) => item.toggleMode('winner'));
        showPopups();
        return true;
    } else if (matrixNotFull) {
        playSound('action');
        return false;
    }

    playSound('fullBoard');
    showPopups(true);
    return true;
}

function getMatrixWinnersByRow() {
    for (let i = 0; i < gameMatrix.length; i++) {
        if (
            gameMatrix[i][0].sign !== null &&
            gameMatrix[i][0].sign === gameMatrix[i][1].sign &&
            gameMatrix[i][1].sign === gameMatrix[i][2].sign
        ) {
            return [gameMatrix[i][0], gameMatrix[i][1], gameMatrix[i][2]];
        }
    }
    return false;
}

function getMatrixWinnersByColumn() {
    for (let j = 0; j < gameMatrix.length; j++) {
        if (
            gameMatrix[0][j].sign !== null &&
            gameMatrix[0][j].sign === gameMatrix[1][j].sign &&
            gameMatrix[1][j].sign === gameMatrix[2][j].sign
        ) {
            return [gameMatrix[0][j], gameMatrix[1][j], gameMatrix[2][j]];
        }
    }
    return false;
}

function getMatrixWinnersBySlant() {
    if (
        gameMatrix[0][0].sign !== null &&
        gameMatrix[0][0].sign === gameMatrix[1][1].sign &&
        gameMatrix[1][1].sign === gameMatrix[2][2].sign
    ) {
        return [gameMatrix[0][0], gameMatrix[1][1], gameMatrix[2][2]];
    }

    if (
        gameMatrix[0][2].sign !== null &&
        gameMatrix[0][2].sign === gameMatrix[1][1].sign &&
        gameMatrix[1][1].sign === gameMatrix[2][0].sign
    ) {
        return [gameMatrix[0][2], gameMatrix[1][1], gameMatrix[2][0]];
    }

    return false;
}
