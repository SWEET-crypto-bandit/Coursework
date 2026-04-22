function continueGame() {
  if (typeof loadPlayerFromSave === 'function') {
    loadPlayerFromSave();
  }

  const startBtn = document.querySelector('.startGame');
  if (startBtn) startBtn.remove();

  const continueBtn = document.getElementById('continueGameBtn');
  if (continueBtn) continueBtn.remove();

  upInterface();
  hospital();
}

try {
  const continueBtn = document.getElementById('continueGameBtn');
  if (
    continueBtn &&
    typeof hasPlayerSave === 'function' &&
    hasPlayerSave() === true
  ) {
    continueBtn.style.display = '';
  }
} catch (e) {
  console.error('continue button init: failed', e);
}

function onVideoEnd() {
  if (typeof loadPlayerFromSave === 'function') {
    loadPlayerFromSave();
  }
  video.src = 'music/гтазаставка.mp4';
  playMisuc16();
  video.muted = false;
  video.loop = false;

  window.addEventListener(
    'keydown',
    function (event) {
      if (event.code === 'Space') {
        event.preventDefault();
        deleeteMusic2();
        historyy();
        flagStartVideo++;
      }
    },
    { once: true }
  );
}
async function historyy() {
  await videoTimerRevers('История');
  titl();
}
function titl() {
  playMisuc1();
  const divContainer = document.createElement('div');
  divContainer.style.position = 'fixed';
  divContainer.style.top = '0';
  divContainer.style.left = '0';
  divContainer.style.width = '100%';
  divContainer.style.height = '100%';
  divContainer.style.zIndex = '99';

  const imgContainer = document.createElement('img');
  imgContainer.src = 'music/Scrapland_cracks.webp';
  imgContainer.style.width = '100%';
  imgContainer.style.height = '100%';
  imgContainer.style.objectFit = 'cover';
  divContainer.appendChild(imgContainer);

  const menu = document.createElement('div');
  menu.style.position = 'absolute';
  menu.style.top = '50%';
  menu.style.left = '50%';
  menu.style.transform = 'translate(-50%, -50%)';
  menu.style.background = 'rgba(0, 0, 0, 0.7)';
  menu.style.backdropFilter = 'blur(10px)';
  menu.style.padding = '40px';
  menu.style.borderRadius = '20px';
  menu.style.border = '2px solid rgba(255, 255, 255, 0.3)';
  menu.style.color = 'white';
  menu.style.textAlign = 'center';
  menu.style.zIndex = '100';

  const title = document.createElement('h1');
  title.textContent = 'ВЫЖИВШИЙ';
  title.style.marginBottom = '30px';
  title.style.fontFamily = 'Arial';
  title.style.textShadow = '0 0 10px rgba(255,0,0,0.5)';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Введи свое имя';
  nameInput.style.padding = '15px';
  nameInput.style.width = '250px';
  nameInput.style.fontSize = '18px';
  nameInput.style.borderRadius = '10px';
  nameInput.style.border = 'none';
  nameInput.style.background = 'rgba(255, 255, 255, 0.2)';
  nameInput.style.color = 'white';
  nameInput.style.marginBottom = '20px';

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'НАЧАТЬ ВЫЖИВАНИЕ';
  submitBtn.style.padding = '15px 30px';
  submitBtn.style.fontSize = '18px';
  submitBtn.style.background = '#ff5500';
  submitBtn.style.color = 'white';
  submitBtn.style.border = 'none';
  submitBtn.style.borderRadius = '10px';
  submitBtn.style.cursor = 'pointer';
  submitBtn.onclick = function () {
    const playerName = nameInput.value || 'лох без имени';
    Player.name = playerName;
    divContainer.remove();
    startGameplay();
    deleeteMusic1();
  };

  menu.appendChild(title);
  menu.appendChild(nameInput);
  menu.appendChild(document.createElement('br'));
  menu.appendChild(submitBtn);

  divContainer.appendChild(menu);

  document.body.appendChild(divContainer);
}

async function startGameplay() {
  //диалог первый
  upInterface();
  video.style.display = 'block';
  video.src = 'music/бункер.mp4';
  video.muted = false;
  video.loop = true;
  const name = Player.name;
  await creayDialog(
    `${name}: После серии взрывов я сижу тут месяц. Надо бы выйти на поверхность за припасами`
  );
  await creayDialog(
    `${name}: Мне уже плевать если я помру там, мой ЁЖ скорее всего погиб после взрыва`
  );
  video.style.display = 'none';
  document.body.style.backgroundColor = 'black';
  video.muted = true;
  playDoor(d);
}
function d() {
  video.style.display = 'block';
  videoRevers('выход');
  video.muted = false;
  video.loop = false;
  video.addEventListener(
    'ended',
    function () {
      video.style.display = 'none';
      exetBunker();
    },
    { once: true }
  );
}

async function exetBunker() {
  videoRevers('возлебункера');
  video.style.display = 'block';
  video.loop = true;
  await creayDialog(
    'О я вижу в далеке табличку. Как же поступить, проведать свой прошлый дом или же подойти к табличке?'
  );
  await choiceDialog2(
    'куда пойти',
    'Проведать дом',
    'подойти к табличке',
    goHouse,
    table
  );
}
async function table() {
  videoRevers('табличка');
  const name = Player.name;
  await creayDialog(`${name}: ого я спасен, но сначало проверю свой дом`);
  goHouse();
}

async function goHouse() {
  videoRevers('домойИдет');
  video.loop = false;
  video.addEventListener(
    'ended',
    function () {
      stopHouse();
    },
    { once: true }
  );
}

async function stopHouse() {
  videoRevers('домстоит');
  video.loop = true;
  await creayDialog(
    'Мой дом уничтожен. Надо попробовать сыграть на гитаре, вдруг ежик вернется'
  );
  goHedgehog();
}

async function goHedgehog() {
  await videoTimerRevers('вызовежа');
  await videoTimerRevers('выброс');
  videoRevers('заставка');
  await creayDialog(
    'Цель: спасти ежа. Теперь ты идешь один. За каждый бой уровень радиации будет расти — покупай антирадин (уколы), чтобы снижать её. Для восстановления здоровья используй аптечки.'
  );
  await videoTimerRevers('ятебяспас');
  Player.mapy = sudrovich();
}

function skipToCharacterSelect() {
  const video = document.getElementById('video');
  document.querySelector('.startGame').remove();
  // 1. Останавливаем видео

  upInterface();
  // desert()
  //     checkMap()
  //     // 2. Удаляем видео (как будто оно закончилось)

  //    playMisuc5()
  //     // 3. Сразу запускаем то, что идет после видео
  sudrovich();
  //     video.muted = false
  // твоя функция выбора персонажа

  // 4. Кнопка старта уже должна быть удалена, если нет:
  if (document.querySelector('.startGame')) {
    document.querySelector('.startGame').remove();
  }
}
