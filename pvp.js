

async function pvp () {
    return new Promise((resolve) => {
    videoRevers('бойВид')
    video.loop = true
    
})}



function pvp1 () {
    
    videoRevers('ежбой')
    playMisuc3()
    video.loop = true
    video.style.display = 'block'
    choiceDialog3('Что выберешь', 'Atak', 'blok + Atak', 'border', ff)
enemy()
}
function ff () {
    Enemy.health -= Player.damage
    enemy()
    if (Enemy.health > 0) {choiceDialog3('Что выберешь', 'Atak', 'blok + Atak', 'border', ff)
        playMisuc4()
    }
}
function enemy() {
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
    
    const percent = (Enemy.health / Enemy.maxHealth) * 100;
    document.getElementById('enemyHp').style.width = `${percent}%`;
}


