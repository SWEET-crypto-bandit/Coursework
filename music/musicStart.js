function playMisuc () {
    document.getElementById('bgMusic').play();
}
function playMisuc1 () {
    document.getElementById('bgMusic1').play();
}
function playDoor(fun) {
    const audio = document.getElementById('bgMusicDoor')
    audio.play();
    
    audio.addEventListener('ended', function() {
      fun()
    });
}
  
function playMisuc2 () {
    const dd = document.getElementById('bgMusic2')
    dd.currentTime = 0.3
    dd.play()    
    
}
function playMisuc3 () {
    document.getElementById('bgMusic3').play();
    
}
 function playMisuc4 () {
    document.getElementById('bgMusic4').play();
 }

