$(document).ready(function () {
    //global variables
    var wins = 0;
    var losses = 0;
    var draw = 0;
    var message = "";
    //hide win and loss images
    $("#winner").hide();
    $("#loser").hide();
    $("#outcome").hide();

    //event listeners
    $("#rock").click(chooseRocky);
    $("#paper").click(choosePaper);
    $("#scissors").click(chooseScissors);
    $("#lizard").click(chooseLizard);
    $("#spock").click(chooseSpocky);

    //function to randomly generate computer choice
    function getComputerChoice(){
        //get random #1-5
        var computerChoice = Math.floor(Math.random() * 5) + 1;
        //determine what choice is, based on #, & return choice

        switch (computerChoice){
            case 1:
                return "Rock";
            case 2:
                return "Paper";
            case 3:
                return "Scissors";
            case 4:
                return "Lizard";
            case 5:
                return "Spock";
        }
    }

    //function to determine winner of the match
    function chooseRocky(event){
        determineMatchWinner("Rock");
    }
    function choosePaper(event){
        determineMatchWinner("Paper");
    }
    function chooseScissors(event){
        determineMatchWinner("Scissors");
    }
    function chooseLizard(event){
        determineMatchWinner("Lizard");
    }
    function chooseSpocky(event){
        determineMatchWinner("Spock");
    }
    function determineMatchWinner(choice){
        var computerChoice = getComputerChoice();
        if (choice === computerChoice){
            draw++;
            message = "You chose " + choice + ". The computer chose " + computerChoice +
                ". Game is a draw!"
        }
        if (choice === "Rock"){
            if (computerChoice === "Scissors" || computerChoice === "Lizard"){
                wins++;
                message = "You chose " + choice + ". The computer chose " + computerChoice +
                    ". You win this round...Human scum";
            }
            else if (computerChoice === "Spock" || computerChoice === "Paper") {
                losses++;
                message = "You chose " + choice + ". The computer chose " + computerChoice +
                    ". HaHa... I win, human loses.";
            }
        }
        if (choice === "Paper"){
            if (computerChoice === "Spock" || computerChoice === "Rock"){
                wins++;
                message = "You chose " + choice + ". The computer chose " + computerChoice +
                    ". You win this round...Human scum";
            }
            else if (computerChoice === "Scissors" || computerChoice === "Lizard") {
                losses++;
                message = "You chose " + choice + ". The computer chose " + computerChoice +
                    ". HaHa... I win, human loses.";
            }
        }
        if (choice === "Scissors"){
            if (computerChoice === "Lizard" || computerChoice === "Paper"){
                wins++;
                message = "You chose " + choice + ". The computer chose " + computerChoice +
                    ". You win this round...Human scum";
            }
            else if (computerChoice === "Spock" || computerChoice === "Rock") {
                losses++;
                message = "You chose " + choice + " and the computer chose " + computerChoice +
                    ". HaHa... I win, human loses.";
            }
        }
        if (choice === "Lizard"){
            if (computerChoice === "Spock" || computerChoice === "Paper"){
                wins++;
                message = "You chose " + choice + " and the computer chose " + computerChoice +
                    ". You win this round...Human scum";
            }
            else if (computerChoice === "Scissors" || computerChoice === "Rock") {
                losses++;
                message = "You chose " + choice + " and the computer chose " + computerChoice +
                    ". HaHa... I win, human loses.";
            }
        }
        if (choice === "Spock"){
            if (computerChoice === "Rock" || computerChoice === "Scissors"){
                wins++;
                message = "You chose " + choice + " and the computer chose " + computerChoice +
                    ". You win this round...Human scum";
            }
            else if (computerChoice === "Paper" || computerChoice === "Lizard") {
                losses++;
                message = "You chose " + choice + " and the computer chose " + computerChoice +
                    ". HaHa... I win, human loses.";
            }
        }
        $("#outcome").show();
        $("#outcome").text(message)
        $("#playerChoice").text(choice)
        $("#computerChoice").text(computerChoice)
        checkForWinner();
    }

    //function to determine winner of the game
    function checkForWinner(){
        if(wins > 1){
            $("#winner").show();
            $("#rock").hide();
            $("#paper").hide();
            $("#scissors").hide();
            $("#lizard").hide();
            $("#spock").hide();
            $("#rockLabel").hide();
            $("#paperLabel").hide();
            $("#scissorsLabel").hide();
            $("#lizardLabel").hide();
            $("#spockLabel").hide();
            $(".gallery").hide();
        }
        if(losses > 1){
            $("#loser").show();
            $("#rock").hide();
            $("#paper").hide();
            $("#scissors").hide();
            $("#lizard").hide();
            $("#spock").hide();
            $("#rockLabel").hide();
            $("#paperLabel").hide();
            $("#scissorsLabel").hide();
            $("#lizardLabel").hide();
            $("#spockLabel").hide();
            $(".gallery").hide();
        }
    }

});