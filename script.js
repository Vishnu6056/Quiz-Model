function checkSingleAnswer(qName) {
	// Get the selected option
	var selectedOption = document.querySelector('input[name="' + qName + '"]:checked');
	
	if (selectedOption) {
		// Check if the selected option is correct
		if (selectedOption.value === "a") {
			document.getElementById(qName + "-result").innerHTML = "Correct!";
			document.getElementById(qName + "-result").className = "result correct";
		} else {
			document.getElementById(qName + "-result").innerHTML = "Incorrect!";
			document.getElementById(qName + "-result").className = "result incorrect";
		}
	} else {
		document.getElementById(qName + "-result").innerHTML = "Please select an option.";
		document.getElementById(qName + "-result").className = "result";
	}
}

function checkMultipleAnswers(qName) {
	// Get the selected options
	var selectedOptions = document.querySelectorAll('input[name="' + qName + '[]"]:checked');
	var correctOptions = ['a', 'c'];
	
	if (selectedOptions.length > 0) {
		// Check if the selected options are correct
		var isCorrect = true;
		for (var i = 0; i < selectedOptions.length; i++) {
			if (correctOptions.indexOf(selectedOptions[i].value) === -1) {
				isCorrect = false;
				break;
			}
		}
		
		if (isCorrect) {
			document.getElementById(qName + "-result").innerHTML = "Correct!";
			document.getElementById(qName + "-result").className = "result correct";
		} else {
			document.getElementById(qName + "-result").innerHTML = "Incorrect!";
			document.getElementById(qName + "-result").className = "result incorrect";
		}
	} else {
		document.getElementById(qName + "-result").innerHTML = "Please select at least one option.";
		document.getElementById(qName + "-result").className = "result";
	}
}

function checkFillInBlank(qName, answer) {
	// Get the user's answer
	var userAnswer = document.getElementById(qName).value;
	
	if (userAnswer === answer) {
		document.getElementById(qName + "-result").innerHTML = "Correct!";
		document.getElementById(qName + "-result").className = "result correct";
	} else {
		document.getElementById(qName + "-result").innerHTML = "Incorrect!";
		document.getElementById(qName + "-result").className = "result incorrect";
	}
}
