$(document).ready(function(){
  $("#start-button").click(function(){
 
//set variable to timer 45 secs...//
  	var number = 45;
  	alert("Majora's mask !!");
    
    $("#start-button").on("click", start);  // startsthe games 
    $("#submit").on("click", finish);  // submits answers and finishes the game
    $("#restart").on("click", restart);  // restarts the games 
// ----------------------------------------------------------------
// functions
    function start(){
    	counter = setInterval(timer, 1000);
    	show(".question");
    	show(".answers");
    	show("#submit");
	    hide("#start-button");
	    hide(".rules");
	    hide("#restart");
	    hide("#results");
    }
    function timer(){
      number-- // decrements the timer by 1
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); // calls the stop function
      }
    }
    function stop(){
    	clearInterval(counter); // stops the timer
    	$("#results").show();
    	$("#restart").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
    	clearInterval(counter); // stops the timer
    	timer();
    }

    function restart(){
    	number = 20;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

// ----------------------------------------------------------------
//calling functions
  	start(); // calls the start function
  });
});