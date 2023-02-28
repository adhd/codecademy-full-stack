/*
Project name: Team States
We want to create, retrieve, and add information about your favorite sports team. 
Basketball, soccer, tennis, or water polo, you pick it. 
*/

const team = {
  _players: [
    {firstName:'dave', lastName:'one', age:11},
    {firstName:'davey', lastName:'two', age:21},
    {firstName:'david', lastName:'three', age:31}
  ],
  _games: [
    {opponent:'bayc', teamPoints:22, opponentPoints:12},
    {opponent:'mayc', teamPoints:33, opponentPoints:13},
    {opponent:'cool', teamPoints:44, opponentPoints:14}
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge) {
    this.players.push({firstName: newFirstName, lastName: newLastName, age:newAge});
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {opponent: newOpponent,
                teamPoints: newTeamPoints, 
                opponentPoints: newOpponentPoints};
    return this.games.push(game);
  }
}

team.addPlayer('Bugs', 'Bunny',76);
team.addGame('Titan', 100, 98);

console.log(team._players);
console.log(team._games);
