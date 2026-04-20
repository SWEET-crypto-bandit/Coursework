function upInterface() {
  hp.textContent = `ХП  ${Player.health}❤️`;
  $.textContent = ` MANEY ${Player.maney}💸`;
  food.textContent = ` food ${Player.food}🍕`
  radiation.textContent = `РАДИАЦИЯ  ${Player.radiation}☢️`;
}

function inventory() {
  const data = [];
  Player.inventory.forEach((slot) => {
    if (slot.count > 0) {
      data.push(slot);
    }
  });
  const container = document.querySelector('.inventory');
  container.innerHTML = '';
  data.forEach((slot) => {
    if (data.length === 0) return;
    const info = items[slot.id];
    container.innerHTML += `
    <div class="item-cell">
        <span class="item-name">${info.name}</span>
        <span class="item-count">${slot.count}</span>
        <div class="item-controls">
            <button class="btn-use" onclick="useItem('${slot.id}')">use</button>
            <button class="btn-sell" onclick="sellItem('${slot.id}')">💰</button>
        </div>
        
    </div>
`;
  });
}
function startInvertiry() {
  if (mapVariable === 'sudrovich') return;
  if (startInver) {
    openSidorShop();
    startInver = false;
  } else {
    closeSidorShop();
    startInver = true;
  }
}
