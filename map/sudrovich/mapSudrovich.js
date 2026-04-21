function sellShop() {
  if (playMisuc2) playMisuc2();
  if (mapVariable !== 'sudrovich') return;
  openSidorShop();
  inventory();
}
function sellItem(itemId) {
  if (mapVariable !== 'sudrovich') return;
  const itemData = items[itemId];
  const slot = Player.inventory.find((i) => i.id === itemId);

  if (slot && slot.count > 0) {
    slot.count--;
    pendingGold += itemData.price;

    document.getElementById('pending-gold').innerText = pendingGold;

    inventory();
  }
}

function finishDeal() {
  if (mapVariable !== 'sudrovich') return;

  Player.maney += pendingGold;
  Player.gold += pendingGold;
  if (pendingGold < 100 && pendingGold > 0) {
    playMisuc10();
  }
  if (pendingGold >= 99) {
    playMisuc11();
  }
  pendingGold = 0;
  document.getElementById('pending-gold').innerText = '0';
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
  closeSidorShop();
  if (playMisuc2) playMisuc2();
  upInterface();
}

function openSidorShop() {
  const screen = document.getElementById('trading-screen');
  screen.classList.remove('hidden');

  document.getElementById('pending-gold').innerText = pendingGold;
  inventory();
}

function closeSidorShop() {
  const screen = document.getElementById('trading-screen');
  screen.classList.add('hidden');
}
// диалоги ниже
async function dialog1() {
  mapVariable = 'dialog1';
  playMisuc7();
  await videoTimerRevers('историябоев');
  sudrovich();
}
