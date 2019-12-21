
// Create the container element where the grid will be held
const container = document.querySelector('#container');
container.style = "margin: auto auto; display: grid; grid-template-columns: repeat(16, 1fr); grid-gap: 1%;";

// Container must not be wider than its height
var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
container.style.width = viewportHeight*0.98 + 'px';

var square = document.createElement('div');
square.classList.add('square');
square.style= "background: linear-gradient(45deg, rgba(70,19,105,1) 0%, rgba(138,20,20,1) 50%, rgba(89,64,28,1) 100%); border-radius: 10%;"

while(container.childElementCount<16*16){
    container.appendChild(square.cloneNode(true));
};