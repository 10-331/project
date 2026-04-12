const talkBox = document.getElementById("talkBox");
const talkName = document.getElementById("talkName");
const talkText = document.getElementById("talkText");
const leftTime = document.getElementById("leftTime");

const bgMorning = document.getElementById("bgMorning");
const bgNoon = document.getElementById("bgNoon");
const bgEvening = document.getElementById("bgEvening");
const bgNight = document.getElementById("bgNight");

/*
  自動再生
  10000 = 10秒
*/
const AUTO_ADVANCE_MS = 10000;
let autoAdvanceTimer = null;

/*
  朝 / 昼 / 夕 / 夜
  - city（外）
  - station（駅）
*/
const SCENES = {
  morning: [
    {
      id: "city",
      background: "./assets/images/bg/bg-morning.png",
      lines: [
        { name: "綾", text: "いい天気〜！今日はどこに出かけようかな〜" },
        { name: "綾", text: "朝の街って、少し静かだね" },
        { name: "綾", text: "まだ人も少なくて歩きやすいかも" }
      ],
      eerieChance: 0.02,
      eerieLines: [
        { name: "綾", text: "……あれ。今、誰かいたような" },
        { name: "綾", text: "朝なのに、変に静かだね" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-morning-station.png",
      lines: [
        { name: "綾", text: "朝の駅はやっぱり忙しそう" },
        { name: "綾", text: "この時間、少しだけ苦手かも" },
        { name: "綾", text: "電車の音、今日は近く感じるね" }
      ],
      eerieChance: 0.02,
      eerieLines: [
        { name: "綾", text: "……今のアナウンス、流れた？" },
        { name: "綾", text: "誰もいないのに、音だけするね" }
      ]
    }
  ],

  noon: [
    {
      id: "city",
      background: "./assets/images/bg/bg-noon.png",
      lines: [
        { name: "綾", text: "お昼の街って、朝よりずっとにぎやかだね" },
        { name: "綾", text: "少し歩くだけでも、なんだか暑いかも" },
        { name: "綾", text: "どこかで休んでいこうかな" }
      ],
      eerieChance: 0.03,
      eerieLines: [
        { name: "綾", text: "……さっきから視線を感じる気がする" },
        { name: "綾", text: "明るいのに、落ち着かないね" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-noon-station.png",
      lines: [
        { name: "綾", text: "昼の駅は少しだけ落ち着いてるね" },
        { name: "綾", text: "この時間なら、まだ人混みもましかも" },
        { name: "綾", text: "ぼんやりしてると、乗り過ごしそう" }
      ],
      eerieChance: 0.03,
      eerieLines: [
        { name: "綾", text: "……今の音、どこからしたの？" },
        { name: "綾", text: "人はいるのに、妙に遠く感じるね" }
      ]
    }
  ],

  evening: [
    {
      id: "city",
      background: "./assets/images/bg/bg-evening.png",
      lines: [
        { name: "綾", text: "夕方って、なんとなく寄り道したくなる" },
        { name: "綾", text: "この時間の街、けっこう好きかも" },
        { name: "綾", text: "少し涼しくなってきたね" }
      ],
      eerieChance: 0.05,
      eerieLines: [
        { name: "綾", text: "さっきから同じ景色ばかり見てる気がする" },
        { name: "綾", text: "この道、前にも通ったっけ" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-evening-station.png",
      lines: [
        { name: "綾", text: "帰る人が多い時間だね" },
        { name: "綾", text: "少しだけ、落ち着かないかも" },
        { name: "綾", text: "夕方の駅って慌ただしいね" }
      ],
      eerieChance: 0.05,
      eerieLines: [
        { name: "綾", text: "……ホーム、こんなに暗かったっけ" },
        { name: "綾", text: "人はいるのに、妙に静かだね" }
      ]
    }
  ],

  night: [
    {
      id: "city",
      background: "./assets/images/bg/bg-night.png",
      lines: [
        { name: "綾", text: "夜は静かだね" },
        { name: "綾", text: "この時間の街、嫌いじゃないよ" },
        { name: "綾", text: "少し歩いてから帰ろうかな" }
      ],
      eerieChance: 0.08,
      eerieLines: [
        { name: "綾", text: "……誰か、見てる？" },
        { name: "綾", text: "さっきから音がしないね" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-night-station.png",
      lines: [
        { name: "綾", text: "この時間の駅、少し怖いね" },
        { name: "綾", text: "人が少ないと音が響くね" },
        { name: "綾", text: "早く帰った方がいいかな" }
      ],
      eerieChance: 0.08,
      eerieLines: [
        { name: "綾", text: "電光掲示板、全部止まってない？" },
        { name: "綾", text: "……さっき、誰か立ってたよね" }
      ]
    }
  ]
};

let currentPeriod = "";
let currentLineIndex = 0;
let currentScene = null;

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getPeriodByHour(hour) {
  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 16) return "noon";
  if (hour >= 16 && hour < 19) return "evening";
  return "night";
}

function getSceneStorageKey(period) {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `home-scene-${period}-${y}-${m}-${d}`;
}

function buildScene(period) {
  const storageKey = getSceneStorageKey(period);
  const saved = localStorage.getItem(storageKey);

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const matched = SCENES[period].find(scene => scene.id === parsed.id);

      if (matched) {
        return {
          period,
          id: matched.id,
          background: matched.background,
          lines:
            parsed.mode === "eerie" && matched.eerieLines?.length
              ? matched.eerieLines
              : matched.lines,
          mode: parsed.mode === "eerie" ? "eerie" : "normal"
        };
      }
    } catch (e) {
      // 壊れていても作り直す
    }
  }

  const baseScene = pickRandom(SCENES[period]);
  const isEerie = Math.random() < baseScene.eerieChance;

  const result = {
    period,
    id: baseScene.id,
    background: baseScene.background,
    lines: isEerie && baseScene.eerieLines?.length
      ? baseScene.eerieLines
      : baseScene.lines,
    mode: isEerie ? "eerie" : "normal"
  };

  localStorage.setItem(
    storageKey,
    JSON.stringify({ id: result.id, mode: result.mode })
  );

  return result;
}

function applyBackground(scene) {
  if (!bgMorning || !bgNoon || !bgEvening || !bgNight) return;

  bgMorning.classList.remove("is-active");
  bgNoon.classList.remove("is-active");
  bgEvening.classList.remove("is-active");
  bgNight.classList.remove("is-active");

  if (scene.period === "morning") {
    bgMorning.src = scene.background;
    bgMorning.classList.add("is-active");
  } else if (scene.period === "noon") {
    bgNoon.src = scene.background;
    bgNoon.classList.add("is-active");
  } else if (scene.period === "evening") {
    bgEvening.src = scene.background;
    bgEvening.classList.add("is-active");
  } else {
    bgNight.src = scene.background;
    bgNight.classList.add("is-active");
  }
}

function renderTime() {
  if (!leftTime) return;

  const now = new Date();
  const y = now.getFullYear();
  const mo = now.getMonth() + 1;
  const d = now.getDate();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  leftTime.innerHTML = `${y}/${mo}/${d}<br>${h}:${m}:${s}`;
}

function renderLine() {
  if (!talkName || !talkText || !currentScene) return;

  const arr = currentScene.lines;
  if (!arr || !arr.length) return;

  const line = arr[currentLineIndex];
  talkName.textContent = line.name;
  talkText.textContent = line.text;
}

function setSceneForPeriod(period) {
  currentScene = buildScene(period);
  currentLineIndex = 0;
  applyBackground(currentScene);
  renderLine();
  restartAutoAdvance();
}

function update() {
  const now = new Date();
  const newPeriod = getPeriodByHour(now.getHours());

  renderTime();

  if (newPeriod !== currentPeriod) {
    currentPeriod = newPeriod;
    setSceneForPeriod(currentPeriod);
  }
}

function nextLine(fromTap = true) {
  if (!currentScene || !currentScene.lines?.length) return;

  currentLineIndex = (currentLineIndex + 1) % currentScene.lines.length;
  renderLine();

  if (fromTap) {
    restartAutoAdvance();
  }
}

function stopAutoAdvance() {
  if (autoAdvanceTimer) {
    clearInterval(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
}

function startAutoAdvance() {
  stopAutoAdvance();

  autoAdvanceTimer = setInterval(() => {
    nextLine(false);
  }, AUTO_ADVANCE_MS);
}

function restartAutoAdvance() {
  stopAutoAdvance();
  startAutoAdvance();
}

if (talkBox) {
  talkBox.addEventListener("click", () => {
    nextLine(true);
  });
}

update();
setInterval(update, 1000);
