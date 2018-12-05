// Word guess game steps/comments example
// Define array of words to choose from
let randomWordArr = [ 'spidey', 'friendly','neighbourhood','maryjane','peterparker', 'dailyBugle', 'AuntMay', 'NYC', 'senses', 'tingling'];

// Want to choose randomly from array
// Create a large list of words*
// Then we choose from the array above
let randomWord = randomWordArr [Math.floor (Math.random() * randomWordArr.length)];

// Create globals
let s;
let counter = 0;

// Empty array to store the globals
let answerArray = [];

// Create a function that fills the answer array with underscores
// Make the number of underscores match the letters in each randomly generated word
Function startUp ( )

{

for (var i = 0; i < randomWord.length; i++)

{

answerArray[i] = “_”;

}

// put them in a string 
s = answerArray.join(“ “);
document.getElementById('answer').innerHTML = s;

}

function Letter ( )
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
    }
    // just a thing to annoy :) 
	if(count>5)
	{
	document.getElementById(“stat”).innerHTML = “Com on - you should have guessed it by now”;
	}
}

// this shakes spiderman image
$( document ).click(function() {
    $( "#toggle" ).effect( "shake" );
  });
