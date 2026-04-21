// @ts-check
// save.js на 83% написан с помощью ии
const PLAYER_SAVE_KEY = 'player_save_v1';

/**
 * Безопасно получить глобальный Player (он объявлен в `player.js` как `const Player = ...`).
 * Важно: `const Player` НЕ попадает в `window.Player`, поэтому читаем именно идентификатор `Player`.
 * @returns {import('./types').Player | null}
 */
function getPlayer() {
  try {
    // @ts-ignore - Player объявлен в другом скрипте (player.js)
    const p = Player;
    return typeof p === 'object' && p !== null ? p : null;
  } catch {
    return null;
  }
}

/**
 * Сохранить текущее состояние Player в localStorage.
 */
function savePlayer() {
  try {
    const player = getPlayer();
    if (!player) return false;
    localStorage.setItem(PLAYER_SAVE_KEY, JSON.stringify(player));
    hospital();
    return true;
  } catch (e) {
    hospital();
    console.error('savePlayer: failed', e);
    return false;
  }
}

/**
 * Проверить, есть ли сохранение Player в localStorage.
 */
function hasPlayerSave() {
  try {
    return localStorage.getItem(PLAYER_SAVE_KEY) !== null;
  } catch (e) {
    console.error('hasPlayerSave: failed', e);
    return false;
  }
}

/**
 * Удалить сохранение Player из localStorage.
 */
function deletePlayerSave() {
  try {
    localStorage.removeItem(PLAYER_SAVE_KEY);
    if (mapVariable === 'hospital') {
      hospital();
    }
    return true;
  } catch (e) {
    if (mapVariable === 'hospital') {
      hospital();
    }
    console.error('deletePlayerSave: failed', e);
    return false;
  }
}

/**
 * Загрузить сохранённого Player из localStorage и "влить" в существующий объект Player.
 * Ничего не сохраняет автоматически.
 */
function loadPlayerFromSave() {
  try {
    const raw = localStorage.getItem(PLAYER_SAVE_KEY);
    if (!raw) return false;

    const saved = JSON.parse(raw);
    if (typeof saved !== 'object' || saved === null) return false;
    const player = getPlayer();
    if (!player) return false;

    for (const [key, value] of Object.entries(saved)) {
      // Защита от поломки прототипа и случайных ключей
      if (key === '__proto__' || key === 'prototype' || key === 'constructor')
        continue;

      // Инвентарь всегда должен быть массивом
      if (key === 'inventory') {
        if (Array.isArray(value)) player.inventory = value;
        continue;
      }

      // Остальные поля — как есть
      /** @type {any} */ (player)[key] = value;
    }

    return true;
  } catch (e) {
    console.error('loadPlayerFromSave: failed', e);
    return false;
  }
}

// Экспортируем в глобальную область, чтобы можно было вызывать из onclick / колбеков диалогов
window.savePlayer = savePlayer;
window.hasPlayerSave = hasPlayerSave;
window.deletePlayerSave = deletePlayerSave;
window.loadPlayerFromSave = loadPlayerFromSave;
