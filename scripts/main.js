// JavaScript source code

window.addEventListener('load', () => {
    // классы
    const board = new Board();
    const game = new Game();
    const status = new Status();

    // инициализация
    game.init(status, board);
    board.init(status, game);

    board.renderBoard();
    board.initEventHandlers();

});