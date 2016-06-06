var input = {
	height: "",
	char: ""
};

var button = document.getElementById("growTree");
var inputHeight = document.getElementById("height").value;
var inputCharacter = document.getElementById("character").value;

var inputCharacterListener = document.getElementById("character");
inputCharacterListener.addEventListener("keypress", keyPressFunction);
var inputHeightListener = document.getElementById("height");
inputHeightListener.addEventListener("keypress", keyPressFunction);


button.addEventListener("click", collectValues);

function collectValues (input) {
input.height = document.getElementById("height").value;
input.char = document.getElementById("character").value;
checkValues(input);
}

function checkValues (input) {
	if (input.height === "" || input.char === "") {
		alert("please enter a value");
	} else {
		buildTree(input);
	}
}



// function log() {
// 	console.log(input.height);
// 	console.log(input.char);
// }

function buildTree(input) {

// input.height = inputHeight.value;
// input.char = inputCharacter.value;

var spaces;
var spaceCounter = input.height - 1;

var character;
var characterCounter = 1;

for (var i = 0; i < input.height; i++) {
	spaces = ' '.repeat(spaceCounter);

	character=input.char.repeat(characterCounter);

	spaceCounter--;
	characterCounter = characterCounter +2;
	console.log(spaces + character);
};
}

	function keyPressFunction (event) {
    if (event.keyCode === 13) {
        collectValues(input);
    }

}





