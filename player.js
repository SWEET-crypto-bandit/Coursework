// @ts-check
/** @type {import('./types').Enemy} */

const Enemy = {
  name: 'Красный еж',
  health: 20,
  maxHealth: 20,
  damage: 2,
};
const Boss = {
  name: 'Бог зоны',
  health: 2000,
  maxHealth: 2000,
  damage: 2000,
};
const Men = {
  name: 'Мужик',
  health: 100,
  maxHealth: 100,
  damage: 8,
};
const Chigur = {
  name: 'Чигур',
  health: 100,
  maxHealth: 100,
  damage: 80,
};
/** @type {import('./types').Player} */
const Player = {
  name: '',
  maney: 6500,
  food: 100,
  maxFood: 100,
  health: 90,
  maxHealth: 100,
  damage: 4,
  radiation: 0,
  business: {
    owned: false,
    balance: 0,
  },
  inventory: [
    { id: 'needle', count: 222 },
    { id: 'medkit', count: 222 },
    { id: 'meat', count: 222 },
    { id: 'grilledMeat', count: 222 },
    { id: 'soupHedgehog', count: 222 },
    { id: 'bits', count: 222 },
    { id: 'connection', count: 222 },
    { id: 'antiradan', count: 222 },
  ],
};
// предметы игры
const items = {
  needle: { name: 'Иголка', price: 5 },
  medkit: { name: 'Аптечка', price: 30 },
  meat: { name: 'Мясо', price: 3 },
  grilledMeat: { name: 'Жаренное Мясо', price: 6 },
  soupHedgehog: { name: 'Суп из ежа', price: 25 },
  bits: { name: 'Бита', price: 10 },
  connection: { name: 'рация', price: 10000 },
  antiradan: { name: 'антирадан', price: 45 },
};

const Dialog = {
  darklane: false,
};
