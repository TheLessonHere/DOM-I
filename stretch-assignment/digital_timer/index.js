let button = document.querySelector("button");
let startbutton = document.querySelector(".start-button");
let timer = document.querySelector(".digits");
let msTens = document.querySelector("#msTens")
let msHundreds = document.querySelector("#msHundreds")
let secondOnes = document.querySelector("#secondOnes")
let secondTens = document.querySelector("#secondTens")
var runningTimer;

function buttonClicked() {
    if (button.classList.contains('start-button')) {
    button.classList.remove('start-button');
    button.classList.add('stop-button');
    let stopbutton = document.querySelector(".stop-button");
    console.log('stop-button added');
    stopbutton.textContent = "Stop";
    stopbutton.classList.remove('start-button');

    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;

    function upIncrement(){
        msTens.textContent++;

        if (msTens.textContent === "10") {
            msHundreds.textContent++;
            msTens.textContent = 0;
            timer.style.color = "black";

            if (msHundreds.textContent === "10") {
                secondOnes.textContent++;
                msHundreds.textContent = 0;

                if (secondOnes.textContent === "10") {
                    secondTens.textContent++;
                    secondOnes.textContent = 0;

                    if (secondTens.textContent === "1") {
                        timer.style.color = "red";
                        msTens.textContent = 0;
                        msHundreds.textContent = 0;
                        secondOnes.textContent = 0;
                        secondTens.textContent = 0;
                    }
                }
            }
        }
    }
    stopbutton.addEventListener('click', resetTimer);
    }

    runningTimer = setInterval(upIncrement, 10);
    

    function resetTimer() {
        if (button.classList.contains('stop-button')) {
        clearInterval(runningTimer);
        msTens.textContent = '0';
        msHundreds.textContent = '0';
        secondOnes.textContent = '0';
        secondTens.textContent = '0';
        button.classList.remove('stop-button');
        button.classList.add('start-button');
        console.log('start-button added');
        startbutton.textContent = "Start";
        }
    }
}


startbutton.addEventListener('click', buttonClicked);