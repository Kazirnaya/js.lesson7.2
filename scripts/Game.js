// JavaScript source code
class Game {

    init(status, board) {
        this.status = status;
        this.board = board;
    };

    cellClickHandler(event) {
        if (!this.isClickCorrect(event)) {
            return;
        }
        this.board.fillCell(event);
        this.status.fillMapValues(event);
        if (this.hasWon()) {
            this.status.stopStatus();
            this.congratulationsToWinner();
        }
        this.status.changePhase();

    }

    isClickCorrect(event) {
        return this.board.isClickByCell(event) && this.status.isStatusPlaying() && this.board.isCellEmpty(event);
    }

    hasWon() {
        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
            this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
            this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
            this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    }

    isLineWon(a, b, c) {
        let value = this.status.mapValues[a.y][a.x] + this.status.mapValues[b.y][b.x] + this.status.mapValues[c.y][c.x];
        return value === 'XXX' || value === 'OOO';
    }

    congratulationsToWinner() {
        let figure = this.status.phase === 'X' ? 'X' : 'O';
        alert(`${figure} won!`);
    }
}












