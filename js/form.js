class Form {
    constructor(){}


    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("name");
        
        var button = createButton("play");
        input.position(130,160);
        button.position(250,100);

        var greeting = createElement("h2");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();

            PlayerCount = PlayerCount + 1;
            //Updating the name into the database
            player.update(name);
            //Updating the player count into the database
            player.updateCount(PlayerCount);
            
            greeting.html("HELLO " + name);
            greeting.position(130,160);
        });
    }
}
//Hello Agastya
/*
HTML

- Head - Libraries, styling
- Body - Main content to be displayed

BODY
Elements:
1. h1, h2, h3: headings of different sizes
2. Input - from users
3. Button - Play Button

DOCUMENT OBJECT MODEL - p5 Dom Library

Title - "Car Racing Game"
1. Create a heading element
2. Change html content
3. Position of the element
*/