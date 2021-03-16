//selects the direction keys, and then tells them what function to do
const forwardButt = document.querySelector('.forward');
forwardButt.addEventListener('click', () => {turtle.forward();});
const backButt = document.querySelector('.back');
backButt.addEventListener('click', () => {turtle.back();});
const rotateButt = document.querySelector('.rotate');
rotateButt.addEventListener('click', () => {turtle.rotate();});
const rotateLeftButt = document.querySelector('.rotateLeft');
rotateLeftButt.addEventListener('click', () => {turtle.rotateLeft();});






//selects the text input and the run button
const runButt = document.querySelector('#run');
const prompt = document.querySelector('#prompt');
runButt.addEventListener('click', () => {commandLine.runCommand();});

const commandLine = {
    constructor(){
        this.history = [];
        this.historyIndex = 0;
        this.text = "";
    },

    runCommand(){
        this.text = prompt.value.split(" ");
        this.text[0]=this.text[0].toLowerCase();
        //this.history.unshift(this.text);
        let number;
        if (Number(this.text[1])){
            number = Number(this.text[1]);
        } else {
            number = undefined;
        }
        //console.log(Number(this.text[1]));
        switch (this.text[0]){
            case 'forward':
                turtle.forward(number);
                break;
            case 'backward':
                turtle.back(Number(this.text[1]));
                break;
            case 'right':
                turtle.rotate(Number(this.text[1]));
                break;
            case 'left':
                turtle.rotateLeft(Number(this.text[1]));
                break;
        }
        //console.log(this.text);
    }
}

