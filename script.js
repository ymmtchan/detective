const input = document.getElementById("codeInput");

const button = document.getElementById("enterButton");

const error = document.getElementById("errorMessage");

const bombInput = document.getElementById("bombInput");

const bombButton = document.getElementById("bombButton");

const errorText = document.getElementById("errorText");

let time = 30000;

button.addEventListener("click", function() {

  if (input.value === "阿久津誠") {

    document.querySelector(".container").style.display = "none";
    document.getElementById("hackingScreen").style.display = "flex";
    
 document.querySelector(".hackingText").style.display = "inline-flex";
   

setTimeout(() => {
  
  document.getElementById("okButton").style.display = "block";
  }, 1500);
  
  } else {

    error.style.opacity = "1";
    
    errorText.classList.add("errorFlash");
    
    setTimeout(function() {

  error.style.opacity = "0";

}, 2000);

  }

});

function updateTimer() {

  let minutes = Math.floor(time / 6000);

  let seconds = Math.floor((time % 6000) / 100 );
  
  let milliseconds = time % 100 ;

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  document.getElementById("timer").textContent =
    `${minutes}:${seconds}:${milliseconds}`;
}




document.getElementById("okButton").addEventListener("click", function() {

  document.getElementById("noise").style.opacity = "0.2";

  setTimeout(() => {
    document.getElementById("noise").style.opacity = "0";
    
  // hackingScreenを消す
    document.getElementById("hackingScreen").style.display = "none";

    // bombScreenを表示（憑依）
    document.getElementById("bombScreen").style.display = "flex";
    
  const timerInterval =  setInterval(() => {

  if (time > 0) {

    time--;

    updateTimer();
    
    } else {
      
      clearInterval(timerInterval);

    document.getElementById("bombScreen").style.display = "none";

    document.getElementById("gameOverScreen").style.display = "flex";
      
      document.getElementById("gameOverScreen").classList.add("redFlash");

  }

}, 10);
    
  }, 600);

 } ) ;

bombButton.addEventListener("click", function() {

  if (bombInput.value === "POLICE") {

    document.getElementById("bombScreen").style.display = "none";

document.getElementById("successScreen").style.display = "flex";

  } else {

    errorText.style.opacity = "1";

    errorText.classList.add("errorFlash");
    
    setTimeout(function() {

  errorText.style.opacity = "0";

}, 2000);

  }

});