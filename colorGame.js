var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay  = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyBnt = document.querySelector("#easyBtn");
var hardBnt = document.querySelector("#hardBtn");



easyBnt.addEventListener("click", function(){
    easyBnt.classList.add("selected");
    hardBnt.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];   
        }else {
            squares[i].style.display = "none";
        }
    }
})

hardBnt.addEventListener("click", function(){
    easyBnt.classList.remove("selected");
    hardBnt.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // reseting stripe text
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    // change color of banner
    h1.style.backgroundColor = "steelblue";
    // change the colors of squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to square
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // comapre color to pickedColor
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;

    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number){
    //  make an array 
    var arr = []
    // repeat num times
    for(var i = 0; i < number; i++){
       arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}