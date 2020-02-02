// Declare initial width/height in squares
var squareCount = 16;

// Create the container element where the grid will be held
const container = document.querySelector('#container');

// Container must not be wider than its height
var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Create square element of a grid
var square = document.createElement('div');
square.classList.add('square');
square.style.borderRadius = "10%";
square.style.backgroundColor = "rgba(0,0,0,0.99)";
square.style.fontSize = '0px';

// Squares are here
var squares = document.getElementsByClassName('square');


// Function that generates the grid
function generateGrid() {
    container.style = "margin: auto auto; display: grid; grid-template-columns: repeat(" + squareCount + ", 1fr); grid-gap: " + 16/squareCount +"%";
    container.style.width = viewportHeight*0.94 + 'px';
    container.innerHTML = '';
    while(container.childElementCount<squareCount*squareCount){
        container.appendChild(square.cloneNode(true));
    };
    // Add event listener to every square div to actually call color changing
    for(var i = 0; i < squares.length; i++){
        var thisSquare =  squares[i];
        thisSquare.addEventListener('mouseover', changeColor)
    }
}

// Add buttons holder
var buttonsHolder = document.createElement('div');
buttonsHolder.style.position = 'relative';
buttonsHolder.style.top = viewportHeight*0.13 + 'px';
buttonsHolder.style.textAlign = 'center';
container.parentNode.insertBefore(buttonsHolder, container.nextSibling);

// Add reset button
var resetButton = document.createElement('button');
resetButton.textContent = 'reset';
resetButton.classList.add('button');
resetButton.id = 'reset-button';
resetButton.style.width = viewportHeight*0.15 + 'px';
resetButton.style.height = viewportHeight*0.05 + 'px';
resetButton.style.margin = '0 4% 4% 4%';
buttonsHolder.appendChild(resetButton);

// Add generate button
var generateButton = document.createElement('button');
generateButton.textContent = 'resize';
generateButton.classList.add('button');
generateButton.id = 'generate-button';
generateButton.style.width = viewportHeight*0.15 + 'px';
generateButton.style.height = viewportHeight*0.05 + 'px';
generateButton.style.margin = '0 4% 4% 4%';
buttonsHolder.appendChild(generateButton);

// Generate a new color for div (gets initial color, so maybe will modify in the future to change instead of recreate)
function generateNewColor(initialColor){
    var stringColor = initialColor.slice(5,-1);
    var arrayColor = stringColor.split(", ");
    for(var i=0; i<arrayColor.length; i++) {
        arrayColor[i] = parseFloat(arrayColor[i]);
    };
    for(var i=0; i<arrayColor.length-1; i++) {
        arrayColor[i] = Math.floor(Math.random()*256)
    };
    var newColorString = "rgba(" + arrayColor[0] + ", " + arrayColor[1] + ", " + arrayColor[2] + ", " + arrayColor[3] + ")";
    return newColorString;
}

// Assign new color to div
function changeColor() {
    var newColor = generateNewColor(this.style.backgroundColor);
    this.style.backgroundColor = newColor;
}

// Create custom grid
function generateCustomGrid(){
    squareCount = parseInt(prompt("Select the desired size of the grid","16"));
    generateGrid();
}


// Add event listener to resetButton to reset the grid
var resetButtonDOM = document.getElementById('reset-button');
resetButtonDOM.addEventListener('click', generateGrid);

// Add event listener to generateButton to resize THEN reset the grid
var generateButtonDOM = document.getElementById('generate-button');
generateButtonDOM.addEventListener('click', generateCustomGrid);

generateGrid();