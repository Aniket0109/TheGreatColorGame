// var game ={};

// game.init = function(){
// 	setUpModeListener();
//     setUpSquares();
//     reset();
// }

// game.init();

var numSquares = 6;
var pickedColor;
var colors = [];
var list = document.querySelectorAll(".square");
var colorDisplay = document.getElementsByTagName("span")[0];
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

// colorDisplay.textContent = pickedColor;

init();

function init(){
    setUpModeListener();
    setUpSquares();
    reset();
}

function setUpSquares(){
	for(var i=0;i<list.length;i++){
	list[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor
		    if (clickedColor === pickedColor) {
			    messageDisplay.textContent ="CORRECT!!!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "PLay Again";
		    }else{
			    messageDisplay.textContent = "Try Again";
			    this.style.visibility = "hidden";
		    }
	    });
    }
}

function setUpModeListener(){
	for(var i =0;i<modeButton.length;i++){
	    modeButton[i].addEventListener("click",function(){
		    modeButton[0].classList.remove("selected");
		    modeButton[1].classList.remove("selected");
		    this.classList.add("selected");
		    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		    reset();
	    });
    }
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Color";
	for(var i=0;i<list.length;i++){
		if(colors[i]){
			list[i].style.backgroundColor = colors[i];
			list[i].style.display = "block";
		}else{
		    list[i].style.display = "none";
		}
    }
  }
// easyBtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<list.length;i++){
// 		if (i<3) {
// 			list[i].style.backgroundColor = colors[i];
// 		}else{
// 			list[i].style.display = "none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<list.length;i++){
// 			list[i].style.backgroundColor = colors[i];
//             list[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click",function(){
	reset();
});
function changeColors(color){
    for(var j=0;j<list.length;j++){
		list[j].style.background = pickedColor;
		list[j].style.visibility = "visible";
	}
}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(index){
	var arr = [];
	for(var j=0;j<index;j++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r+", "+ g+", "+ b+")";
}