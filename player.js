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
  health: 1000,
  maxHealth: 1000,
  damage: 20,
};
const Men = {
  name: 'Мужик',
  health: 100,
  maxHealth: 100,
  damage: 8,
}
const Chigur = {
  name: 'Чигур',
  health: 100,
  maxHealth: 100,
  damage: 80,
}
/** @type {import('./types').Player} */
const Player = {
  name: '',
  maney: 10000,
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
    { id: 'needle', count: 111 },
    { id: 'medkit', count: 222 },
    { id: 'meat', count: 3 },
    { id: 'grilledMeat', count: 0 },
    { id: 'soupHedgehog', count: 1 },
    { id: 'bits', count: 1 },
    { id: 'connection', count: 1 },
    { id: 'antiradan', count: 33 },
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
}
