const video = document.getElementById('video');
const hp = document.getElementById('hp');
const many = document.getElementById('$');
const food = document.getElementById('food');
const radiation = document.getElementById('radiation');
const audio = document.getElementById('bgMusic5');

let pvpVarible = null // текущий враг для оружий
let mapVariable = ''; // текущая локация
let pendingGold = 0; // Сумма в окне Сидоровича
let startInver = true; // не помню уже

const interFace = document.getElementById('interface')
interFace.style.display = 'none'
