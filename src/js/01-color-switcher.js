
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn =  document.querySelector('[data-stop]');

let timerId = null;

// з конспекту, тема "Інтервал" => використання стрілочної фунції

startBtn.addEventListener("click", (showColor) => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    if (setInterval) {
        startBtn.setAttribute("disabled", true)
     }
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    if (clearInterval) {
        startBtn.removeAttribute("disabled")
    }
  (`Interval with id ${timerId} has stopped!`);
  }); 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }