class Player{
    constructor(){
        
    }

    
    getCount(){//to read from the database
        var playercount = database.ref("PlayerCount");
        playercount.on("value", function(data){
            PlayerCount = data.val();
        });
    }


    updateCount(count){//write the player count at the database
        database.ref("/").update({PlayerCount: count});
    }


    update(name){//to write the name in the database
        var Index = "Player" + PlayerCount;
        database.ref(Index).set({Name: name});
    }
}