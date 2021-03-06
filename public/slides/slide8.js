index = 8;

slideFuncs[index] = function (container){

    let textN;
    if (lang == 'de') {
        textN = 'Wussten Sie, dass Endnutzer-Computergeräte wie Laptops, Desktop-Computer und Notebooks für 1 % der globalen Treibhausgasemissionen verantwortlich sind?*';
    } else if (lang == 'fr') {
      textN = 'Saviez-vous que les appareils informatiques utilisateurs, tels que les ordinateurs portables, les ordinateurs de bureau et les ultrabooks génèrent 1 % des émissions mondiales de gaz à effet de serre ?*';
    } else {
         textN = 'Did you know that end-user computing devices such as laptops, desktops and notebooks generate 1% of global greenhouse gas emissions?*';
    }
    text3 = new Text(container, -150, -height/2+200, textN, 1, 350, "right");
    vine2 = new Vine(container, 0, 0, 200, -height/2+300, height/2+200, 100, 4);
    flowerB = new Shape(container, 200, height/4, "flower", 0.8);
    shape8 = new Shape(container, -200, height/2-200, "laptop", 1);
    bird7 = new Bird7(container, -200, height/2-300);

    copy8Text = "*Sutton-Parker, J. (2022), ‘Is sufficient carbon footprint information available to make sustainability focused computer procurement strategies meaningful?’. Pre-Print for Science Direct. Berlin, Germany: ResearchGate.";
    copy8 = new Copy(container, -width/2+100, 0, copy8Text, 450, 'left', 'googleSans', '#80868B', 28);

    button8 = new Button(container, 1.6);

    app.ticker.add((delta) => {
        text3.update(delta);
        vine2.update(delta);
	});
}

arriveTriggers[index] = function (){
        text3.animateIn(1000);
        vine2.animateIn(500);
        flowerB.animateIn(1500);
        shape8.animateIn(2000);
        bird7.animateIn(2500);
        button8.animateIn(4000);
        copy8.animateIn(3000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    text3.animateOut();
    vine2.animateOut();
    flowerB.animateOut(0);
    shape8.animateOut(0);
    bird7.animateOut(0);
    button8.animateOut(0);
    copy8.animateOut(0);

    arrive(index+1);
}