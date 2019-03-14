
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

    
}

