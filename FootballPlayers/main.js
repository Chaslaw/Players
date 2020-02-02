var players = [{
                img:"Alexandre-Lacazete-9.png",
                name: "Aleandre",
                lastName: "Lacazete",
                number: 9,
                position: "Forward",
                age: 25
            },
            {
                img:"Bernd-Leno-1.png",
                name: "Bernd",
                lastName: "Leno",
                number: 1,
                position: "Goalkeeper",
                age: 26
            },
            {
                img:"Dani-Ceballos-8.png",
                name: "Dani",
                lastName: "Ceballos",
                number: 8,
                position: "Deffender",
                age: 29
            },
            {
                img:"Davide-Luize-6.png",
                name: "Davide",
                lastName: "Luize",
                number: 6,
                position: "Deffender",
                age: 31
            },
            {
                img:"Eddie-Nketiah-24.png",
                name: "Eddie",
                lastName: "Nketiah",
                number: 24,
                position: "Forward",
                age: 28
            },
            {
                img:"Emiliano-Martinez-2.png",
                name: "Emiliano",
                lastName: "Martinez",
                number: 2,
                position: "Goalkeeper",
                age: 29
            },
            {
                img:"Gabriel-Martinelli-35.png",
                name: "Gabriel",
                lastName: "Martinelli",
                number: 35,
                position: "Forward",
                age: 24
            },
            {
                img:"Hector-Bellerin-3.png",
                name: "Hector",
                lastName: "Bellerin",
                number: 3,
                position: "Deffender",
                age: 25
            },
            {
                img:"Kieran-Tierney-4.png",
                name: "Kieran",
                lastName: "Tierney",
                number: 4,
                position: "Deffender",
                age: 25
            },
            {
                img:"Lucas-Toriera-11.png",
                name: "Lucas",
                lastName: "Toriera",
                number: 11,
                position: "Forward",
                age: 26
            },
            {
                img:"Mesut-Ozil-10.png",
                name: "Mesut",
                lastName: "Ozil",
                number: 10,
                position: "Middfielder",
                age: 33
            },
            {
                img:"Sead-Kolasinac-7.png",
                name: "Sead",
                lastName: "Kolasinac",
                number: 7,
                position: "Middfielder",
                age: 30
            },
            {
                img:"Nicolas-Pepe-19.png",
                name: "Nicolas",
                lastName: "Pepe",
                number: 19,
                position: "Forward",
                age: 25
            },
            {
                img:"Piere-Emeric-Aubameyang-14.png",
                name: "Piere-Emeric",
                lastName: "Aubameyang",
                number: 14,
                position: "Forward",
                age: 23
            },
            {
                img:"Reis-Nelson-11.png",
                name: "Reis",
                lastName: "Nelson",
                number: 11,
                position: "Forward",
                age: 29
            }];

            function getRandomNumber (arr) {
                
                
                return Math.floor(Math.random() * arr.length);
            };


function addPlayers () {
   while (players.length ){

      

        var playersAteam = document.querySelector(".players-a");
        var playersBteam = document.querySelector(".substitutions")
        var randomNumber = getRandomNumber(players);
        var container = players.length > 3 ? playersAteam : playersBteam;

        
        container.appendChild(createPlayer(players[randomNumber]));

        players.splice(randomNumber, 1);

    
    };
};

function createPlayer (playerData) {
    var player = document.createElement('div');
    player.classList.add('player');

    var img = '<img src="img/'+ playerData.img + '"alt=""/>';
    var name = '<div> NAME: ' + playerData.name +" "+ playerData.lastName + '</div>';
    var num = '<div> NUMBER: ' + playerData.number + '</div>';
    var pos = '<div> POSITION: ' + playerData.position + '</div>';
    var age = '<div> AGE: ' + playerData.age + '</div>';
    
    player.innerHTML = img + name + num + pos + age;

    return player;

};

addPlayers();


function makeSubs () {
    var firstTeam = document.querySelectorAll(".players-a .player");
    var subsTeam = document.querySelectorAll(".substitutions .player");

    var firstTeamNumber = getRandomNumber(firstTeam);
    var subsTeamNumber = getRandomNumber(subsTeam);

    var firstTeamPlayer = firstTeam[firstTeamNumber];
    var secondTeamPlayer = subsTeam[subsTeamNumber];

    var subPrevious = secondTeamPlayer.previousSibling;
    var subNext = secondTeamPlayer.nextSibling;

    firstTeamPlayer.after(secondTeamPlayer);

    subPrevious ? subPrevious.after(firstTeamPlayer) : subNext.before(firstTeamPlayer);

    return(firstTeamPlayer, secondTeamPlayer);

}

setInterval(makeSubs, 3000);










