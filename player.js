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
  maney: 100,
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
    { id: 'needle', count: 5 },
    { id: 'medkit', count: 2 },
    { id: 'meat', count: 1 },
    { id: 'grilledMeat', count: 0 },
    { id: 'soupHedgehog', count: 1 },
    { id: 'bits', count: 0 },
    { id: 'connection', count: 0 },
    { id: 'antiradan', count: 0 },
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
