class Form{

    constructor(){

    }

    display(){

        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(490, 100);

        var input = createInput('please enter your name');
        input.position(520, 160);

        var button = createButton('PLAY');
        button.position(580,500);

        var greeting = createElement('h2');
        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();
            playerCount+=1;
            player.updateName(name);
            player.updateCount(playerCount);
            
            greeting.html("HELLO "+name);
            greeting.position(130, 160);

        })
        

    }

}