


//Knapp 1 - Starta nytt spel (GÖM PRETEXT, VISA EFTEXT) RESET
forceGet=true;
document.getElementById('start').addEventListener("click", hide, show, reset);
	
	function hide(){
		document.getElementById('pretext').style.display="none";
	}

	function show(){
		document.getElementById('eftext').style.display="block";

	}

	function reset(){
		location.reload(forceGet);
	}




//Textfält - Gissa nummer

document.getElementById('guess').addEventListener("click", guessing);

var guess=document.getElementById('answer');

 	function guessing(){
    	guess.innerHTML=txt;
    	alert("You guessed"+answer);
 	}



 //Tärningar





 //Knapp 2 - Kasta tärningarna

 document.getElementById('throw').addEventListener("click", throwDices);

	var dices=[];

 	var points;

 	function throwDices(){
 		for(var i=0; i < 4; i++){

 			dices.push(Math.floor((Math.random() * 6) + 1));
		}


 	//Funkion för summan av dices[1,2,3] gånger dices[4] if summan av dices[1,2,3]===guess

		alert(dices);
		 	if (dices[1]+dices[2]+dices[3]===guess) {
    		points=dices[1] + dices[2] + dices[3] * dices[4];
    		alert("Congratulations, the sum of the dices matched the number you chose! " + "This round you got " + points + " points!");
		}
	
			else {
			points=0;
		}

		alert("Unfortunatly the sum of the dices did not match your number this time. Try Again! " + "This round you got " + points + " points!");
 	}

//One game = 10 throws. No more throws until resets/new game. The points = total of all 10 throws. Guess not correct = No points



 
