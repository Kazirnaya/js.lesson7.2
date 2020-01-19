// JavaScript source code
class Status {
    constructor() {
        this.status = 'playing';
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        this.phase = 'X';
    };

    isStatusPlaying() {
        return this.status === 'playing';
    };

    fillMapValues(event) {        
        this.mapValues[+event.target.dataset.row][+event.target.dataset.col] = this.phase;
    }

    changePhase() {
        this.phase = this.phase === 'X' ? 'O' : 'X'
    }

    stopStatus() {
        this.status = 'stopped';
    }
}