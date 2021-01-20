let passSave = "123";


let passCount = 1;
let passMax = 3;

// this is what is called from the onsubmit
function checkPass() {

	// lets get what ever is in the form for password
	let passWord = document.forms["formName"]["password"].value;
	// note that we need both the forms name and the name of the input tha we want to get

	//first check if the user is below the max number of changes
	if (passCount <= passMax) {

		// Check if the passWord is  not correct
		if (passWord != passSave) {
			console.log(passCount);
			// make a var to hold the number of attempts left
			var attemptsLeft = 4 - passCount;

			//inform the user of how its going for them
			document.getElementById("passStatus").innerHTML = "You have " + attemptsLeft + " attempts left!";

			// update the count for each failed password check
			passCount++;

			// then return false, so that the submit action wont run
			return false;
		} else {
			// if there is something in the password, return true so the submit action happends
			return true;
		}

	} else {
		// if the user is above the max changes for the password check they are locked out
		//inform the user of how its going for them
		document.getElementById("passStatus").innerHTML = "NO LOGIN FOR YOU!";
		// and also make it red
		document.getElementById("passStatus").style.color = "yellow";
		return false;

	}
}
