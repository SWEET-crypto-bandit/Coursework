function useItem(itemId) {
  const ite = items[itemId];
  switch (ite.name) {
    case 'Аптечка':
      treat(itemId);
      break;
    case 'Мясо':
      meat(itemId);
      break;
    case 'Жаренное Мясо':
      grilledMeat(itemId);
      break;
    case 'Суп из ежа':
      soupHedgehog(itemId);
      break;
    case 'Бита':
      bits(itemId);
      break;
    case 'рация':
      connection();
      break;
    case 'антирадан':
      antiradan(itemId);
      break;
  }
}
// добавить в инвентарь
function addToInventory(itemId, count) {
  if (!items[itemId]) {
    console.error(`Предмет "${itemId}" не существует в базе items`);
    return;
  }

  const existingItem = Player.inventory.find((i) => i.id === itemId);

  if (existingItem) {
    existingItem.count += count;
  } else {
    Player.inventory.push({ id: itemId, count });
  }
}
// удалить из инвентаря
function removeFromInventory(itemId, count) {
  if (!items[itemId]) {
    return;
  }

  const itemIndex = Player.inventory.findIndex((i) => i.id === itemId);

  if (itemIndex !== -1) {
    const existingItem = Player.inventory[itemIndex];

    if (existingItem.count >= count) {
      existingItem.count -= count;

      if (existingItem.count <= 0) {
        Player.inventory.splice(itemIndex, 1);
      } else {
        console.log(
          `Удалено ${count} шт. Текущее количество "${itemId}": ${existingItem.count}`
        );
      }
    } else {
      console.error(
        `Ошибка: Недостаточно "${itemId}" в инвентаре (есть ${existingItem.count}, нужно ${count})`
      );
    }
  } else {
    console.error(`Ошибка: Предмета "${itemId}" нет в инвентаре игрока`);
  }
}

// функции
function treat(itemId) {
  if (itemId !== 'medkit') return;
  if (Player.health + 30 > Player.maxHealth) return;
  const slot = Player.inventory.find((item) => item.id === itemId);
  if (slot && slot.count > 0) {
    if (Player.health + 30 <= Player.maxHealth) {
      Player.health += 30;
      slot.count -= 1;
      upInterface();
      inventory();
    }
  }
}

function meat(itemId) {
  if (Player.food + 3 > Player.maxFood) return;
  const slot = Player.inventory.find((item) => item.id === itemId);
  if (slot && slot.count > 0) {
    Player.food += 3;
    Player.radiation += 2;
    slot.count -= 1;
    upInterface();
    inventory();
  }
}

function grilledMeat(itemId) {
  if (Player.food + 10 > Player.maxFood) return;
  const slot = Player.inventory.find((item) => item.id === itemId);
  if (slot && slot.count > 0) {
    Player.food += 10;
    slot.count -= 1;
    upInterface();
    inventory();
  }
}
function soupHedgehog(itemId) {
  if (Player.food + 30 > Player.maxFood) return;
  const slot = Player.inventory.find((item) => item.id === itemId);
  if (slot && slot.count > 0) {
    Player.food += 30;
    slot.count -= 1;
    upInterface();
    inventory();
  }
}
function bits(itemId) {
  if (
    mapVariable === 'pvp4' ||
    mapVariable === 'pvp3' ||
    mapVariable === 'pvp2' ||
    mapVariable === 'pvp1'
  ) {
    if (Player.food - 10 > 0) {
      pvpVarible.health -= 15;
      Player.food -= 10;
      upInterface();
      inventory();
    }
  }
  if (mapVariable === 'pvp1') {
    Player.health -= pvpVarible.damage;
    checkPvp(pvpVarible);
    playMisuc15();
  } else if (mapVariable === 'pvp2') {
    Player.health -= pvpVarible.damage;
    checkPvp2(pvpVarible);
    playMisuc15();
  } else if (mapVariable === 'pvp3') {
    Player.health -= pvpVarible.damage;
    checkPvp3(pvpVarible);
    playMisuc15();
  } else if (mapVariable === 'pvp4') {
    Player.health -= pvpVarible.damage;
    checkPvp4(pvpVarible, 'чигурпоражение');
    playMisuc15();
  }
}
async function connection() {
  if (mapVariable !== 'pvp2') return;
  Boss.health = -1;
  checkPvp2(Boss);
  await videoTimerRevers('конец');
  deletePlayerSave();
  await videoTimerRevers('конецточно');
}
function antiradan(itemId) {
  if (Player.radiation - 30 < 0) return;
  const slot = Player.inventory.find((item) => item.id === itemId);
  if (slot && slot.count > 0) {
    Player.radiation -= 30;
    slot.count -= 1;
    upInterface();
    inventory();
  }
}
