const refs = {
    bodyEl: document.body,
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let setIntId = null;

function start() {
    refs.btnStart.disabled = true;
   setIntId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)] 
}, 1000)  
};

function stop() {
    refs.btnStart.disabled = false;
    clearInterval(setIntId);

}

refs.btnStart.addEventListener('click',start)
refs.btnStop.addEventListener('click',stop)