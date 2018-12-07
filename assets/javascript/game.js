// Word guess game steps/comments example
// Define array of words to choose from
let randomWordArr = [ 'spidey', 'friendly','neighbourhood','maryjane','peterparker', 'dailyBugle', 'AuntMay', 'NYC', 'senses', 'tingling'];
// create variables
let wins = 0;
let losses =0;
let count = 0;

let wrongLetter = [];
let guessesLeft = 9;
let underScores = [];
let userGuesses = [];
let randomWord = [];
let answerArray=[];


// Then we choose from the array above
function startGame (){
	// picks a randomword
	 randomWord = randomWordArr [Math.floor (Math.random() * randomWordArr.length)];
	// take wordbank and create underscores for each 
	for(var i = 0; i<randomWord.length; i++)
	{
		//push to underScores
		underScores.innerHTML= ('_');
		console.log(randomWord);

	}
}

// Call game
startGame();
 

// Create globals
let s;
let counter = 0;

// Empty array to store the globals


// Create a function that fills the answer array with underscores
// Make the number of underscores match the letters in each randomly generated word
function startUp ( )

{

for (var i = 0; i < randomWord.length; i++)

{

answerArray[i] = ('_');

}

// put them in a string 
s = answerArray.join("_");
document.getElementById('answer').innerHTML = s;

}
function validate() {
	var element = document.getElementById('letter');
	element.value = element.value.replace(/[^a-zA-Z]+/, '');
  };

function letter ( )
{
// Here we get the letter that the user typed in input box
	let letter = document.getElementById('letter').value;

    // make sure we have a guess (more checks can be make here, only letters etc.)
	if (letter.length > 0)
	{
		for (let i = 0; i < randomWord.length; i++)
		{

            // now, if the randomword contains a letter that the user typed in 
			if (randomWord[i] === letter)
				{
                // assig it to letter
				answerArray[i] = letter;
				}

        }
        // enables user to press letter button to generate answer/counter/stat in p
        $('#letter').click(() => {
            $('#answer').toggle()
          });
        // here is how many ties it takes to guess
		count++;

		document.getElementById("counter").innerHTML = "No of Clicks:" + count;
		document.getElementById("answer").innerHTML = answerArray.join("");
		document.getElementById('letter').value = '';
    }
    // just a thing to annoy :) 
	if(count>5)
	{
	document.getElementById("stat").innerHTML = "Keep guessing, but hurry it up!";
	}
}

// this shakes spiderman image
$( document ).click(function() {
	// alert("shake")
    $( "#toggle" ).effect( "shake" );
  });
