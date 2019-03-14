var questions = [
    {
      question: "When was the original Mad Max movie released in Australlia?",
      answers: ["March 1, 1979", "Febuary 13, 1978", "April 12, 1979", "December 24, 2001"],
      correctAnswer: "April 12, 1979"
    },
    {
      question: "The actor who played Immortal Joe also played another character in the first movie.  Who was it?",
      answers: ["Facesplitter", "Toecutter", "Bonemelter", "Legsmasher"],
      correctAnswer: "Toecutter"
    },
    {
      question: "What is the title that the antagonist 'joe' have?",
      answers: ["Imperishable", "Immortal", "Irresistable", "The Annialator"],
      correctAnswer: "Immortal"
    },
];

var timer

var game={
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
          console.log("TIME UP");
          game.done();
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);
    
        $("#sub-wrapper").prepend(
          "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );
    
        $("#start").remove();
    
        for (var i = 0; i < questions.length; i++) {
          card.append("<h2>" + questions[i].question + "</h2>");
          for (var j = 0; j < questions[i].answers.length; j++) {
            card.append("<input type='radio' name='question-" + i +
              "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
          }
        }
    
        card.append("<button id='done'>Done</button>");
    },

    done: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).val() === questions[i].correctAnswer) {
            game.correct++;
          } else {
            game.incorrect++;
          }
        }
        this.result();
    },

    result: function() {
        clearInterval(timer);
    
        $("#sub-wrapper h2").remove();
    
        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
}


$(document).on("click", "#start", function() {
    game.start();
  });
  
  $(document).on("click", "#done", function() {
    game.done();
  });
