let wins =0, losses =0, ties =0;

document.getElementById("rock").addEventListener("click", () => {
  document.getElementById("choice").textContent="rock";
  game(2);
});

document.getElementById("scissors").addEventListener("click", () => {
  document.getElementById("choice").textContent="scissors";
  game(8);
});

document.getElementById("paper").addEventListener("click", () => {
  document.getElementById("choice").textContent="paper";
  game(4);
});

document.getElementById("reset").addEventListener("click", () => {
  let msg ="?", CPU="?";
  wins =0;
   losses = 0;
    ties = 0;
  document.body.style.backgroundColor = "white"; 
  document.getElementById("choice").textContent="?"; 
  setTimeout(() => {
    document.getElementById("result").textContent=msg;
    document.getElementById("CPUchoice").textContent=CPU;
    document.getElementById("Wins").textContent=wins;
    document.getElementById("Losses").textContent=losses;
    document.getElementById("ties").textContent=ties;},50);

});

let on = true;
document.getElementById("theme").addEventListener("click", () => {

  if (on){
    document.body.style.backgroundColor = "#333333";  
    document.body.style.color = "white";  
  }
  else{
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";  
}
on=!on
});

function randy(min,max){
  min = Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max - min +1))
}

let audio = new Audio("audiofile.mp3");

function game(choice){ 
  document.querySelector(".results").style.display = document.querySelector(".results").style.display ==="none"?"block":"block";

  let rand = 2**(randy(1,3)+1);
  //document.getElementById("test2").textContent= parseInt(rand, 10);
  let CPU; 
  
  switch(rand) {
    case 2: 
    CPU="rock";
    break;

    case 4: 
    CPU="paper";
    break;

    case 8: 
    CPU="scissors";
    break;
  }

  let result = (choice-rand)%2;  
  let msg;
  //document.getElementById("test3").textContent= parseInt((1-rand)%2, 10);

  if(choice==2*rand||rand==4*choice){
    msg ="Victory!";
    wins++;
    document.body.style.backgroundColor = "green"; 
    audio = document.getElementById("victory");
  }
  else if (rand==choice){
    msg ="Draw"
    ties++;
    document.body.style.backgroundColor = "gray";  
    audio = document.getElementById("draw!");
   
  }
    else{
    msg="Defeat";
    losses++;
    document.body.style.backgroundColor = "red"; 
    audio = document.getElementById("defeat");
  }

  audio.play();

  document.getElementById("result").textContent=msg;
  document.getElementById("CPUchoice").textContent=CPU;
  document.getElementById("Wins").textContent=wins;
  document.getElementById("Losses").textContent=losses;
  document.getElementById("ties").textContent=ties;
}
