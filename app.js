let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx =  Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw . Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinnner = (UserWin,userChoice,compChoice)  => {
 if(userWin){
    userscore++;
    userScorePara.innerText = userscore;
    msg.innertext = 'you win ! your ${userchoice} beats ${compchoice}';
    msg.style.backgroundColor = "green";

 }   
 else{
    compscore++;
    compScorePara.innertext = compscore;
    msg.innertext = 'you lost . ${compchoice} beats ${userchoice}';
    msg.style.backgroundColor - "red";

 }
  
};

const playgame = (userchoice) => {
  // generate computer choice
  const compchoice = genCompChoice();

  if (UserChoice === genChoice){
    // draw game
    drawGame();
  }
  else{
    let userwin = true ;
    if(userchoice === "rock"){
        //scissors , paper
        Userwin = compChoice === "paper"?false:true;

    }
    else if
        (userchice === "paper"){
            //rock , scisssors
            userwin = compchoice === "scissors"?false:true;

        }else{
            //rock,paper
            userwin = compchoice ==="rock"?false:true;

        }
           showWinnner(userwin, userchoice,compchoice);

        }
    
  };
  choices.forEach((choice)  => {
    choice.addEventListener("click",()  => {
      const Userchoice = choice.getAttribute("id");
      playGame(userChoice);
    }
    );

  }
  );




