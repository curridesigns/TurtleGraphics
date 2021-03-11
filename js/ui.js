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

