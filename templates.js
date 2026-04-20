// templates.js маштабирован с помощью ии
function creayDialog(text) {
  //промис для диалогов
  return new Promise((resolve) => {
    clearAllDialogs();
    const dialog = document.createElement('div');
    dialog.className = 'game-dialog';
    dialog.style.position = 'absolute';
    dialog.style.top = '77%';

    dialog.style.background = 'rgba(110, 99, 99, 0.7)';
    dialog.style.width = '800px';
    dialog.style.height = '200px';
    dialog.style.borderRadius = '5px';
    dialog.style.border = '2px solid rgb(148, 141, 126)';
    dialog.style.boxShadow = '0 0 20px rgb(148, 141, 126)';
    dialog.style.overflow = 'auto';

    const textDialoga = document.createElement('p');
    textDialoga.textContent = text;
    textDialoga.style.margin = '15px';
    textDialoga.style.color = 'white';
    textDialoga.style.wordWrap = 'break-word';
    textDialoga.style.maxHeight = '100%';
    textDialoga.style.fontSize = '20px';

    const buttonDialog = document.createElement('button');
    buttonDialog.textContent = 'further';
    buttonDialog.style.position = 'absolute';
    buttonDialog.style.bottom = '10px';
    buttonDialog.style.right = '10px';
    buttonDialog.style.padding = '8px 20px';
    buttonDialog.onclick = function () {
      playMisuc2();
      dialog.remove();
      resolve();
    };

    dialog.appendChild(textDialoga);
    dialog.appendChild(buttonDialog);
    document.body.appendChild(dialog);
  });
}

function choiceDialog2(text, btn1Text, btn2Text, callback1, callback2) {
  return new Promise((resolve) => {
    clearAllDialogs();
    const dialog = document.createElement('div');
    dialog.className = 'game-dialog';
    dialog.style.position = 'absolute';
    dialog.style.top = '77%';
    dialog.style.background = 'rgba(110, 99, 99, 0.7)';
    dialog.style.width = '800px';
    dialog.style.height = 'auto';
    dialog.style.borderRadius = '5px';
    dialog.style.border = '2px solid rgb(148, 141, 126)';
    dialog.style.boxShadow = '0 0 20px rgb(148, 141, 126)';
    dialog.style.overflow = 'auto';
    dialog.style.padding = '20px';

    const textDialoga = document.createElement('p');
    textDialoga.textContent = text;
    textDialoga.style.margin = '15px';
    textDialoga.style.color = 'white';
    textDialoga.style.wordWrap = 'break-word';
    textDialoga.style.fontSize = '20px';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '20px';
    buttonContainer.style.marginTop = '20px';

    const btn1 = document.createElement('button');
    btn1.textContent = btn1Text;
    btn1.style.padding = '10px 30px';
    btn1.style.background = '#ff5500';
    btn1.style.color = 'white';
    btn1.style.border = 'none';
    btn1.style.borderRadius = '5px';
    btn1.style.cursor = 'pointer';
    btn1.onclick = function () {
      dialog.remove();
      if (callback1) callback1();
      playMisuc2();
      resolve(1);
    };

    const btn2 = document.createElement('button');
    btn2.textContent = btn2Text;
    btn2.style.padding = '10px 30px';
    btn2.style.background = '#ff5500';
    btn2.style.color = 'white';
    btn2.style.border = 'none';
    btn2.style.borderRadius = '5px';
    btn2.style.cursor = 'pointer';
    btn2.onclick = function () {
      dialog.remove();
      if (callback2) callback2();
      resolve(2);
      playMisuc2();
    };

    buttonContainer.appendChild(btn1);
    buttonContainer.appendChild(btn2);
    dialog.appendChild(textDialoga);
    dialog.appendChild(buttonContainer);
    document.body.appendChild(dialog);
  });
}

function clearAllDialogs() {
  document.querySelectorAll('.game-dialog').forEach((d) => d.remove());
}
function choiceDialog3(
  text,
  btn1Text,
  btn2Text,
  btn3Text,
  callback1,
  callback2,
  callback3
) {
  return new Promise((resolve) => {
    clearAllDialogs();
    const dialog = document.createElement('div');
    dialog.className = 'game-dialog';
    dialog.id = 'choiceDialog';
    dialog.style.position = 'fixed';
    dialog.style.top = '77%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translateX(-50%)';
    dialog.style.background = 'rgba(110, 99, 99, 0.7)';
    dialog.style.width = '800px';
    dialog.style.height = 'auto';
    dialog.style.borderRadius = '5px';
    dialog.style.border = '2px solid rgb(148, 141, 126)';
    dialog.style.boxShadow = '0 0 20px rgb(148, 141, 126)';
    dialog.style.overflow = 'auto';
    dialog.style.padding = '20px';
    dialog.style.zIndex = '99';

    const textDialoga = document.createElement('p');
    textDialoga.textContent = text;
    textDialoga.style.margin = '15px';
    textDialoga.style.color = 'white';
    textDialoga.style.wordWrap = 'break-word';
    textDialoga.style.fontSize = '20px';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '20px';
    buttonContainer.style.marginTop = '20px';

    const btn1 = document.createElement('button');
    btn1.textContent = btn1Text;
    btn1.style.padding = '10px 20px';
    btn1.style.background = '#ff5500';
    btn1.style.color = 'white';
    btn1.style.border = 'none';
    btn1.style.borderRadius = '5px';
    btn1.style.cursor = 'pointer';
    btn1.onclick = function () {
      dialog.remove();
      if (callback1) callback1();
      playMisuc2();
      resolve(1);
    };

    const btn2 = document.createElement('button');
    btn2.textContent = btn2Text;
    btn2.style.padding = '10px 20px';
    btn2.style.background = '#ff5500';
    btn2.style.color = 'white';
    btn2.style.border = 'none';
    btn2.style.borderRadius = '5px';
    btn2.style.cursor = 'pointer';
    btn2.onclick = function () {
      dialog.remove();
      if (callback2) callback2();
      playMisuc2();
      resolve(2);
    };

    const btn3 = document.createElement('button');
    btn3.textContent = btn3Text;
    btn3.style.padding = '10px 20px';
    btn3.style.background = '#ff5500';
    btn3.style.color = 'white';
    btn3.style.border = 'none';
    btn3.style.borderRadius = '5px';
    btn3.style.cursor = 'pointer';
    btn3.onclick = function () {
      dialog.remove();
      if (callback3) callback3();
      resolve(3);
    };

    buttonContainer.appendChild(btn1);
    buttonContainer.appendChild(btn2);
    buttonContainer.appendChild(btn3);
    dialog.appendChild(textDialoga);
    dialog.appendChild(buttonContainer);
    document.body.appendChild(dialog);
  });
}

function choiceDialog5(
  text,
  btn1Text,
  btn2Text,
  btn3Text,
  btn4Text,
  btn5Text,
  callback1,
  callback2,
  callback3,
  callback4,
  callback5
) {
  return new Promise((resolve) => {
    clearAllDialogs();
    const dialog = document.createElement('div');
    dialog.className = 'game-dialog';
    dialog.style.position = 'absolute';
    dialog.style.top = '50%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translate(-50%, -50%)';
    dialog.style.background = 'rgba(0, 0, 0, 0.85)';
    dialog.style.backdropFilter = 'blur(10px)';
    dialog.style.width = '600px';
    dialog.style.height = 'auto';
    dialog.style.borderRadius = '20px';
    dialog.style.border = '2px solid rgb(148, 141, 126)';
    dialog.style.boxShadow = '0 0 30px rgba(0,0,0,0.5)';
    dialog.style.overflow = 'auto';
    dialog.style.padding = '30px';
    dialog.style.zIndex = '1000';
    dialog.style.textAlign = 'center';

    const textDialoga = document.createElement('p');
    textDialoga.textContent = text;
    textDialoga.style.margin = '20px';
    textDialoga.style.color = 'white';
    textDialoga.style.wordWrap = 'break-word';
    textDialoga.style.fontSize = '24px';
    textDialoga.style.fontWeight = 'bold';
    textDialoga.style.textShadow = '0 0 5px black';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.alignItems = 'center';
    buttonContainer.style.gap = '15px';
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.width = '100%';

    function createButton(text, callback, resolveValue) {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.style.padding = '12px 30px';
      btn.style.width = '80%';
      btn.style.maxWidth = '300px';
      btn.style.background = '#ff5500';
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '10px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '18px';
      btn.style.fontWeight = 'bold';
      btn.style.transition = 'all 0.2s';
      btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';

      btn.onmouseenter = () => {
        btn.style.background = '#ff7700';
        btn.style.transform = 'scale(1.02)';
      };
      btn.onmouseleave = () => {
        btn.style.background = '#ff5500';
        btn.style.transform = 'scale(1)';
      };

      btn.onclick = () => {
        dialog.remove();
        if (callback) callback();
        if (playMisuc2) playMisuc2();
        resolve(resolveValue);
      };
      return btn;
    }

    buttonContainer.appendChild(createButton(btn1Text, callback1, 1));
    buttonContainer.appendChild(createButton(btn2Text, callback2, 2));
    buttonContainer.appendChild(createButton(btn3Text, callback3, 3));
    buttonContainer.appendChild(createButton(btn4Text, callback4, 4));
    buttonContainer.appendChild(createButton(btn5Text, callback5, 5));

    dialog.appendChild(textDialoga);
    dialog.appendChild(buttonContainer);
    document.body.appendChild(dialog);
  });
}

function videoRevers(ss) {
  video.src = `music/${ss}.mp4`;
}
function videoTimerRevers(ss) {
  return new Promise((resolve) => {
    video.removeAttribute('loop');
    video.src = `music/${ss}.mp4`;
    video.muted = false;
    video.addEventListener(
      'ended',
      function () {
        resolve();
      },
      { once: true }
    );
  });
}
