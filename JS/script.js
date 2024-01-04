console.log("Assignment JS");
const game = {
    team1: "India",
    team2: "Australia",
    players: [
      [
        "Dhoni",
        "Sharma",
        "Kohli",
        "Rahul",
        "Jadeja",
        "Pandey",
        "Ashwin",
        "Chahal",
        "Khan",
        "Bhumra",
        "Shami",
      ],
      [
        "Wade",
        "Cummins",
        "Green",
        "Maxwell",
        "Finch",
        "Hazelwood",
        "Marsh",
        "Stoinis",
        "Richardson",
        "Starc",
        "Warner",
      ],
    ],
    Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  // 1st scenario
  let {players : Players} = game;
  console.log(Players);
  let [player1,player2] = Players;
  console.log("Player1: ",player1, typeof player1);
  console.log("Player2: ",player2,typeof player2);


  //else
 //let [player1,player2] = game.players;

  let abs = ["Apple", "Banana", "Orange"];
  console.log(abs, typeof abs);

  //2nd scenario
  let [Ind, ...fieldPlayers] = player1;
  console.log("Wicketkeeper: ",Ind);
  console.log("fieldPlayers: ",fieldPlayers);

  //3rd scenario

  let allPlayers = [...player1,...player2];
  console.log(allPlayers);

  //4th scenario
  let players1Final = [...player1,'Sandeep', 'John' , 'Sunil'];
  console.log("players1Final:", players1Final);

  //5th scenario
  let{team1,x:draw,team2} = game.odds;
  console.log(team1,draw,team2);

  

  