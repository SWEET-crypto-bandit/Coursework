function snackBarBuy() {
  mapVariable = 'buy';
  createSnackBarUI();
}
function createSnackBarUI() {
  if (mapVariable !== 'buy') return;
  const container = document.createElement('div');
  container.innerHTML = `
        <div class="shop-box">
            soupHedgehog 25<br>
            
            <div style="margin-top: 10px;">
                <input id="namesItem" class="shop-input" type="text" placeholder="Предмет" onkeydown="if(event.key==='Enter'){event.preventDefault()}">
                <input id="quantity" class="shop-input" type="text" placeholder="Кол-во" style="margin-top: 8px;" onkeydown="if(event.key==='Enter'){event.preventDefault()}">
                <button class="shop-button" style="margin-top: 8px;" onclick="buyingSnackBar()">КУПИТЬ</button>
            </div>
        </div>
    `;
  document.body.appendChild(container);
}

function buyingSnackBar() {
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
    snackBar() 
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
    snackBar() 
  } else {
    upInterface();
    snackBar() ;
  }
  const container = document.querySelector('.shop-box').parentElement;
  container.remove();
}