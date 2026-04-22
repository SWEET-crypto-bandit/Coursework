async function sudrovich() {
  mapVariable = 'sudrovich';
  closeSidorShop();
  if (!(await applyTurnCosts())) return;
  playchigur();
  playsid1();
  playMisuc7();
  await videoTimerRevers('сидрович');
  choiceDialog5(
    'Хабар принес?',
    'Продать',
    'расскажи что происходит сейчас',
    'в разработке',
    'в разработке',
    'выйти в город',
    sellShop,
    dialog1,
    sudrovich,
    sudrovich,
    city
  );
}
async function shop() {
  mapVariable = 'shop';
  if (!(await applyTurnCosts())) return;
  playchigur();
  videoRevers('магаз');
  playMisuc13();
  choiceDialog3(
    'вас там тоже дождями залило?',
    'какими дождями?',
    'я пришел покупать',
    'обратно в город',
    chigur,
    shopBuy,
    city
  );
}
async function hospital() {
  mapVariable = 'hospital';

  playMisuc5();
  playMisuc3();
  playMisuc14();
  hpCheck();
  playchigur();
  videoRevers('больница');
  choiceDialog5(
    'Гос здрав',
    'лечиться за 1р',
    'сохраниться',
    'удалить сохранение',
    'купить расширение хп за 300',
    'выйти в город',
    miniGameNeedles,
    savePlayer,
    deletePlayerSave,
    hpBuy,
    city
  );
}

async function city() {
  mapVariable = 'city';
  if (!(await applyTurnCosts())) return;
  playMisuc14();

  playDarkMisuc1();
  playMisuc13();
  playMisuc7();
  videoRevers('город');
  playchigur();
  choiceDialog5(
    'Город',
    'выйти в пустошь',
    'сидрович',
    'заправка',
    'темный город',
    'больница',
    desert,
    sudrovich,
    shop,
    darkcity,
    hospital
  );
}
async function darkcity() {
  mapVariable = 'darkcity';
  if (!(await applyTurnCosts())) return;
  playDarkMisuc6();
  playDarkGitaraMusic();
  playDarkMisuc3();
  playchigur();
  await videoTimerRevers('темныйгород');
  playDarkMisuc1();
  videoRevers('стоптемныйгород');
  await choiceDialog5(
    'Опасный район',
    'зайти в закусочную',
    'В разработке',
    'играть на гитаре',
    'пойти в темный переулок',
    'обратно в город',
    snackBar,
    darkcity,
    playGitara,
    darkLane,
    city
  );
}
async function playGitara() {
  mapVariable = 'playGitara';
  if (!(await applyTurnCosts())) return;
  videoRevers('игранагитаре');
  video.loop = true;
  playGitaraMany();
  playDarkMisuc1();
  playDarkGitaraMusic();
}
async function snackBar() {
  mapVariable = 'snackBar';
  if (!(await applyTurnCosts())) return;
  playDarkMisuc5();
  playDarkMisuc1();
  playDarkMisuc3();
  videoRevers('закусочная');
  video.loop = true;
  await choiceDialog3(
    'Закусочная',
    'меню',
    'пойти в кабинет директора',
    'выйти',
    snackBarBuy,
    director,
    darkcity
  );
}

// враги
async function desert() {
  mapVariable = 'desert';
  if (!(await applyTurnCosts())) return;
  playMisuc12();
  playMisuc5();
  playchigur();
  if (Player.maney > 1000) {
    await chigirCheck('чигурначало');
    return;
  }
  playMisuc3();
  await videoTimerRevers('runDesert');
  videoRevers('dsertStop');
  video.style.loop = true;
  await choiceDialog5(
    'Что будешь делать?',
    'найти врага',
    'в город',
    '395мурино',
    'в разработке',
    'в разработке',
    () => pvp1(Enemy, 'ежбой'),
    city,
    boss,
    desert,
    desert
  );
}
async function boss() {
  mapVariable = 'boss';
  if (!(await applyTurnCosts())) return;
  playMisuc5();
  await videoTimerRevers('395заставка');
  playMisuc12();
  videoRevers('395boss');
  video.loop = true;
  choiceDialog2(
    'что привело тебя сюда?',
    'сразиться с тобой',
    'я пойду обратно',
    () => pvp2(Boss, '0битвабосс'),
    desert
  );
}
async function darkLane() {
  mapVariable = 'darkLane';
  if (!(await applyTurnCosts())) return;
  playDarkMisuc1();
  await videoTimerRevers('темныйпереулок');
  if (!Dialog.darklane) {
    await creayDialog(
      'Если бы я знал опасность этого переулка, я бы никогда в него не пошёл. Но сдаваться нельзя, никто не знает, что на уме сильного и сумашедшего мужика, вылезавший из мусорки.'
    );
    Dialog.darklane = true;
  }
  videoTimerRevers('стоптемныйпереулок');
  video.loop = true;
  await choiceDialog2(
    'Незнакомый сумашедший мужик: жизнь или жизнь?',
    'Что?',
    'сразиться',
    () => pvp3(Men, 'боймужик'),
    () => pvp3(Men, 'боймужик')
  );
}
