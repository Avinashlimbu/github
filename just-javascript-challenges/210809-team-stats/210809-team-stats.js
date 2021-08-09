const team = {
  _players: [
    {firstName: 'Lavi', lastName: 'Don', age: 15},
    {firstName: 'Oniz', lastName: 'Nod', age: 19},
    {firstName: 'Calvin', lastName: 'Slevenia', age: 16}
    ],
  _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Packers', teamPoints: 67, opponentPoints: 37},
    {opponent: 'Steelers', teamPoints: 52, opponentPoints: 62}
    ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
},

  addGame(oppName, teamPoint, oppPoint) {
   const game = {
     opponent: oppName,
     teamPoints: teamPoint,
     opponentPoint:  oppPoint
   }
   this.games.push(game);
 }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Sea Lions', 100, 50);
team.addGame('Wolves', 90, 23);
team.addGame('Lions', 60, 33);

console.log(team.games);
