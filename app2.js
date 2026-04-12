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
        { name: "綾", text: "あ、あれ……おかしいな、ここどこ？" },
        { name: "綾", text: "仕事、結構楽しくて好きなんだよね" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { name: "綾", text: "今、なんか…………きのせい、かな" },
        { name: "綾", text: "……お母さん、って。あ、あれ。なんだっけ？" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-morning-station.png",
      lines: [
        { name: "綾", text: "わ～すごい人！　やっぱり都会ってすごいや" },
        { name: "綾", text: "み、みんな歩くの早くない！？" },
        { name: "綾", text: "で、電車ってどうやって乗るの！？" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { name: "綾", text: "……あ、れ？　なんで誰もいないんだろ" },
        { name: "綾", text: "…………これ、本当に乗って大丈夫なやつ？" }
      ]
    }
  ],

  noon: [
    {
      id: "city",
      background: "./assets/images/bg/bg-noon.png",
      lines: [
        { name: "綾", text: "わ～いやっとお昼だ！　ご飯何にしようかな" },
        { name: "綾", text: "やっぱり外の空気って好きだなあ" },
        { name: "綾", text: "珈琲飲みたくなってきたなあ" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { name: "綾", text: "なんか、さっきから同じところ歩いてる？" },
        { name: "綾", text: "変なの、誰かに見られているみたい" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-noon-station.png",
      lines: [
        { name: "綾", text: "駅っていつ来ても混雑してるんだ……！？" },
        { name: "綾", text: "えっ制服！？　が、学生が駅にいるってこと！？" },
        { name: "綾", text: "地上でもわからないのに地下なんてもっと分かんないってば" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { name: "綾", text: "昔もここに来たことあるような気がする。へんなの" },
        { name: "綾", text: "添くんの元カノ、さん？　そ、そうなんですね……？" }
      ]
    }
  ],

  evening: [
    {
      id: "city",
      background: "./assets/images/bg/bg-evening.png",
      lines: [
        { name: "綾", text: "もう1日終わっちゃいそう。あっという間だったなあ" },
        { name: "綾", text: "う、さすがに寒くなってきた" },
        { name: "綾", text: "なんかいいにおいする！　お腹すいたかも" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { name: "綾", text: "……夕方ね、本当は苦手なの。秘密だよ" },
        { name: "綾", text: "帰る場所ってなんなんだろう。……なんてね、冗談だよ" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-evening-station.png",
      lines: [
        { name: "綾", text: "夕方のチャイムって地域差あるんだね" },
        { name: "綾", text: "ほ、本当に人がすごいね……！？" },
        { name: "綾", text: "このままどこか出かけようかなあ" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { name: "綾", text: "……なんか、鈴みたいな音がしたような" },
        { name: "綾", text: "ペットロボ？　あはは、好きそうに見えた？" }
      ]
    }
  ],

  night: [
    {
      id: "city",
      background: "./assets/images/bg/bg-night.png",
      lines: [
        { name: "綾", text: "夜もにぎわってる場所多いね" },
        { name: "綾", text: "へえ……星、こっちはあんまり見えないんだ" },
        { name: "綾", text: "ん、あれ？　家どっちだっけ" }
      ],
      eerieChance: 0.2,
      eerieLines: [
        { name: "綾", text: "……私の居場所って、本当にここなのかな" },
        { name: "綾", text: "たまに変な夢見るんだよね。忘れちゃうんだけど" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-night-station.png",
      lines: [
        { name: "綾", text: "終電？　始発？　……べ、勉強になります！" },
        { name: "綾", text: "な、なんか……治安、あんまり良くなかったりする？" },
        { name: "綾", text: "どうにかして壁を登れないかな。あっちに行きたいのに" }
      ],
      eerieChance: 0.2,
      eerieLines: [
        { name: "綾", text: "……さっきから同じところを歩いているような気がする" },
        { name: "綾", text: "なにか忘れてるような……あっ今日添くんウチ来るんだっけ！？" }
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
