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
    { name: "綾", text: "いい天気〜！\n今日はどこに出かけようかな〜" },
    { name: "綾", text: "朝の空気、ちょっと気持ちいいね" },
    { name: "綾", text: "まだ眠いけど、どこか行きたい気分" }
  ],
  evening: [
    { name: "綾", text: "少し涼しくなってきたね" },
    { name: "綾", text: "夕方って、なんとなく寄り道したくなる" },
    { name: "綾", text: "この時間の景色、けっこう好きかも" }
  ],
  night: [
    { name: "綾", text: "夜は静かで落ち着くね" },
    { name: "綾", text: "そろそろ帰る？ まだ少し歩く？" },
    { name: "綾", text: "こういう時間って、考えごとしちゃうなあ" }
  ]
};

let currentPeriod = "";
let currentLineIndex = 0;

function getPeriodByHour(hour) {
  if (hour >= 5 && hour < 16) return "morning";
  if (hour >= 16 && hour < 19) return "evening";
  return "night";
}

function setActiveBackground(period) {
  bgMorning.classList.remove("is-active");
  bgEvening.classList.remove("is-active");
  bgNight.classList.remove("is-active");

  if (period === "morning") bgMorning.classList.add("is-active");
  if (period === "evening") bgEvening.classList.add("is-active");
  if (period === "night") bgNight.classList.add("is-active");
}

function renderTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  leftTime.textContent = `${h}:${m}`;
}

function renderLine() {
  const periodLines = lines[currentPeriod];
  const line = periodLines[currentLineIndex];

  talkName.textContent = line.name;
  talkText.textContent = line.text;
}

function updateByTime() {
  const now = new Date();
  const newPeriod = getPeriodByHour(now.getHours());

  renderTime();

  if (newPeriod !== currentPeriod) {
    currentPeriod = newPeriod;
    currentLineIndex = 0;
    setActiveBackground(currentPeriod);
    renderLine();
  }
}

function nextLine() {
  const periodLines = lines[currentPeriod];
  currentLineIndex = (currentLineIndex + 1) % periodLines.length;
  renderLine();
}

talkBox.addEventListener("click", nextLine);

menuButton.addEventListener("click", () => {
  const isHidden = menuOverlay.hasAttribute("hidden");

  if (isHidden) {
    menuOverlay.removeAttribute("hidden");
  } else {
    menuOverlay.setAttribute("hidden", "");
  }
});

menuOverlay.addEventListener("click", (event) => {
  if (event.target === menuOverlay) {
    menuOverlay.setAttribute("hidden", "");
  }
});

updateByTime();
setInterval(updateByTime, 30 * 1000);