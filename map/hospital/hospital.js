function miniGameNeedles() {
  const style = document.createElement('style');
  style.textContent = `
    .mini-game-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mini-game-container {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 20px;
      border-radius: 15px;
      border: 3px solid #e94560;
      box-shadow: 0 0 30px rgba(233, 69, 96, 0.5);
    }
    .mini-game-canvas {
      border: 2px solid #e94560;
      border-radius: 10px;
      background: #0f3460;
      cursor: none;
    }
    .mini-game-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      color: #fff;
      font-family: 'Courier New', monospace;
      font-size: 18px;
      font-weight: bold;
    }
    .mini-game-timer {
      color: #f0a500;
    }
    .mini-game-score {
      color: #4ecca3;
    }
    .mini-game-goal {
      color: #e94560;
    }
    .mini-game-controls {
      text-align: center;
      margin-top: 10px;
      color: #aaa;
      font-family: 'Courier New', monospace;
      font-size: 14px;
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.className = 'mini-game-overlay';

  const container = document.createElement('div');
  container.className = 'mini-game-container';

  const header = document.createElement('div');
  header.className = 'mini-game-header';
  header.innerHTML = `
    <span class="mini-game-timer"> 60с</span>
    <span class="mini-game-score"> Иголок 0/10</span>
    <span class="mini-game-goal">Вылечи рак</span>
  `;

  const canvas = document.createElement('canvas');
  canvas.className = 'mini-game-canvas';
  canvas.width = 500;
  canvas.height = 400;

  const controls = document.createElement('div');
  controls.className = 'mini-game-controls';

  container.appendChild(header);
  container.appendChild(canvas);
  container.appendChild(controls);
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  const ctx = canvas.getContext('2d');

  let player = { x: 250, y: 200, radius: 15 };
  let needles = [];
  let mellstroy = { x: 100, y: 100, radius: 20, speedX: 2, speedY: 1.5 };
  let score = 0;
  let timeLeft = 60;
  let gameActive = true;
  let gameInterval;
  let animationFrame;

  const GOAL_SCORE = 30;

  for (let i = 0; i < 30; i++) {
    needles.push({
      x: Math.random() * (canvas.width - 40) + 20,
      y: Math.random() * (canvas.height - 40) + 20,
      radius: 6,
      collected: false,
    });
  }

  canvas.addEventListener('mousemove', (e) => {
    if (!gameActive) return;
    const rect = canvas.getBoundingClientRect();
    player.x = Math.max(
      player.radius,
      Math.min(canvas.width - player.radius, e.clientX - rect.left)
    );
    player.y = Math.max(
      player.radius,
      Math.min(canvas.height - player.radius, e.clientY - rect.top)
    );
  });

  gameInterval = setInterval(() => {
    if (!gameActive) return;

    timeLeft--;
    document.querySelector('.mini-game-timer').textContent = ` ${timeLeft}с`;

    if (timeLeft <= 0) {
      endGame('timeout');
    }
  }, 1000);

  function gameLoop() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f3460';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#1a4a7a';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < canvas.width; i += 25) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 25) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    needles.forEach((needle) => {
      if (!needle.collected) {
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 10;

        ctx.fillStyle = '#e0e0e0';
        ctx.beginPath();
        ctx.moveTo(needle.x, needle.y - needle.radius - 2);
        ctx.lineTo(needle.x - needle.radius / 2, needle.y + needle.radius);
        ctx.lineTo(needle.x + needle.radius / 2, needle.y + needle.radius);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 5;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(needle.x - 2, needle.y - 4, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;

        const dist = Math.hypot(player.x - needle.x, player.y - needle.y);
        if (dist < player.radius + needle.radius) {
          needle.collected = true;
          score++;
          document.querySelector('.mini-game-score').textContent =
            `Иголок ${score}/${GOAL_SCORE}`;
          playMisuc4();

          if (score >= GOAL_SCORE) {
            endGame('win');
          }
        }
      }
    });

    mellstroy.x += mellstroy.speedX;
    mellstroy.y += mellstroy.speedY;

    if (
      mellstroy.x + mellstroy.radius > canvas.width ||
      mellstroy.x - mellstroy.radius < 0
    ) {
      mellstroy.speedX *= -1;
    }
    if (
      mellstroy.y + mellstroy.radius > canvas.height ||
      mellstroy.y - mellstroy.radius < 0
    ) {
      mellstroy.speedY *= -1;
    }

    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 15;

    ctx.fillStyle = '#e94560';
    ctx.beginPath();
    ctx.arc(mellstroy.x, mellstroy.y, mellstroy.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(mellstroy.x - 7, mellstroy.y - 5, 5, 0, Math.PI * 2);
    ctx.arc(mellstroy.x + 7, mellstroy.y - 5, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(
      mellstroy.x - 7 + (player.x > mellstroy.x ? 2 : -2),
      mellstroy.y - 5,
      2,
      0,
      Math.PI * 2
    );
    ctx.arc(
      mellstroy.x + 7 + (player.x > mellstroy.x ? 2 : -2),
      mellstroy.y - 5,
      2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(mellstroy.x, mellstroy.y + 5, 8, 0.1, Math.PI - 0.1);
    ctx.stroke();

    ctx.shadowColor = '#4ecca3';
    ctx.shadowBlur = 10;

    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 5;
    ctx.strokeStyle = '#2c2c2c';
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const x1 = player.x + Math.cos(angle) * player.radius;
      const y1 = player.y + Math.sin(angle) * player.radius;
      const x2 = player.x + Math.cos(angle) * (player.radius + 8);
      const y2 = player.y + Math.sin(angle) * (player.radius + 8);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    const distToEnemy = Math.hypot(
      player.x - mellstroy.x,
      player.y - mellstroy.y
    );
    if (distToEnemy < player.radius + mellstroy.radius) {
      endGame('caught');
    }

    animationFrame = requestAnimationFrame(gameLoop);
  }

  function endGame(reason) {
    if (!gameActive) return;

    gameActive = false;
    clearInterval(gameInterval);
    cancelAnimationFrame(animationFrame);

    let message = '';
    let isWin = false;

    if (reason === 'win') {
      message = 'плюс 5хп и минус 1 радиация';
      isWin = true;
    } else if (reason === 'timeout') {
      message = 'капец ты медленный';
    } else if (reason === 'caught') {
      message = 'Рак пймал тебя';
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = 'bold 24px "Courier New", monospace';
    ctx.fillStyle = isWin ? '#4ecca3' : '#e94560';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(message, canvas.width / 2, canvas.height / 2 - 20);

    ctx.font = '18px "Courier New", monospace';
    ctx.fillStyle = '#fff';
    ctx.fillText(
      `Собрано иголок из своего тела ${score}/${GOAL_SCORE}`,
      canvas.width / 2,
      canvas.height / 2 + 20
    );

    setTimeout(() => {
      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Продолжить';
      closeBtn.style.cssText = `
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 30px;
        background: ${isWin ? '#4ecca3' : '#e94560'};
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        font-family: 'Courier New', monospace;
        z-index: 1001;
      `;

      closeBtn.onclick = () => {
        document.body.removeChild(closeBtn);
        document.body.removeChild(overlay);
        document.head.removeChild(style);

        if (isWin) {
          Player.maney -= 1;
          Player.health += 5;
          if (Player.radiation > 0) {
            Player.radiation -= 1;
          }
          upInterface();
          hospital();
        } else {
          Player.maney -= 2;
          upInterface();
          hospital();
        }
      };

      document.body.appendChild(closeBtn);
    }, 500);
  }

  gameLoop();
}

function hpCheck() {
  if (Player.health < 1) {
    Player.health = 10;
    Player.maney = 10;
    upInterface();
  }
}
function hpBuy() {
  if (Player.maney > 299) {
    Player.maney -= 300;
    Player.maxHealth += 10;
    upInterface();
    hospital();
  } else {
    hospital();
  }
}
