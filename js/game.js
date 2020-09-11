class Game {
    constructor(){}

    //To read gameState from the database
    getState(){
        var gameStateref = database.ref("GameState");
        gameStateref.on( "value",function(data){
            GameState = data.val();
        });
    }

    //To write gameState into the database
    update(state){
        database.ref("/").update({
            GameState: state
        });

    }

    //Wait - displaying form ---> Player Object creation
    start(){
        if(GameState === 0){
            //New player object 
            player = new Player();
            //Player Count should be read from the database
            player.getCount();
            //New Form Object
            form = new Form();
            //Display the form
            form.display();
        }
    }
}

/*
.update() - refer directly to the main database inside which gameState is created
*/