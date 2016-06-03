var input = {
	height: "",
	char: ""
};

var button = document.getElementById("growTree");

button.addEventListener("click", buildTree);

var inputHeight = document.getElementById("height");
var inputCharacter = document.getElementById("character");

inputHeight.addEventListener("keypress", keyPressFunction);
inputCharacter.addEventListener("keypress", keyPressFunction);

// function log() {
// 	console.log(input.height);
// 	console.log(input.char);
// }

function buildTree() {

input.height = inputHeight.value;
input.char = inputCharacter.value;

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
		buildTree();
	}
}





