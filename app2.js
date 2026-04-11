const talkBox = document.getElementById("talkBox");
const talkName = document.getElementById("talkName");
const talkText = document.getElementById("talkText");
const leftTime = document.getElementById("leftTime");

const bgMorning = document.getElementById("bgMorning");
const bgEvening = document.getElementById("bgEvening");
const bgNight = document.getElementById("bgNight");

const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");

const lines = {
  morning: [
    { name: "綾", text: "いい天気〜！今日はどこに出かけようかな〜" },
    { name: "綾", text: "朝の空気、気持ちいいね" }
  ],
  evening: [
    { name: "綾", text: "ちょっと涼しくなってきたね" }
  ],
  night: [
    { name: "綾", text: "夜は静かだね" }
  ]
};

let currentPeriod = "";
let currentLineIndex = 0;

function getPeriodByHour(hour){
  if(hour>=5 && hour<16) return "morning";
  if(hour>=16 && hour<19) return "evening";
  return "night";
}

function setBg(period){
  bgMorning.classList.remove("is-active");
  bgEvening.classList.remove("is-active");
  bgNight.classList.remove("is-active");

  if(period==="morning") bgMorning.classList.add("is-active");
  if(period==="evening") bgEvening.classList.add("is-active");
  if(period==="night") bgNight.classList.add("is-active");
}

function renderTime(){
  const now = new Date();
  leftTime.textContent =
    now.getHours().toString().padStart(2,"0") + ":" +
    now.getMinutes().toString().padStart(2,"0");
}

function renderLine(){
  const l = lines[currentPeriod][currentLineIndex];
  talkName.textContent = l.name;
  talkText.textContent = l.text;
}

function update(){
  const now = new Date();
  const p = getPeriodByHour(now.getHours());

  renderTime();

  if(p!==currentPeriod){
    currentPeriod=p;
    currentLineIndex=0;
    setBg(p);
    renderLine();
  }
}

function next(){
  const arr = lines[currentPeriod];
  currentLineIndex = (currentLineIndex+1)%arr.length;
  renderLine();
}

talkBox.addEventListener("click", next);

menuButton.addEventListener("click", (e)=>{
  e.stopPropagation();
  menuOverlay.classList.toggle("is-open");
});

menuOverlay.addEventListener("click", (e)=>{
  if(e.target===menuOverlay){
    menuOverlay.classList.remove("is-open");
  }
});

update();
setInterval(update,30000);