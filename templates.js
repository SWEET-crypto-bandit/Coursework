function creayDialog (text) { //промис для диалогов
return new Promise((resolve)=> {

    const dialog = document.createElement('div')
     dialog.style.position = 'absolute'
     dialog.style.top = '77%'
     
     dialog.style.background = 'rgba(110, 99, 99, 0.7)'
     dialog.style.width = '800px'
     dialog.style.height = '200px'
     dialog.style.borderRadius = '5px'
     dialog.style.border = '2px solid rgb(148, 141, 126)';
dialog.style.boxShadow = '0 0 20px rgb(148, 141, 126)'
dialog.style.overflow = 'auto'

const textDialoga = document.createElement('p')
textDialoga.textContent = text
textDialoga.style.margin = '15px'
textDialoga.style.color = 'white'
textDialoga.style.wordWrap = 'break-word'
textDialoga.style.maxHeight = '100%'
textDialoga.style.fontSize = '20px'

const buttonDialog = document.createElement('button')
buttonDialog.textContent = 'further'
buttonDialog.style.position = 'absolute';
buttonDialog.style.bottom = '10px';
buttonDialog.style.right = '10px';
buttonDialog.style.padding = '8px 20px';
buttonDialog.onclick = function() {
    playMisuc2()
dialog.remove()
resolve()
}


dialog.appendChild(textDialoga)
dialog.appendChild(buttonDialog)
document.body.appendChild(dialog)

});
}

function choiceDialog2(text, btn1Text, btn2Text, callback1, callback2) {
    return new Promise((resolve) => {
        const dialog = document.createElement('div');
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
        btn1.onclick = function() {
            dialog.remove();
            if (callback1) callback1();
            playMisuc2()
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
        btn2.onclick = function() {
            dialog.remove();
            if (callback2) callback2();
            resolve(2);
            playMisuc2()
        };

        buttonContainer.appendChild(btn1);
        buttonContainer.appendChild(btn2);
        dialog.appendChild(textDialoga);
        dialog.appendChild(buttonContainer);
        document.body.appendChild(dialog);
    })
}

function choiceDialog3(text, btn1Text, btn2Text, btn3Text, callback1, callback2, callback3) {
    return new Promise((resolve) => {
        const dialog = document.createElement('div');
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
        btn1.style.padding = '10px 20px';
        btn1.style.background = '#ff5500';
        btn1.style.color = 'white';
        btn1.style.border = 'none';
        btn1.style.borderRadius = '5px';
        btn1.style.cursor = 'pointer';
        btn1.onclick = function() {
            dialog.remove();
            if (callback1) callback1();
            playMisuc2()
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
        btn2.onclick = function() {
            dialog.remove();
            if (callback2) callback2();
            playMisuc2()
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
        btn3.onclick = function() {
            dialog.remove();
            if (callback3) callback3();
            resolve(3);
        };

        buttonContainer.appendChild(btn1)
        buttonContainer.appendChild(btn2)
        buttonContainer.appendChild(btn3)
        dialog.appendChild(textDialoga)
        dialog.appendChild(buttonContainer)
        document.body.appendChild(dialog)
    });
}

function videoRevers (ss) {
    video.src = `music/${ss}.mp4`
}