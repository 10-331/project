const talkBox = document.getElementById("talkBox");
const talkName = document.getElementById("talkName");
const talkText = document.getElementById("talkText");
const leftTime = document.getElementById("leftTime");
const mainBg = document.getElementById("mainBg");
const characterLayer = document.getElementById("characterLayer");
const primaryCharacterSlot = document.getElementById("primaryCharacterSlot");
const secondaryCharacterSlot = document.getElementById("secondaryCharacterSlot");

/*
  キャラクター描画
  - static: 軽量版の立ち絵
  - live2d: 将来の本実装用。現時点では描画フックのみ
*/
const CHARACTER_RENDER_MODE = "static";
const TWO_CHARACTER_MIN_WIDTH = 700;

const CHARACTERS = {
  aya: {
    name: "綾",
    visuals: {
      default: "./assets/images/chars/aya-home.png",
      visual2: "./assets/images/chars/aya-visual-2.png",
      visual3: "./assets/images/chars/aya-visual-3.png",
      corrupt: "./assets/images/chars/aya-home-corrupt.png"
    },
    live2d: {
      model: null
    }
  },
  fill2: {
    name: "二人目",
    visuals: {
      default: "./assets/images/chars/fill2.png"
    },
    live2d: {
      model: null
    }
  }
};

/*
  画面上のスロット状態。
  characterId / visual を差し替えるだけで人物・立ち絵を変更できる。
*/
const characterSlots = {
  primary: {
    characterId: "aya",
    visual: "default"
  },
  secondary: {
    characterId: "fill2",
    visual: "default"
  }
};

let sceneVisualMode = "characters";
let layoutSyncRaf = null;

function getCharacter(characterId) {
  return CHARACTERS[characterId] || null;
}

function renderStaticCharacter(slotElement, slotState) {
  const character = getCharacter(slotState.characterId);
  if (!slotElement || !character) return;

  const src =
    character.visuals[slotState.visual] ||
    character.visuals.default;

  slotElement.replaceChildren();

  const img = document.createElement("img");
  img.src = src;
  img.alt = character.name;
  img.dataset.characterId = slotState.characterId;
  img.dataset.visual = slotState.visual;
  slotElement.appendChild(img);
}

function renderLive2DCharacter(slotElement, slotState) {
  const character = getCharacter(slotState.characterId);
  if (!slotElement || !character) return;

  slotElement.replaceChildren();

  const host = document.createElement("div");
  host.className = "live2d-host";
  host.dataset.characterId = slotState.characterId;
  host.dataset.visual = slotState.visual;
  host.dataset.model = character.live2d?.model || "";

  /*
    Live2D導入時はここで host を canvas / model に接続する。
    model未設定時は静止画へフォールバックする。
  */
  if (!character.live2d?.model) {
    renderStaticCharacter(slotElement, slotState);
    return;
  }

  slotElement.appendChild(host);
}

function renderCharacterSlot(slotName) {
  const slotElement =
    slotName === "primary"
      ? primaryCharacterSlot
      : secondaryCharacterSlot;

  const slotState = characterSlots[slotName];
  if (!slotElement || !slotState) return;

  if (CHARACTER_RENDER_MODE === "live2d") {
    renderLive2DCharacter(slotElement, slotState);
  } else {
    renderStaticCharacter(slotElement, slotState);
  }
}

function renderCharacters() {
  if (sceneVisualMode !== "characters") return;
  renderCharacterSlot("primary");
  renderCharacterSlot("secondary");
}

function setCharacterSlot(slotName, characterId, visual = "default") {
  if (!characterSlots[slotName] || !getCharacter(characterId)) return;

  characterSlots[slotName] = {
    characterId,
    visual
  };

  renderCharacterSlot(slotName);
}

function setCharacterVisual(slotName, visual = "default") {
  const slot = characterSlots[slotName];
  const character = slot ? getCharacter(slot.characterId) : null;
  if (!slot || !character?.visuals[visual]) return;

  slot.visual = visual;
  renderCharacterSlot(slotName);
}

function swapCharacterSlots() {
  const nextPrimary = { ...characterSlots.secondary };
  const nextSecondary = { ...characterSlots.primary };

  characterSlots.primary = nextPrimary;
  characterSlots.secondary = nextSecondary;
  renderCharacters();
}

function shouldUseTwoCharacterLayout() {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  return isLandscape && window.innerWidth >= TWO_CHARACTER_MIN_WIDTH;
}

function syncCharacterLayout() {
  if (!characterLayer || !secondaryCharacterSlot) return;

  const useTwoCharacter =
    sceneVisualMode === "characters" &&
    shouldUseTwoCharacterLayout();

  characterLayer.classList.toggle("character-count-2", useTwoCharacter);
  characterLayer.classList.toggle("character-count-1", !useTwoCharacter);
  secondaryCharacterSlot.hidden = !useTwoCharacter;
}

function requestCharacterLayoutSync() {
  if (layoutSyncRaf) cancelAnimationFrame(layoutSyncRaf);

  layoutSyncRaf = requestAnimationFrame(() => {
    syncCharacterLayout();
    layoutSyncRaf = null;
  });
}

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
        { speaker: "aya", text: "いい天気〜！今日はどこに出かけようかな〜" },
        { speaker: "aya", text: "あ、あれ……おかしいな、ここどこ？" },
        { speaker: "aya", text: "仕事、結構楽しくて好きなんだよね" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { speaker: "aya", text: "今、なんか…………きのせい、かな" },
        { speaker: "aya", text: "……お母さん、って。あ、あれ。なんだっけ？" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-morning-station.png",
      lines: [
        { speaker: "aya", text: "わ～すごい人！　やっぱり都会ってすごいや" },
        { speaker: "aya", text: "み、みんな歩くの早くない！？" },
        { speaker: "aya", text: "で、電車ってどうやって乗るの！？" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { speaker: "aya", text: "……あ、れ？　なんで誰もいないんだろ" },
        { speaker: "aya", text: "…………これ、本当に乗って大丈夫なやつ？" }
      ]
    }
  ],

  noon: [
    {
      id: "city",
      background: "./assets/images/bg/bg-noon.png",
      lines: [
        { speaker: "aya", text: "わ～いやっとお昼だ！　ご飯何にしようかな" },
        { speaker: "aya", text: "やっぱり外の空気って好きだなあ" },
        { speaker: "aya", text: "珈琲飲みたくなってきたなあ" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { speaker: "aya", text: "なんか、さっきから同じところ歩いてる？" },
        { speaker: "aya", text: "変なの、誰かに見られているみたい" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-noon-station.png",
      lines: [
        { speaker: "aya", text: "駅っていつ来ても混雑してるんだ……！？" },
        { speaker: "aya", text: "えっ制服！？　が、学生が駅にいるってこと！？" },
        { speaker: "aya", text: "地上でもわからないのに地下なんてもっと分かんないってば" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { speaker: "aya", text: "昔もここに来たことあるような気がする。へんなの" },
        { speaker: "aya", text: "添くんの元カノ、さん？　そ、そうなんですね……？" }
      ]
    }
  ],

  evening: [
    {
      id: "city",
      background: "./assets/images/bg/bg-evening.png",
      lines: [
        { speaker: "aya", text: "もう1日終わっちゃいそう。あっという間だったなあ" },
        { speaker: "aya", text: "う、さすがに寒くなってきた" },
        { speaker: "aya", text: "なんかいいにおいする！　お腹すいたかも" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { speaker: "aya", text: "……夕方ね、本当は苦手なの。秘密だよ" },
        { speaker: "aya", text: "帰る場所ってなんなんだろう。……なんてね、冗談だよ" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-evening-station.png",
      lines: [
        { speaker: "aya", text: "夕方のチャイムって地域差あるんだね" },
        { speaker: "aya", text: "ほ、本当に人がすごいね……！？" },
        { speaker: "aya", text: "このままどこか出かけようかなあ" }
      ],
      eerieChance: 0.1,
      eerieLines: [
        { speaker: "aya", text: "……なんか、鈴みたいな音がしたような" },
        { speaker: "aya", text: "ペットロボ？　あはは、好きそうに見えた？" }
      ]
    }
  ],

  night: [
    {
      id: "city",
      background: "./assets/images/bg/bg-night.png",
      lines: [
        { speaker: "aya", text: "夜もにぎわってる場所多いね" },
        { speaker: "aya", text: "へえ……星、こっちはあんまり見えないんだ" },
        { speaker: "aya", text: "ん、あれ？　家どっちだっけ" }
      ],
      eerieChance: 0.2,
      eerieLines: [
        { speaker: "aya", text: "……私の居場所って、本当にここなのかな" },
        { speaker: "aya", text: "たまに変な夢見るんだよね。忘れちゃうんだけど" }
      ]
    },
    {
      id: "station",
      background: "./assets/images/bg/bg-night-station.png",
      lines: [
        { speaker: "aya", text: "終電？　始発？　……べ、勉強になります！" },
        { speaker: "aya", text: "な、なんか……治安、あんまり良くなかったりする？" },
        { speaker: "aya", text: "どうにかして壁を登れないかな。あっちに行きたいのに" }
      ],
      eerieChance: 0.2,
      eerieLines: [
        { speaker: "aya", text: "……さっきから同じところを歩いているような気がする" },
        { speaker: "aya", text: "なにか忘れてるような……あっ今日添くんウチ来るんだっけ！？" }
      ]
    }
  ]
};

let currentPeriod = "";
let currentLineIndex = 0;
let currentScene = null;
let currentBgSrc = "";
let pendingBgToken = 0;

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

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`画像を読み込めませんでした: ${src}`));
    img.src = src;
  });
}

/*
  背景適用
  - 読み込み完了後に差し替える
  - 連続切り替え時は最後の要求だけ反映
*/
async function applyBackground(scene) {
  if (!mainBg || !scene?.background) return;

  const nextSrc = scene.background;
  if (currentBgSrc === nextSrc) return;

  const token = ++pendingBgToken;

  try {
    await preloadImage(nextSrc);

    if (token !== pendingBgToken) return;

    mainBg.classList.remove("is-ready");
    mainBg.src = nextSrc;
    currentBgSrc = nextSrc;

    requestAnimationFrame(() => {
      if (token !== pendingBgToken) return;
      mainBg.classList.add("is-ready");
    });
  } catch (error) {
    console.error(error);
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
  const speaker = getCharacter(line.speaker);

  talkName.textContent =
    speaker?.name ||
    line.name ||
    "";

  talkText.textContent = line.text;

  /*
    将来:
    - line.visual があれば話者の立ち絵差分へ切替
    - line.slot があれば話者側を primary / secondary に指定
    - Live2D時は表情・モーション命令へ変換
  */
  if (line.visual && line.slot && characterSlots[line.slot]) {
    setCharacterVisual(line.slot, line.visual);
  }
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

if (mainBg) {
  mainBg.addEventListener("load", () => {
    mainBg.classList.add("is-ready");
  });
}

renderCharacters();
syncCharacterLayout();
update();

window.addEventListener("resize", requestCharacterLayoutSync);
window.addEventListener("orientationchange", requestCharacterLayoutSync);

setInterval(update, 1000);
