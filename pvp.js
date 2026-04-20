// битва с ежом
async function pvp1(vrag, video) {
  mapVariable = 'pvp1';
  pvpVarible = Enemy
  playMisuc5();
  videoRevers(video);
  playMisuc3();
  video.loop = true;

  choiceDialog3(
    'Что выберешь',
    'Atak',
    'blok + Atak',
    'получить леща',
    () => moveAtak(vrag),
    () => moveAtakBlok(vrag),
    () => moveHil(vrag)
  );
  enemy(vrag);
}

function moveAtak(vrag) {
  vrag.health -= Player.damage;
  Player.health -= vrag.damage;
  playMisuc4();
  // можно радиацию кинуть отдельно либо потом не забудь универсалку сюда наклепать
  checkPvp(vrag);
}
//защита атака
function moveAtakBlok(vrag) {
  const luck = Math.floor(Math.random() * 11);
  // Функция реализует механику рискованной атаки с использованием генератора псевдослучайных чисел.
  // Вероятность исхода распределена на три сценария: критический успех (двойной урон врагу),
  // частичный успех (сниженный урон врагу + получение урона игроком) и критический провал (четверной урон по игроку)

  if (luck > 7) {
    vrag.health -= Player.damage * 2;
    console.log('1');
  }
  if (luck < 7) {
    const dmg = Math.floor((Player.damage || 0) / 2);
    vrag.health -= dmg;
    Player.health -= vrag.damage * 2;
    console.log('2');
  }
  if (luck === 7) {
    Player.health -= vrag.damage * 4;
    console.log('3');
  }
  playMisuc4();
  checkPvp(vrag);
}

function moveHil(vrag) {
  Player.health -= vrag.damage;

  checkPvp(vrag);
}

function checkPvp(vrag) {
  upInterface();

  if (Player.health <= 0) {
    clearAllDialogs();
    hideEnemy();
    Player.radiation += 4
    upInterface();
    hospital()
    return;
  }
  if (vrag.health > 0) {
    enemy(vrag);
    choiceDialog3(
      'Что выберешь',
      'Atak',
      'blok + Atak',
      'получить леща',
      () => moveAtak(vrag),
      () => moveAtakBlok(vrag),
      () => moveHil(vrag)
    );
  } else {
    addToInventory('needle', 3);
    addToInventory('Meat', 1);
    applyTurnCosts()
    vrag.health = vrag.maxHealth;
    upInterface();
    clearAllDialogs();
    hideEnemy();
    desert()
  }
}

function enemy(vrag) {
  let enemyContainer = document.getElementById('enemyContainer');

  if (!enemyContainer) {
    enemyContainer = document.createElement('div');
    enemyContainer.id = 'enemyContainer';
    enemyContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 300px;
            background: black;
            padding: 15px;
            border-radius: 5px;
            z-index: 10;
        `;

    enemyContainer.innerHTML = `
            <div style="width: 100%; height: 20px; background: gray;">
                <div id="enemyHp" style="width: 100%; height: 120%; background: red;"></div>
            </div>
        `;

    document.body.appendChild(enemyContainer);
  }

  enemyContainer.style.display = 'block';

  const enemyHp = document.getElementById('enemyHp');
  if (enemyHp) {
    const percent = Math.max(
      0,
      Math.floor((vrag.health / vrag.maxHealth) * 100)
    );
    enemyHp.style.width = `${percent}%`;
  } else {
    console.error('enemyHp элемент не найден!');
  }
}

function hideEnemy() {
  const enemyContainer = document.getElementById('enemyContainer');
  if (enemyContainer) {
    enemyContainer.style.display = 'none';
  }
}

//битва с боссом
async function pvp2(vrag, video) {
  mapVariable = 'pvp2'; 
  pvpVarible = Boss
  playMisuc12()
  playMisuc5();
  videoRevers(video);
  playMisuc3();
  video.loop = true;

  choiceDialog3(
    'Что выберешь',
    'Atak',
    'blok + Atak',
    'получить леща',
    () => moveAtak2(vrag),
    () => moveAtakBlok2(vrag),
    () => moveHil2(vrag)
  );
  enemy2(vrag);
}

function moveAtak2(vrag) {
  vrag.health -= Player.damage;
  Player.health -= vrag.damage;
  playMisuc4();
  checkPvp2(vrag);
}

function moveAtakBlok2(vrag) {
  const luck = Math.floor(Math.random() * 11);
  
  if (luck > 7) {
    vrag.health -= Player.damage * 2;
    console.log('pvp2: crit');
  }
  if (luck < 7) {
    const dmg = Math.floor((Player.damage || 0) / 2);
    vrag.health -= dmg;
    Player.health -= vrag.damage * 2;
    console.log('pvp2: partial');
  }
  if (luck === 7) {
    Player.health -= vrag.damage * 4;
    console.log('pvp2: fail');
  }
  
  playMisuc4();
  checkPvp2(vrag);
}

function moveHil2(vrag) {
  Player.health -= vrag.damage;
  checkPvp2(vrag);
}

async function checkPvp2(vrag) {
  upInterface();

  if (Player.health <= 0) {
    clearAllDialogs();
    hideEnemy2();
    await videoTimerRevers('поражениебосс')
    vrag.health = vrag.maxHealth;
    Player.radiation += 10
    upInterface();
    hospital()
    return;
  }
  
  if (vrag.health > 0) {
    enemy2(vrag);
    choiceDialog3(
      'Что выберешь',
      'Atak',
      'blok + Atak',
      'получить леща',
      () => moveAtak2(vrag),
      () => moveAtakBlok2(vrag),
      () => moveHil2(vrag)
    );
  } else {
    addToInventory('needle', 3);
    vrag.health = vrag.maxHealth;
    clearAllDialogs();
    hideEnemy2();
    desert(); // или другая функция для pvp2, например desert2() конец игры
  }
}

function enemy2(vrag) {
  let enemyContainer = document.getElementById('enemyContainer2'); // Уникальный ID

  if (!enemyContainer) {
    enemyContainer = document.createElement('div');
    enemyContainer.id = 'enemyContainer2';
    enemyContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 300px;
            background: black;
            padding: 15px;
            border-radius: 5px;
            z-index: 10;
        `;

    enemyContainer.innerHTML = `
            <div style="width: 100%; height: 20px; background: gray;">
                <div id="enemyHp2" style="width: 100%; height: 120%; background: red;"></div>
            </div>
        `;

    document.body.appendChild(enemyContainer);
  }

  enemyContainer.style.display = 'block';

  const enemyHp = document.getElementById('enemyHp2');
  if (enemyHp) {
    const percent = Math.max(
      0,
      Math.floor((vrag.health / vrag.maxHealth) * 100)
    );
    enemyHp.style.width = `${percent}%`;
  } else {
    console.error('enemyHp2 элемент не найден!');
  }
}

function hideEnemy2() {
  const enemyContainer = document.getElementById('enemyContainer2');
  if (enemyContainer) {
    enemyContainer.style.display = 'none';
  }
}
// мужик в переулке
async function pvp3(vrag, video) {
  mapVariable = 'pvp3';
  playDarkMisuc6()
  pvpVarible = Men 
  playMisuc5(); // Твоя стандартная музыка начала боя
  playMisuc12(); // Можно добавить уникальный трек для этого боя
  videoRevers(video);
  video.loop = true;

  choiceDialog3(
    'Что выберешь',
    'Atak',
    'blok + Atak',
    'получить леща',
    () => moveAtak3(vrag),
    () => moveAtakBlok3(vrag),
    () => moveHil3(vrag)
  );
  enemy3(vrag);
}


function moveAtak3(vrag) {
  vrag.health -= Player.damage;
  Player.health -= vrag.damage;
  playMisuc4(); 
  checkPvp3(vrag);
}

function moveAtakBlok3(vrag) {
  const luck = Math.floor(Math.random() * 11);
  
  if (luck > 7) {
    vrag.health -= Player.damage * 3;
    console.log('pvp3: crit');
  } else if (luck === 7) {
    Player.health -= vrag.damage * 4;
    console.log('pvp3: fail');
  } else {
    
    const dmg = Math.floor((Player.damage || 0) / 2);
    vrag.health -= dmg;
    Player.health -= vrag.damage * 2;
    console.log('pvp3: partial');
  }
  
  playMisuc4();
  checkPvp3(vrag);
}

function moveHil3(vrag) {
  Player.health -= vrag.damage;
  checkPvp3(vrag);
}


async function checkPvp3(vrag) {
  upInterface();

  if (Player.health <= 0) {
    // Логика поражения в переулке
    clearAllDialogs();
    hideEnemy3();
    mapVariable = 'hospital'
    playDarkMisuc6()
    await videoTimerRevers('поражениемужик')
    vrag.health = vrag.maxHealth;
    hospital(); 
    return;
  }
  
  if (vrag.health > 0) {
    enemy3(vrag); 
    choiceDialog3(
      'Что выберешь',
      'Atak',
      'blok + Atak',
      'получить леща',
      () => moveAtak3(vrag),
      () => moveAtakBlok3(vrag),
      () => moveHil3(vrag)
    );
  } else {
    
    addToInventory('bits', 1); 
    vrag.health = vrag.maxHealth;
    clearAllDialogs();
    hideEnemy3();
    darkcity(); 
  }
}

// --- ОТРИСОВКА ВРАГА 3 ---
function enemy3(vrag) {
  let enemyContainer = document.getElementById('enemyContainer3'); // Уникальный ID

  if (!enemyContainer) {
    enemyContainer = document.createElement('div');
    enemyContainer.id = 'enemyContainer3';
    enemyContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 300px;
            background: rgba(0, 0, 0, 0.8);
            padding: 15px;
            border: 1px solid #ff0000;
            border-radius: 5px;
            z-index: 10;
        `;

    enemyContainer.innerHTML = `
            <div style="color: white; margin-bottom: 5px;">Мужик в переулке</div>
            <div style="width: 100%; height: 20px; background: gray;">
                <div id="enemyHp3" style="width: 100%; height: 100%; background: #00ff00;"></div>
            </div>
        `;

    document.body.appendChild(enemyContainer);
  }

  enemyContainer.style.display = 'block';

  const enemyHp = document.getElementById('enemyHp3');
  if (enemyHp) {
    const percent = Math.max(0, Math.floor((vrag.health / vrag.maxHealth) * 100));
    enemyHp.style.width = percent + '%';
  }
}

function hideEnemy3() {
  const enemyContainer = document.getElementById('enemyContainer3');
  if (enemyContainer) {
    enemyContainer.style.display = 'none';
  }
}
// чигур 
async function pvp4(vrag, video, videoDeath) {
  mapVariable = 'pvp4';
playchigur()
  pvpVarible = Chigur
  videoRevers(video);
  video.loop = true;
  checkPvp4(vrag, videoDeath)

  choiceDialog3(
    'Что выберешь',
    'Atak',
    'blok + Atak',
    'получить леща',
    () => moveAtak4(vrag, videoDeath),
    () => moveAtakBlok4(vrag, videoDeath),
    () => moveHil4(vrag, videoDeath)
  );
  enemy4(vrag);
}

function moveAtak4(vrag, videoDeath) {
  vrag.health -= Player.damage;
  Player.health -= vrag.damage;
  playMisuc4(); 
  checkPvp4(vrag, videoDeath);
}

function moveAtakBlok4(vrag, videoDeath) {
  const luck = Math.floor(Math.random() * 11);
  
  if (luck > 7) {
    vrag.health -= Player.damage * 3;
    console.log('pvp4: crit');
  } else if (luck === 7) {
    Player.health -= vrag.damage * 4;
    console.log('pvp4: fail');
  } else {
    const dmg = Math.floor((Player.damage || 0) / 2);
    vrag.health -= dmg;
    Player.health -= vrag.damage * 2;
    console.log('pvp4: partial');
  }
  
  playMisuc4();
  checkPvp4(vrag, videoDeath);
}

function moveHil4(vrag, videoDeath) {
  Player.health -= vrag.damage;
  checkPvp4(vrag, videoDeath);
}

async function checkPvp4(vrag, videoDeath) {
  upInterface();

  if (Player.health <= 0) {
    clearAllDialogs();
    hideEnemy4();
    mapVariable = 'hospital';
    
    await videoTimerRevers(videoDeath);
    vrag.health = vrag.maxHealth;
    hospital(); 
    return;
  }
  
  if (vrag.health > 0) {
    enemy4(vrag); 
    choiceDialog3(
      'Что выберешь',
      'Atak',
      'blok + Atak',
      'получить леща',
      () => moveAtak4(vrag, videoDeath),
      () => moveAtakBlok4(vrag, videoDeath),
      () => moveHil4(vrag, videoDeath)
    );
  } else {
    addToInventory('bits', 1); 
    vrag.health = vrag.maxHealth;
    clearAllDialogs();
    hideEnemy4();
    city()
  }
}


function enemy4(vrag) {
  let enemyContainer = document.getElementById('enemyContainer4');

  if (!enemyContainer) {
    enemyContainer = document.createElement('div');
    enemyContainer.id = 'enemyContainer4';
    enemyContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 300px;
            background: rgba(0, 0, 0, 0.8);
            padding: 15px;
            border: 1px solid #ff0000;
            border-radius: 5px;
            z-index: 10;
        `;

    enemyContainer.innerHTML = `
            <div style="color: white; margin-bottom: 5px;">Новый противник</div>
            <div style="width: 100%; height: 20px; background: gray;">
                <div id="enemyHp4" style="width: 100%; height: 100%; background: #00ff00;"></div>
            </div>
        `;

    document.body.appendChild(enemyContainer);
  }

  enemyContainer.style.display = 'block';

  const enemyHp = document.getElementById('enemyHp4');
  if (enemyHp) {
    const percent = Math.max(0, Math.floor((vrag.health / vrag.maxHealth) * 100));
    enemyHp.style.width = percent + '%';
  }
}

function hideEnemy4() {
  const enemyContainer = document.getElementById('enemyContainer4');
  if (enemyContainer) {
    enemyContainer.style.display = 'none';
  }
}