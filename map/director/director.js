/**
 * Директор: покупка бизнеса + снятие выручки.
 * Деньги копятся за каждый "ход" в `applyTurnCosts()` (см. move.js).
 * этот файл на 80% написал ии
 */

/**
 * Гарантирует, что у игрока есть объект бизнеса (важно для старых сохранений).
 
 */
function ensureBusiness() {
  if (!Player.business || typeof Player.business !== 'object') {
    Player.business = { owned: false, balance: 0 };
  }

  if (typeof Player.business.owned !== 'boolean') {
    Player.business.owned = false;
  }

  if (
    typeof Player.business.balance !== 'number' ||
    Number.isNaN(Player.business.balance)
  ) {
    Player.business.balance = 0;
  }

  return Player.business;
}

function formatCoins(n) {
  const v = Math.max(0, Math.floor(Number(n) || 0));
  return String(v);
}

async function director() {
  mapVariable = 'director';
  if (typeof applyTurnCosts === 'function') {
    if (!(await applyTurnCosts())) return;
  }
  if (typeof playDarkMisuc3 === 'function') playDarkMisuc3();
  if (typeof playDarkMisuc5 === 'function') playDarkMisuc5();
  if (typeof videoRevers === 'function') videoRevers('директор');
  if (typeof video !== 'undefined') video.loop = true;
  directorMenu();
}

function directorMenu() {
  // меню может открываться повторно после действий (без траты хода)
  mapVariable = 'director';
  const business = ensureBusiness();
  const buyText = business.owned
    ? 'бизнес уже куплен'
    : 'купить бизнес (5000 монет)';
  const collectText = `забрать деньги (${formatCoins(business.balance)} монет)`;

  const exitCb =
    typeof snackBar === 'function'
      ? snackBar
      : typeof darkcity === 'function'
        ? darkcity
        : typeof city === 'function'
          ? city
          : directorMenu;

  choiceDialog3(
    'Кабинет директора',
    'выйти',
    buyText,
    collectText,

    exitCb,

    buyBusinessFromDirector,

    collectBusinessMoney
  );
}

async function buyBusinessFromDirector() {
  const business = ensureBusiness();
  if (business.owned) {
    directorMenu();
    return;
  }

  const PRICE = 5000;
  if (Player.maney >= PRICE) {
    Player.maney -= PRICE;
    business.owned = true;
    if (typeof upInterface === 'function') upInterface();
    if (typeof creayDialog === 'function') {
      await creayDialog('Поздравляю. Теперь бизнес приносит 50 монет за ход.');
    }
    directorMenu();
    return;
  }

  if (typeof creayDialog === 'function') {
    await creayDialog('Мало монет. Приходи когда будет 5000.');
  }
  directorMenu();
}

async function collectBusinessMoney() {
  const business = ensureBusiness();
  if (!business.owned) {
    if (typeof creayDialog === 'function') {
      await creayDialog('Сначала купи бизнес.');
    }
    directorMenu();
    return;
  }

  const amount = Math.max(0, Math.floor(business.balance || 0));
  if (amount <= 0) {
    if (typeof creayDialog === 'function') {
      await creayDialog('Пока нечего забирать. Заходи позже.');
    }
    directorMenu();
    return;
  }

  Player.maney += amount;
  business.balance = 0;
  if (typeof upInterface === 'function') upInterface();
  if (typeof creayDialog === 'function') {
    await creayDialog(`Забрал ${formatCoins(amount)} монет.`);
  }
  directorMenu();
}
