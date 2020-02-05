function gamesOrder() {
    //Input
    var game;
    var gamesNumber;
    var gameImage;
    //processing
    while(game !== "dota" && game !== "csgo"){
        game = prompt( "Hello! Would you like to play dota or csgo?");
    }
    gamesNumber= prompt("How many games would you like to order?");
    for(var i = 0; i < gamesNumber; i++){
    if(game === "dota"){
        num = i + 1;
    alert("This is your dota game number " + num );
    gameImage = '<img src="picture/dota.jpg">';
    document.write('<p>' + num + gameImage + '</p>');
    } else if(game === "csgo") {
        num = i + 1;
        alert("This is your csgo game number " + num );
        gameImage = '<img src="picture/csgo.jpg">';
        document.write('<p>' + num + gameImage + '</p>');
    }
    }
    return gameImage;
}
 gamesOrder();
// document.write('<p>' + gamesOrder() + '</p>')



