index = 11;

slideFuncs[index] = function (container){

    let text;
    if (lang == 'de') {
         text = 'Finden wir es heraus';
    } else if (lang == 'fr') {
         text = 'Découvrons comment';
    } else {
         text = "Let's find out how";
    }

    text1 = new Text(container, 0, -100, text, 1, 300, "right");
    vine1 = new Vine(container, 0, 0, 300, 0, 450, 100, 4);
    shape11one = new Shape(container, -150, height/4, "puzzle1", 1);
    shape11two = new Shape(container, 50, height/3, "puzzle2", 1);

    button11 = new Button(container, 1.6);

    app.ticker.add((delta) => {
        text1.update(delta);
        vine1.update(delta);
	});
}

arriveTriggers[index] = function (){
        text1.animateIn(2000);
        vine1.animateIn(2000);
        shape11one.animateIn(1500);
        shape11two.animateIn(2000);

        button11.animateIn(3000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    text1.animateOut();
    vine1.animateOut();
    shape11one.animateOut(0);
    shape11two.animateOut(0);
    button11.animateOut(0);
    
    arrive(index+1);
}