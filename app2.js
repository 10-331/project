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
    { name: "綾", text: "朝の空気、気持ちいいね" },
    { name: "綾", text: "まだ眠いけど、どこか行きたい気分" }
  ],
  evening: [
    { name: "綾", text: "ちょっと涼しくなってきたね" },
    { name: "綾", text: "夕方って、なんとなく寄り道したくなる" },
    { name: "綾", text: "この時間の景色、けっこう好きかも" }
  ],
  night: [
    { name: "綾", text: "夜は静かだね" },
    { name: "綾", text: "そろそろ帰る？ まだ少し歩く？" },
    { name: "綾", text: "こういう時間って、考えごとしちゃうなあ" }
  ]
};

let currentPeriod = "";
let currentLineIndex = 0;

function getPeriodByHour(hour){
  if (hour >= 5 && hour < 16) return "morning";
  if (hour >= 16 && hour < 19) return "evening";
  return "night";
}

function setBg(period){
  bgMorning.classList.remove("is-active");
  bgEvening.classList.remove("is-active");
  bgNight.classList.remove("is-active");

  if (period === "morning") bgMorning.classList.add("is-active");
  if (period === "evening") bgEvening.classList.add("is-active");
  if (period === "night") bgNight.classList.add("is-active");
}

function renderTime(){
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  leftTime.textContent = `${h}:${m}`;
}

function renderLine(){
  const arr = lines[currentPeriod];
  const line = arr[currentLineIndex];
  talkName.textContent = line.name;
  talkText.textContent = line.text;
}

function update(){
  const now = new Date();
  const newPeriod = getPeriodByHour(now.getHours());

  renderTime();

  if (newPeriod !== currentPeriod) {
    currentPeriod = newPeriod;
    currentLineIndex = 0;
    setBg(newPeriod);
    renderLine();
  }
}

function nextLine(){
  const arr = lines[currentPeriod];
  currentLineIndex = (currentLineIndex + 1) % arr.length;
  renderLine();
}

if (talkBox) {
  talkBox.addEventListener("click", nextLine);
}

if (menuButton && menuOverlay) {
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menuOverlay.classList.toggle("is-open");
  });

  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove("is-open");
    }
  });
}

update();
setInterval(update, 30000);