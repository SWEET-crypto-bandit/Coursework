function playMisuc() {
  document.getElementById('bgMusic').play();
}
function playMisuc1() {
  document.getElementById('bgMusic1').play();
}
function playDoor(fun) {
  const audio = document.getElementById('bgMusicDoor');
  audio.play();

  audio.addEventListener('ended', function () {
    fun();
  });
}

function playMisuc2() {
  const dd = document.getElementById('bgMusic2');
  dd.currentTime = 0.3;
  dd.play();
}
function playMisuc3() {
  const dd = document.getElementById('bgMusic3');
  if (mapVariable === 'pvp1') {
    dd.play();
    dd.loop = true;
  } else {
    dd.pause();
  }
}
function playMisuc4() {
  document.getElementById('bgMusic4').play();
}
function playMisuc5() {
  const dd = document.getElementById('bgMusic5');
  if (mapVariable === 'desert') {
    dd.play();
  } else {
    dd.pause();
  }
}
function playsid1() {
  document.getElementById('bgMusic6').play();
}
function playMisuc7() {
  const dd = document.getElementById('bgMusic7');
  if (mapVariable === 'sudrovich') {
    dd.play();
    dd.volume = 0.5;
    dd.loop = true;
  } else {
    dd.pause();
  }
} // музыка сидровича

function playchigur() {
  const dd = document.getElementById('bgMusic8');
  const dd1 = document.getElementById('bgMusic9');
  if (mapVariable === 'city') {
    dd1.play();
    dd.play();
    dd.volume = 0.5;
  } else {
    dd.pause();
    dd1.pause();
  }
}
function playMisuc10() {
  document.getElementById('bgMusic10').play();
}
function playMisuc11() {
  document.getElementById('bgMusic11').play();
}

function playMisuc12() {
  const dd = document.getElementById('bgMusic12');
  if (mapVariable === 'boss') {
    dd.currentTime = 2;
    dd.play();
  } else {
    dd.pause();
  }
}
function playMisuc13() {
  const dd = document.getElementById('bgMusic13');
  if (mapVariable === 'shop') {
    dd.play();
  } else {
    dd.pause();
  }
}
function playMisuc14() {
  const dd = document.getElementById('bgMusic14');
  if (mapVariable === 'hospital') {
    dd.play();
  } else {
    dd.pause();
  }
}
function playMisuc15() {
  document.getElementById('bgMusic15').play()
}

function playDarkMisuc1 () {
   const dd = document.getElementById('bgDarkMisuc1')
   if(mapVariable === 'darkcity') {
    dd.loop = true
dd.play()
   } else {
    dd.pause()
   }
 }

 function playDarkMisuc3 () {
   const dd = document.getElementById('bgDarkMisuc3')
   if(mapVariable === 'snackBar') {
    dd.loop = true
dd.play()
   } else {
    dd.pause()
   }
 }

function playDarkMisuc5() {
   const dd = document.getElementById('bgDarkMisuc5')
   if(mapVariable === 'director') {
    dd.loop = true
dd.play()
   } else {
    dd.pause()
   }
 }
function playDarkMisuc6() {
   const dd = document.getElementById('bgDarkMisuc8')
   if(mapVariable === 'pvp3') {
    dd.loop = true
dd.play()
   } else {
    dd.pause()
   }
 }
// гитара
async function playDarkGitaraMusic() {
  const git1 = document.getElementById('bgDarkMisuc2');
  const git2 = document.getElementById('bgDarkMisuc4');
  const git3 = document.getElementById('bgDarkMisuc6');
  const git4 = document.getElementById('bgDarkMisuc7');

  if (mapVariable === 'playGitara') {
    mapVariable = 'playGitara1';
    git4.pause();
    git1.loop = true;
    git1.play();
    await choiceDialog2('За каждые 5с 1 бублик', 'уйти', 'поменять музыку', darkcity, playDarkGitaraMusic);

  } else if (mapVariable === 'playGitara1') { // Используем else if
    mapVariable = 'playGitara2';
    git1.pause();
    git2.loop = true;
    git2.play();
    await choiceDialog2('За каждые 5с 1 бублик', 'уйти', 'поменять музыку', darkcity, playDarkGitaraMusic);

  } else if (mapVariable === 'playGitara2') { // Используем else if
    mapVariable = 'playGitara3';
    git2.pause();
    git3.loop = true;
    git3.play();
    await choiceDialog2('За каждые 5с 1 бублик', 'уйти', 'поменять музыку', darkcity, playDarkGitaraMusic);

  } else if (mapVariable === 'playGitara3') { // Используем else if
    mapVariable = 'playGitara';
    git3.pause();
    git4.loop = true;
    git4.play();
    await choiceDialog2('За каждые 5с 1 бублик', 'уйти', 'поменять музыку', darkcity, playDarkGitaraMusic);

  } else if (mapVariable === 'darkcity') {
    git1.pause();
    git2.pause();
    git3.pause();
    git4.pause();
  }
}
