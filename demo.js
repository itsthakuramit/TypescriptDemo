var Player = (function () {
    function Player(playerid, playername, sports) {
        this.playerid = playerid;
        this.playername = playername;
        this.sports = sports;
    }
    Player.prototype.sayHello = function () {
        return 'hello ' + this.playername;
    };
    return Player;
})();
var newPlayer = new Player('pl001', 'Gabriela Sabatini', 'Tennis');
console.log(newPlayer.sayHello());
