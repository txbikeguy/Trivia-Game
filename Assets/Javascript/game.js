var content = {
	question1: {
		question: "What is the name of Han Solo's infamous smuggling ship?",
		answers: ["A) Slave I", "B) The Khetanna", "C) The Millennium Falcon", "D) The Death Star"]
	},
	question2: {
		question: "What is the name of the bounty hunter that delivers frozen Han Solo to Jabba the Hutt?",
		answers: ["A) Mace Windu", "B) Boba Fett", "C) Yoda", "D) Kylo Ren"]
	},
	question3: {
		question: "What relation is Darth Vader to Luke Skywalker?",
		answers: ["A) Brother", "B) Husband", "C) Mentor", "D) Father"]
	},
	question4: {
		question: "What is Ben Kenobi's original name?",
		answers: ["A) Anakin", "B) Obi-Wan", "C) Qui-Gon", "D) Padme"]
	},
	question5: {
		question: ""
	},
};

var timeUp = false;

$(function(){
   setTimeout(function(){
     $(".game").show();
   },7500);
});

function startScreen() {
	$(".game").html("<h2>You will have 15 seconds to answer each question</h2><br><h2>Click the Start Button to begin</h2><br><button id='start'>START</button>");
	$("#start").on("click", function() {
		gameStart();
		timer();
	});
};

function gameStart() {
		$(".game").html("<h2>" + content.question1.question + "</h2><br><div id='answers'><p>" + content.question1.answers[0] + "</p><br><p>" + content.question1.answers[1] + "</p><br><p>" + content.question1.answers[2] + "</p><br><p>" + content.question1.answers[3] + "</p></div><div id='timer'></div>");
		timer();
};

function timer() {
	var timeLeft = 16;
    var countDown = setInterval(function(){
    timeLeft--;
    $("#timer").text(timeLeft);
    if (timeLeft <= 0) 
        clearInterval(countDown);
    	}, 1000);

    $("#timer").show();
};


function timesUp() {
	$(".game").html("<h2>YOUR TIME IS UP!</h2");
	setTimeout(function() {
		gameStart();
	}, 4000);
};

startScreen();