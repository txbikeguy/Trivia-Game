$(function(){
    setTimeout(function(){
      $(".game").show();
    },7500);
 });

$(".game").html("<h2>You will have 15 seconds to answer each question</h2><br><h2>Click the Start Button to begin</h2><br><button id='start'>START</button>");
 	$("#start").on("click", function() {
 		game.loadQuestion();
 	});

$(document).on("click", ".answer-button", function(e) {
	game.clicked(e);
});

$(document).on("click", "#reset", function () {
	game.reset();
}); 	

var content = [{
		question: "What is the name of Han Solo's infamous smuggling ship?",
		answers: ["A) Slave I", "B) The Khetanna", "C) The Millennium Falcon", "D) The Death Star"],
		correct: "C) The Millennium Falcon"
	},{
		question: "Who is the bounty hunter that delivers frozen Han Solo to Jabba the Hutt?",
		answers: ["A) Mace Windu", "B) Boba Fett", "C) Yoda", "D) Kylo Ren"],
		correct: "B) Boba Fett"
	},{
		question: "What relation is Darth Vader to Luke Skywalker?",
		answers: ["A) Brother", "B) Husband", "C) Mentor", "D) Father"],
		correct: "D) Father"
	},{
		question: "What is Ben Kenobi's original name?",
		answers: ["A) Anakin", "B) Obi-Wan", "C) Qui-Gon", "D) Padme"],
		correct: "B) Obi-Wan"
	},{
		question: "What type of ship is Luke flying when he destroys the Death Star?",
		answers: ["A) X-Wing", "B) Imperial Star Destroyer", "C) Tie Fighter", "D) T-15"],
		correct: "A) X-Wing"
	},{
		question: "What type of creatures help the Rebels on Planet Endor?",
		answers: ["A) Wookies", "B) Ewoks", "C) Gungans", "D) Mon Calamaris"],
		correct: "B) Ewoks"
	},{
		question: "What facility is Lando Calrissian the administrator of?",
		answers: ["A) Bespin", "B) The Death Star", "C) Jawa Sandcrawler", "D) Coruscant"],
		correct: "A) Bespin"
	},{
		question: "Name the ice planet where the Rebel Base is located in Ep. V",
		answers: ["A) Jakku", "B) Alderaan", "C) Tatooine", "D) Hoth"],
		correct: "D) Hoth"
	},{
		question: "Who did Luke Skywalker live with growing up?",
		answers: ["A) His parents", "B) Wookies", "C) Yoda", "D) His Aunt and Uncle"],
		correct: "D) His Aunt and Uncle"
	},{
		question: "Who ultimately kills the Emperor?",
		answers: ["A) Luke Skywalker", "B) Han Solo", "C) Leia Organa", "D) Anakin Skywalker"],
		correct: "D) Anakin Skywalker"
	}
];

var game = {
	questions: content,
	currentQuestion: 0,
	timer: 15,
	correct: 0,
	incorrect: 0,
	unAnswered: 0,
	countDown: function(){
		game.timer--;
		$("#timer").html(game.timer);
		if(game.timer <= 0) {
			console.log("TIME'S UP");
			game.timesUp();
		}
	},
	loadQuestion: function() {
		timer = setInterval(game.countDown, 1000);
		$("#timer").show();
		$(".game").html('<h2>' + content[game.currentQuestion].question + '</h2');
		for (var i=0; i<content[game.currentQuestion].answers.length; i++) {
			$(".game").append("<button class ='answer-button' id='button-" + i + "' data-name='" + content[game.currentQuestion].answers[i] + "'>" + 
				content[game.currentQuestion].answers[i] + "</button><br><br>");
		}
	},
	nextQuestion() {
		game.timer = 15;
		$("#timer").html(game.timer);
		game.currentQuestion++;
		game.loadQuestion();
	},
	timesUp: function() {
		clearInterval(timer);
		$("#timer").hide();
		game.unAnswered++;
		$(".game").html("<h2>YOU RAN OUT OF TIME!</h2>");
		$(".game").append("<img src='Assets/Images/" + game.currentQuestion + ".gif'>");
		$(".game").append("<h3>The Correct Answer Was: " + content[game.currentQuestion].correct + "</h3>");
		if (game.currentQuestion == content.length-1) {
			setTimeout(game.results, 5000);
		}
		else {
			setTimeout(game.nextQuestion, 5000);
		}
	},
	results: function() {
		clearInterval(timer);
		if (game.correct === 10) {
			$(".game").html("<h2>YOU ARE A JEDI MASTER!</h2");
		}
		else if (game.correct > 5) {
			$(".game").html("<h2>THE FORCE IS STRONG WITH YOU!</h2>");
		}
		else {
			$(".game").html("<h2>YOU HAVE MUCH TO LEARN...</h2>");
		};
		$("#timer").hide();
		$(".game").append("<h2>Correct Answers: " + game.correct + "</h2>");
		$(".game").append("<h2>Incorrect Answers: " + game.incorrect + "</h2>");
		$(".game").append("<h2>Unanswered Questions: " + game.unAnswered + "</h2>");
		$(".game").append("<button id='reset'>TRY AGAIN?</button>");
	},
	clicked: function(e) {
		clearInterval(timer);
		if($(e.target).data("name") === content[game.currentQuestion].correct) {
			game.answeredCorrectly();
		}
		else {
			game.answeredIncorrectly();
		}
	},
	answeredCorrectly: function() {
		clearInterval(timer);
		$("#timer").hide();
		game.correct++;
		$(".game").html("<h2>THAT'S CORRECT!</h2>");
		$(".game").append("<img src='Assets/Images/" + game.currentQuestion + ".gif'>");
		if (game.currentQuestion == content.length-1) {
			setTimeout(game.results, 5000);
		}
		else {
			setTimeout(game.nextQuestion, 5000);
		}
	},
	answeredIncorrectly: function() {
		clearInterval(timer);
		$("#timer").hide();
		game.incorrect++;
		$(".game").html("<h2>SORRY, WRONG ANSWER!</h2>");
		$(".game").append("<img src='Assets/Images/" + game.currentQuestion + ".gif'>");
		$(".game").append("<h3>The Correct Answer Was: " + content[game.currentQuestion].correct + "</h3>");
		if (game.currentQuestion == content.length-1) {
			setTimeout(game.results, 5000);
		}
		else {
			setTimeout(game.nextQuestion, 5000);
		}
	},
	reset: function() {
	game.currentQuestion = 0;
	game.timer = 15;
	game.correct = 0;
	game.incorrect = 0;
	game.unAnswered = 0;
	game.loadQuestion();
	$("#timer").show();
	},
};
