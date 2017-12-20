var content = {
	question1: {
		question: "What is the name of Han Solo's infamous smuggling ship?",
		answers: ["A) Slave I", "B) The Khetanna", "C) The Millennium Falcon", "D) The Death Star"],
		correct: 2
	},
	question2: {
		question: "What is the name of the bounty hunter that delivers frozen Han Solo to Jabba the Hutt?",
		answers: ["A) Mace Windu", "B) Boba Fett", "C) Yoda", "D) Kylo Ren"],
		correct: 1
	},
	question3: {
		question: "What relation is Darth Vader to Luke Skywalker?",
		answers: ["A) Brother", "B) Husband", "C) Mentor", "D) Father"],
		correct: 3
	},
	question4: {
		question: "What is Ben Kenobi's original name?",
		answers: ["A) Anakin", "B) Obi-Wan", "C) Qui-Gon", "D) Padme"],
		correct: 1
	},
	question5: {
		question: "What type of ship is Luke flying when he destroys the Death Star?",
		answers: ["A) X-Wing", "B) Imperial Star Destroyer", "C) Tie Fighter", "D) T-15"],
		correct: 0
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
		nextQuestion ();
	});
};

	function q1() {
			$(".game").html("<h2>" + content.question1.question + "</h2><br><div id='answers'><p>" + content.question1.answers[0] + "</p><br><p>" + content.question1.answers[1] + "</p><br><p id='right'>" + content.question1.answers[2] + "</p><br><p>" + content.question1.answers[3] + "</p></div><div id='timer'></div>");
			timer();
	};

	function q2() {
			$(".game").html("<h2>" + content.question2.question + "</h2><br><div id='answers'><p>" + content.question2.answers[0] + "</p><br><p id='right'>" + content.question2.answers[1] + "</p><br><p>" + content.question2.answers[2] + "</p><br><p>" + content.question2.answers[3] + "</p></div><div id='timer'></div>");
			timer();
	};

	function q3() {
			$(".game").html("<h2>" + content.question3.question + "</h2><br><div id='answers'><p>" + content.question3.answers[0] + "</p><br><p>" + content.question3.answers[1] + "</p><br><p>" + content.question3.answers[2] + "</p><br><p id='right'>" + content.question3.answers[3] + "</p></div><div id='timer'></div>");
			timer();
	};

	function q4() {
			$(".game").html("<h2>" + content.question4.question + "</h2><br><div id='answers'><p>" + content.question4.answers[0] + "</p><br><p id='right'>" + content.question4.answers[1] + "</p><br><p>" + content.question4.answers[2] + "</p><br><p>" + content.question4.answers[3] + "</p></div><div id='timer'></div>");
			timer();
	};

	function q5() {
			$(".game").html("<h2>" + content.question5.question + "</h2><br><div id='answers'><p id='right'>" + content.question5.answers[0] + "</p><br><p>" + content.question5.answers[1] + "</p><br><p>" + content.question5.answers[2] + "</p><br><p>" + content.question5.answers[3] + "</p></div><div id='timer'></div>");
			timer();
	};

function nextQuestion() {
	q1();
};

function timer() {
	var timeLeft = 15;
    var countDown = setInterval(function(){
    $("#timer").text(timeLeft);
        timeLeft--;
    if (timeLeft === 0) {
    	timesUp();
        clearInterval(countDown);
    	}
    }, 1000);
    $("#timer").show();
};


function timesUp() {
	$(".game").html("<h2>YOUR TIME IS UP!</h2");
	setTimeout(function() {
		nextQuestion();
	}, 4000);

};

startScreen();


