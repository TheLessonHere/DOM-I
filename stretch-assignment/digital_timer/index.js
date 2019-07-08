let stopbutton = document.querySelector(".stop-button");
let startbutton = document.querySelector(".start-button");
let timer = document.querySelector(".digits");
let msTens = document.querySelector("#msTens")
let msHundreds = document.querySelector("#msHundreds")
let secondOnes = document.querySelector("#secondOnes")
let secondTens = document.querySelector("#secondTens")
var runningTimer;

function buttonClicked() {

    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;

    function upIncrement(){
        msTens.textContent++;

        if (msTens.textContent === "10") {
            msHundreds.textContent++;
            msTens.textContent = 0;
            timer.classList.remove("redDigit");

            if (msHundreds.textContent === "10") {
                secondOnes.textContent++;
                msHundreds.textContent = 0;

                if (secondOnes.textContent === "10") {
                    secondTens.textContent++;
                    secondOnes.textContent = 0;

                    if (secondTens.textContent === "1") {
                        timer.classList.add("redDigit");
                        msHundreds.textContent = 0;
                        secondOnes.textContent = 0;
                        secondTens.textContent = 0;
                    }
                }
            }
        }
    }
    runningTimer = setInterval(upIncrement, 10);
    startbutton.style.display = "none";
    stopbutton.style.display = "flex";
}
    

function resetTimer() {
    clearInterval(runningTimer);
    stopbutton.style.display = "none";
    startbutton.style.display = "flex";    
}


startbutton.addEventListener('click', buttonClicked);
stopbutton.addEventListener('click', resetTimer);