// JavaScript source code

class Board {
    constructor() {
        this.boardEl = document.getElementById('game');
    };

    init(status, game) {
        this.status = status;
        this.game = game;
    };
    /**
     * Метод отрисовывает игровое поле.
     */
    renderBoard() {
        this.boardEl.innerHTML = '';
        for (let row = 0; row < 3; row++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);

            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    };


    initEventHandlers() {
        this.boardEl.addEventListener('click', event => this.game.cellClickHandler(event));
    };

    isClickByCell(event) {
        return event.target.tagname = 'td';
    };

    isCellEmpty(event) {
        return event.target.innerText === "";
    };

    fillCell(event) {
        event.target.innerText = this.status.phase;
    }
}