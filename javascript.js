//jsscript.js

//paper

var count = 0;

var results = new Array(count + 1);

//wins

var prwin = ". WIN (Paper beat Rock)";
var spwin = ". WIN (Scissors beat Paper)"
var rswin = ". WIN (Rock beat Scissors)"

//draws

var ppdraw = ". DRAW (Paper drew with Paper)"
var ssdraw = ". DRAW (Scissors drew with Scissors)"
var rrdraw = ". DRAW (Rock drew with Rock)"

//losses

var psloss = ". LOSS (Paper lost to Scissors)"
var rploss = ". LOSS (Rock lost to Paper)"
var srloss = ". LOSS (Scissors lost to rock)"

function paper() {
	var paper = document.getElementById("results").value;

	var opposition;

   	function opposition(){
		opposition = (Math.random()*2)+1;
		return opposition;
	}
	
	
	
	opposition = opposition();
	opposition = Math.round(opposition);
	
	if ( opposition == 3) {
	
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = "Awesome Stuff! Try your luck again";
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/7.png'>" + "<h1 style='float:left;color:white'>Opposition chose Rock!</h1></div>";
		document.getElementById("results").style.backgroundColor = "green";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You win!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + prwin);
		//return 'win';
	}
	else if ( opposition == 1){
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = "Oooh... So close. Try again!";
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/3.png'>" + "<h1 style='float:left;color:black'>Opposition chose Paper!</h1></div>";
		document.getElementById("results").style.backgroundColor = "yellow";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You draw!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + ppdraw);
		//return 'draw';
	}
	
	else {
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = ("Too bad... Better luck next time!" || "You suck!");
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/10.png'>" + "<h1 style='float:left;color:white'>Opposition chose Scissors!</h1></div>";
		document.getElementById("results").style.backgroundColor = "red";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You lose!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + psloss);
		//return 'loss';
	
	}
}

//scissors

function scissors() {
	var scissors = document.getElementById("results").value;

	var opposition;

   	function opposition(){
		opposition = (Math.random()*2)+1; 
		return opposition;
	}
	
	opposition = opposition();
	opposition = Math.round(opposition);
	
	if ( opposition == 3) {
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = ("Too bad... Better luck next time!" || "You suck!");
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/10.png'>" + "<h1 style='float:left;color:white'>Opposition chose Rock!</h1></div>";
		document.getElementById("results").style.backgroundColor = "red";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You lose!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + rploss);
		//return 'loss';
	}
	else if ( opposition == 1){
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = "Awesome Stuff! Try your luck again";
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/7.png'>" + "<h1 style='float:left;color:white'>Opposition chose Paper!</h1></div>";
		document.getElementById("results").style.backgroundColor = "Green";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You win!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + spwin);
		//return 'win';
	}
	
	else {
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = "Oooh... So close. Try again!";
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/3.png'>" + "<h1 style='float:left;color:black'>Opposition chose Scissors!</h1></div>";
		document.getElementById("results").style.backgroundColor = "yellow";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You draw!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + ssdraw);
		//return 'draw';
	}

}

//rock

function rock() {
	var rock = document.getElementById("results").value;

	var opposition;

   	function opposition(){
		opposition = (Math.random()*2)+1; 
		return opposition;
	}
	
	opposition = opposition();
	opposition = Math.round(opposition);
	
	if ( opposition == 3) {
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = "Oooh... So close. Try again!";
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/3.png'>" + "<h1 style='float:left;color:black'>Opposition chose Rock!</h1></div>";
		document.getElementById("results").style.backgroundColor = "Yellow";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You draw!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + rrdraw);
		//return 'draw';
	}
	else if ( opposition == 1){
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = ("Too bad... Better luck next time!" || "You suck!");
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/10.png'>" + "<h1 style='float:left;color:white'>Opposition chose Paper!</h1></div>";
		document.getElementById("results").style.backgroundColor = "Red";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You lose!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + rploss);
		//return 'loss';
	}
	
	else {
		document.getElementById("score").innerHTML = "";
		document.getElementById("score").className = "";
		document.getElementById("promptbox").innerHTML = "Awesome Stuff! Try your luck again";
		document.getElementById("results").innerHTML = "<div style='height:120px'><img style='margin:15px;width:50px;height:50px;float:left' src='http://cdn1.iconfinder.com/data/icons/lin/128/7.png'>" + "<h1 style='float:left;color:white'>Opposition chose Scissors!</h1></div>";
		document.getElementById("results").style.backgroundColor = "Green";
		document.getElementById("results").style.border = "3px solid white";
		document.getElementById("results").style.margin = "10px 0px 10px 0px";
		document.getElementById("results").style.borderRadius = "15px";
		document.getElementById("winner").innerHTML = "<br/>You win!<br/>" + '<br/><button onclick="score()">View Score</button>' + '<br/><button onclick="winscore()">Wins</button>';
		results.push(results.length + rswin);
		//return 'win';
	}

}


function score() {

	if (results.join()===""){
	alert("You need to play a game before you can see the score!");
	}
	else {
	document.getElementById("score").innerHTML = '<h1>Results</h1><hr>' + results.join('<br/>');
	document.getElementById("score").className = "showscore"; 	
	}
}

function winscore() {

	var wins = "";

	for (var i = 1; i < results.length; ++i){
		
		if (results[i].substr(3, 1) == 'W'){
				
			wins += "<br />";
			wins += i;
			
		document.getElementById("score").innerHTML = '<h1>Results</h1><hr>' + wins;
		document.getElementById("score").className = "showscore"; 
		}
		
		else if (results[i].substr(3, 1) == "D" || "L") {
		alert('no wins!');
		}
	
	}
			
	
	
	

}
