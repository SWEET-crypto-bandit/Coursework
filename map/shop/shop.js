async function chigur() {
  mapVariable = 'chigur';
  playMisuc13();
  await videoTimerRevers('чигурпришел');
  videoRevers('выбор');
  choiceDialog2('орел орешка?', 'орел', 'орешка', eagle, nut);
}
async function eagle() {
  await videoTimerRevers('чигурорел');
  shop();
}
async function nut() {
  Player.maney = 10;
  Player.health = 10;
  upInterface();
  hospital();
}
// покупка предметов
function shopBuy() {
  mapVariable = 'buy';
  createShopUI();
}
function createShopUI() {
  if (mapVariable !== 'buy') return;
  const container = document.createElement('div');
  container.innerHTML = `
        <div class="shop-box">
            medkit 30<br>
            antiradan 45<br>
            connection 10000<br>
            
            <div style="margin-top: 10px;">
                <input id="namesItem" class="shop-input" type="text" placeholder="Предмет" onkeydown="if(event.key==='Enter'){event.preventDefault()}">
                <input id="quantity" class="shop-input" type="text" placeholder="Кол-во" style="margin-top: 8px;" onkeydown="if(event.key==='Enter'){event.preventDefault()}">
                <button class="shop-button" style="margin-top: 8px;" onclick="buying()">КУПИТЬ</button>
            </div>
        </div>
    `;
  document.body.appendChild(container);
}

function buying() {
  let utogBuy = 0;
  const nameInput = document.getElementById('namesItem').value;
  const quantity = Math.floor(
    Number(document.getElementById('quantity').value)
  );
  console.log(quantity);
  if (
    !items[nameInput] ||
    quantity < 1 ||
    typeof quantity !== 'number' ||
    Number.isNaN(quantity)
  ) {
    console.log('Нет такого предмета');
    shop();
    const container = document.querySelector('.shop-box').parentElement;
    container.remove();
    return;
  }
  for (let i = 0; i < quantity; i++) {
    utogBuy += items[nameInput].price;
  }
  if (Player.maney >= utogBuy) {
    Player.maney -= utogBuy;
    addToInventory(nameInput, quantity);
    inventory();
    upInterface();
    shop();
  } else {
    upInterface();
    shop();
  }
  const container = document.querySelector('.shop-box').parentElement;
  container.remove();
}
