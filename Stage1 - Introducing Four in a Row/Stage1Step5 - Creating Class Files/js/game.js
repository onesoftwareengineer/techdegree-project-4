class Game {
    constructor () {
        this.board = new Board();
        this.players = new this.createPlayers();
        this.ready = false;
    }

    createPlayers() {
        const players= [new Player('Daniel', 1, 'blue', true)
            ,new Player('Cristi', 2, 'purple')];
        return players;
    }
}