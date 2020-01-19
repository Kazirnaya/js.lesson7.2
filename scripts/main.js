// JavaScript source code

window.addEventListener('load', () => {
    // ������
    const board = new Board();
    const game = new Game();
    const status = new Status();

    // �������������
    game.init(status, board);
    board.init(status, game);

    board.renderBoard();
    board.initEventHandlers();

});