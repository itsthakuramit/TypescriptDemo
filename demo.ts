class Player{

    playerid: string;
    playername: string;
    sports: string;

    constructor(playerid:string, playername: string, sports: string){
        this.playerid = playerid;
        this.playername = playername;
        this.sports = sports;
    }

    sayHello(): string{
        return 'hello '+this.playername;
    }

}


let newPlayer = new Player('pl001','Gabriela Sabatini', 'Tennis');
console.log(newPlayer.sayHello())